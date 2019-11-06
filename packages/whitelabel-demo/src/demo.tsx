import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-button/button.scss";
import { PrimaryButton } from "@fremtind/jkl-button-react";

import "./dnb.scss";
import "./sb1.scss";
import "./fremtind.scss";

initTabListener();

const App = () => {
    return (
        <main style={{ display: "flex", justifyContent: "space-evenly", margin: "32px", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h1 className="jkl-h4">Font og farge</h1>
                <div className="dnb1">
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                </div>
                <div className="sb12">
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                </div>
                <div>
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "24px" }}>
                <h1 className="jkl-h4">Font og farge++</h1>

                <div className="dnb">
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                </div>
                <div className="sb1">
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                </div>
                <div>
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                </div>
            </div>
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
