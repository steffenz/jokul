import classNames from "classnames";
import { FileItem } from "./FileItem";
import React, { useState, useEffect, useReducer, useMemo } from "react";

interface Props {
    remote: string;
    multiple?: boolean;
    error?: string;
}

enum FileListActions {
    Add = 1,
    AddMultiple,
    Remove,
}

interface JklFile {
    createdAt: string;
    file: File;
}
interface UploadAction {
    type: FileListActions;
    data: JklFile[];
}

const reducer = (state: Array<JklFile>, action: UploadAction) => {
    switch (action.type) {
        case FileListActions.AddMultiple:
            return [...state, ...action.data];

        case FileListActions.Remove:
            return state;

        default:
            return state;
    }
};

const sortByCreatedAt = (a: JklFile, b: JklFile) => {
    if (a.createdAt > b.createdAt) return 1;
    if (b.createdAt > a.createdAt) return -1;
    return 0;
};

export const FileUpload: React.FC<Props> = ({ remote, multiple = false, error }) => {
    const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
    const [fileList, dispatch] = useReducer(reducer, []);
    const [newFile, setNewFile] = useState<JklFile | null>(null);
    const [move, setMove] = useState(false);

    // TODO go back to useState() - no need for reducer
    const addFiles = (files: FileList) => {
        if (files && files.length) {
            /* Array.from(files).forEach((file) =>
                setNewFile({
                    createdAt: Date.now().toString(),
                    file,
                }),
            ); */
            setMove(true);
            dispatch({
                type: FileListActions.AddMultiple,
                data: Array.from(files).map((file: File) => ({
                    createdAt: Date.now().toString(),
                    file,
                })),
            });
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            addFiles(e.target.files);
        }
    };

    // support all drag events, and add files if any existing (should only happen on drop)
    const handleDrag = (isDragging = false) => (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingOver(isDragging);

        if (e.dataTransfer.files.length) {
            addFiles(e.dataTransfer.files);
        }
    };

    // ensure file order is always the same
    const sortedFiles = useMemo(() => fileList.sort(sortByCreatedAt).reverse(), [fileList]);

    const areaClassNames = classNames("jkl-file-upload__upload-area", {
        "jkl-file-upload__upload-area--is-dragging": isDraggingOver,
    });

    const onNewFileTransitionDone = (file: JklFile) => (e: React.AnimationEvent) => {
        setNewFile(null);

        dispatch({
            type: FileListActions.AddMultiple,
            data: [file],
        });
    };

    return (
        <div className="jkl-file-upload">
            <label
                htmlFor="jkl-file-upload-input"
                onDragEnter={handleDrag(true)}
                onDragOver={handleDrag(true)}
                onDragLeave={handleDrag()}
                onDrop={handleDrag()}
            >
                <form>
                    <div className={areaClassNames}>
                        {isDraggingOver ? (
                            <>slipp her</>
                        ) : (
                            <>
                                <span className="jkl-link">Velg fil</span> eller slipp her
                            </>
                        )}
                        <input
                            type="file"
                            id="jkl-file-upload-input"
                            onChange={handleFileInputChange}
                            multiple={multiple}
                        />
                    </div>
                </form>
            </label>
            {error && (
                <aside className="jkl-message-box jkl-message-box--error jkl-spacing--top-1 jkl-message-box--full">
                    <div className="jkl-message-box__message jkl-body">{error}</div>
                </aside>
            )}
            <div className="jkl-file-upload__file-list jkl-spacing--top-1">
                {/* {newFile && (
                    <FileItem file={newFile.file} className="new" onAnimationEnd={onNewFileTransitionDone(newFile)} />
                )} */}
                {sortedFiles.map((jklFile: JklFile, i: number) => (
                    <FileItem
                        className={move ? "move" : ""}
                        remote={remote}
                        file={jklFile.file}
                        key={jklFile.createdAt}
                        onAnimationEnd={() => setMove(false)}
                    />
                ))}
            </div>
        </div>
    );
};
