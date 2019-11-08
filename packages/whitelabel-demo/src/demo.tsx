import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-button/button.scss";
import "@fremtind/jkl-text-input/text-input.scss";
import "@fremtind/jkl-select/select.scss";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { Select } from "@fremtind/jkl-select-react";

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
                    <TextField label="Dette er et tekstfelt" placeholder="Her står det noe" />
                    <Select label="En nedtrekksmeny" items={["Valg 1", "Valg 2", "Valg 3"]} />
                </div>
                <div className="sb12">
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                    <TextField label="Dette er et tekstfelt" placeholder="Her står det noe" />
                    <Select label="En nedtrekksmeny" items={["Valg 1", "Valg 2", "Valg 3"]} />
                </div>
                <div>
                    <PrimaryButton onClick={() => {}}>Click me</PrimaryButton>
                    <TextField label="Dette er et tekstfelt" placeholder="Her står det noe" />
                    <Select label="En nedtrekksmeny" items={["Valg 1", "Valg 2", "Valg 3"]} />
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

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
