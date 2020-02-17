import React from "react";
import { FileUpload } from "../src";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-file-upload/file-upload.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";

const Example = () => {
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <FileUpload />
        </section>
    );
};

export default Example;
