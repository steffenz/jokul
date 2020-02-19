import React, { useState, useMemo, useEffect } from "react";
import { ProgressBar } from "@fremtind/jkl-progress-bar-react";
import "@fremtind/jkl-progress-bar/progress-bar.min.css";

enum FileStatus {
    New = 0,
    InProgress = 1,
    Success = 2,
    Error = 2,
}

interface Props {
    file: File;
    remote?: string;
    onAnimationEnd?: void;
    className: string;
    style?: object;
}

const uploadFile = (file: File, url: string, onProgress: Function, onSuccess: Function, onError: Function) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    xhr.open("POST", url, true);

    xhr.upload.addEventListener("progress", (e) => {
        onProgress(e);
    });

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            onSuccess(e);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            onError(e);
        }
    });

    formData.append("avatar", file);
    xhr.send(formData);
};

export const FileItem: React.FC<Props> = ({ remote, file, onAnimationEnd, className, style }) => {
    const [uploadState, setUploadState] = useState<FileStatus>(FileStatus.New);
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [previewFile, setPreviewFile] = useState<string | null>();
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        if (remote) {
            reader.onloadend = () => {
                if (reader.result) {
                    setPreviewFile(reader.result.toString());
                }
            };
        }
    }, [file]);

    useEffect(() => {
        if (uploadState === FileStatus.New && file && remote) {
            uploadFile(
                file,
                remote,
                (e) => {
                    setUploadState(FileStatus.InProgress);
                    setProgress(e.loaded);
                },
                (e) => {
                    setUploadState(FileStatus.Success);
                    const response = JSON.parse(e.target.response);
                    setFileUrl(response.data.url);
                },
                (e) => {
                    setUploadState(FileStatus.Error);
                },
            );
        }
    }, [file, uploadState]);

    return (
        <div
            className={`jkl-file-upload__file-list--item ${className || ""}`}
            onAnimationEnd={onAnimationEnd}
            key={file.name}
            style={style}
        >
            <span className="jkl-file-upload__file-list--percent">{Math.floor((progress / file.size) * 100)}%</span>
            {fileUrl && <img alt={file.name} src={fileUrl} />}
            <ProgressBar progress={{ current: progress, total: file.size }} />
        </div>
    );
};
