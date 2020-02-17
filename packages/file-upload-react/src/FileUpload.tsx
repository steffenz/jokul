import React, { useState, useEffect, Dispatch } from "react";

interface File {
    name: string;
}

export const FileUpload = () => {
    const [fileList, setFileList] = useState<Array<File>>([]);

    return (
        <div className="jkl-file-upload">
            <label htmlFor="jkl-file-uploader">
                <form>
                    <div className="jkl-file-upload__upload-area">
                        <span>eller slipp her</span>
                        <input type="file" id="jkl-file-uploader" />
                    </div>
                </form>
            </label>
            <aside className="jkl-message-box jkl-message-box--error jkl-spacing--top-1 jkl-message-box--full">
                <div className="jkl-message-box__message jkl-body">Feilmelding</div>
            </aside>
            <div className="jkl-file-upload__file-list jkl-spacing--top-1">
                {fileList.map((file: File) => (
                    <div className="jkl-file-upload__file-list--item" key={file.name}>
                        {file.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
