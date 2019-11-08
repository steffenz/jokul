import "regenerator-runtime/runtime";

import React, { useState, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-button/button.scss";
import "@fremtind/jkl-text-input/text-input.scss";
import "@fremtind/jkl-select/select.scss";
import "@fremtind/jkl-radio-button/radio-button.scss";
import "@fremtind/jkl-checkbox/checkbox.scss";
import "@fremtind/jkl-field-group/field-group.scss";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { Select } from "@fremtind/jkl-select-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";

import "./dnb.scss";
import "./sb1.scss";
import "./fremtind.scss";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";

initTabListener();

const App = () => {
    const [selectValue, setSelectValue] = useState("Valg 1");
    const [radioButtonValue, setRadioButtonValue] = useState("");
    const handleRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => setRadioButtonValue(e.target.value);
    return (
        <main style={{ display: "flex", justifyContent: "space-evenly", margin: "32px", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className="dnb1">
                    <PrimaryButton className="jkl-spacing--bottom-2" onClick={() => {}}>
                        Click me
                    </PrimaryButton>
                    <TextField
                        className="jkl-spacing--bottom-2"
                        label="Dette er et tekstfelt"
                        placeholder="Her står det noe"
                    />
                    <Select
                        className="jkl-spacing--bottom-2"
                        label="En nedtrekksmeny"
                        value={selectValue}
                        onChange={setSelectValue}
                        items={["Valg 1", "Valg 2", "Valg 3"]}
                        errorLabel="Du har tatt feil valg"
                    />
                    <FieldGroup className="jkl-spacing--bottom-2" legend="Velg flere ting">
                        <Checkbox value="1" name="cb">
                            Valg 1
                        </Checkbox>
                        <Checkbox value="2" name="cb">
                            Valg 2
                        </Checkbox>
                        <Checkbox value="3" name="cb">
                            Valg 3
                        </Checkbox>
                    </FieldGroup>
                    <RadioButtons
                        name=""
                        legend="Et valg å ta"
                        choices={["Valg 1", "Valg 2", "Valg 3"]}
                        selectedValue={radioButtonValue}
                        onChange={handleRadioButtonChange}
                    />
                </div>
                <div className="sb12">
                    <PrimaryButton className="jkl-spacing--bottom-2" onClick={() => {}}>
                        Click me
                    </PrimaryButton>
                    <TextField
                        className="jkl-spacing--bottom-2"
                        label="Dette er et tekstfelt"
                        placeholder="Her står det noe"
                    />
                    <Select
                        className="jkl-spacing--bottom-2"
                        label="En nedtrekksmeny"
                        value={selectValue}
                        onChange={setSelectValue}
                        items={["Valg 1", "Valg 2", "Valg 3"]}
                        errorLabel="Du har tatt feil valg"
                    />
                    <FieldGroup className="jkl-spacing--bottom-2" legend="Velg flere ting">
                        <Checkbox value="1" name="cb">
                            Valg 1
                        </Checkbox>
                        <Checkbox value="2" name="cb">
                            Valg 2
                        </Checkbox>
                        <Checkbox value="3" name="cb">
                            Valg 3
                        </Checkbox>
                    </FieldGroup>
                    <RadioButtons
                        name=""
                        legend="Et valg å ta"
                        choices={["Valg 1", "Valg 2", "Valg 3"]}
                        selectedValue={radioButtonValue}
                        onChange={handleRadioButtonChange}
                    />
                </div>
                <div>
                    <PrimaryButton className="jkl-spacing--bottom-2" onClick={() => {}}>
                        Click me
                    </PrimaryButton>
                    <TextField
                        className="jkl-spacing--bottom-2"
                        label="Dette er et tekstfelt"
                        placeholder="Her står det noe"
                    />
                    <Select
                        className="jkl-spacing--bottom-2"
                        label="En nedtrekksmeny"
                        value={selectValue}
                        onChange={setSelectValue}
                        items={["Valg 1", "Valg 2", "Valg 3"]}
                        errorLabel="Du har tatt feil valg"
                    />
                    <FieldGroup className="jkl-spacing--bottom-2" legend="Velg flere ting">
                        <Checkbox value="1" name="cb">
                            Valg 1
                        </Checkbox>
                        <Checkbox value="2" name="cb">
                            Valg 2
                        </Checkbox>
                        <Checkbox value="3" name="cb">
                            Valg 3
                        </Checkbox>
                    </FieldGroup>
                    <RadioButtons
                        name=""
                        legend="Et valg å ta"
                        choices={["Valg 1", "Valg 2", "Valg 3"]}
                        selectedValue={radioButtonValue}
                        onChange={handleRadioButtonChange}
                    />
                </div>
            </div>
        </main>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
