import React, { useState, useEffect } from "react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { PrimaryButton, TertiaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import { Layout } from "../components";
import "./edit.scss";

interface CustomPropertiesList {
    prop: string;
    val: string;
}

const customFactory = (prop: string, val: string) => ({ prop, val });

const customProperties = [
    customFactory("button-height--normal", "56px"),
    customFactory("button-min-width--normal", "128px"),
    customFactory("button-bg-color", "#fff"),
    customFactory("button-text-color", "#000"),
    customFactory("button-bg-color--primary", "#000"),
    customFactory("button-text-color--primary", "#fff"),
    customFactory("button-border-color", "#000"),
    customFactory("button-border-width", "1px"),
    customFactory("button-border-radius", "999px"),
];

const edit = () => {
    const [properties, setProperties] = useState<CustomPropertiesList[]>(customProperties);
    const [prop, setProp] = useState("");
    const [val, setVal] = useState("");
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        customProperties.map(({ prop, val }) => document.body.style.setProperty(`--${prop}`, val));
    }, []);

    return (
        <Layout>
            <div className="portal-edit">
                <div className="jkl-spacing--bottom-2">
                    {properties.map(({ prop, val }) => (
                        <div key={prop} className="jkl-spacing--bottom-1">
                            <TertiaryButton
                                forceCompact
                                onClick={() => {
                                    setProp(prop);
                                    setVal(val);
                                    setEditMode(true);
                                }}
                            >
                                {prop}: {val}
                            </TertiaryButton>
                        </div>
                    ))}
                </div>
                <div className="portal-edit__components">
                    <PrimaryButton>Hello</PrimaryButton>
                    <SecondaryButton>World</SecondaryButton>
                </div>
            </div>

            {editMode && (
                <div className="portal-editor">
                    <TextField
                        className="jkl-spacing--bottom-2"
                        value={prop}
                        onChange={(e) => console.log(e.target.value)}
                        label="Property"
                    />
                    <TextField
                        className="jkl-spacing--bottom-2"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        label="Value"
                    />
                    <SecondaryButton
                        className="jkl-spacing--top-3 jkl-spacing--right-2"
                        onClick={() => setEditMode(false)}
                    >
                        Abort
                    </SecondaryButton>
                    <PrimaryButton
                        className="jkl-spacing--top-3"
                        onClick={() => {
                            document.body.style.removeProperty(`--${prop}`);
                            document.body.style.setProperty(`--${prop}`, val);
                            const filteredProps = properties.filter((property) => property.prop !== prop);
                            setProperties([...filteredProps, { prop, val }]);
                            setEditMode(false);
                        }}
                    >
                        Set property
                    </PrimaryButton>
                </div>
            )}
        </Layout>
    );
};

export default edit;
