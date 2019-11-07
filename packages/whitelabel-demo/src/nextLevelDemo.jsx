/* eslint-disable */
import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { TextField } from "@fremtind/jkl-text-input-react";
import { TertiaryButton, PrimaryButton } from "@fremtind/jkl-button-react";
import { initTabListener } from "@fremtind/jkl-core";
import { Select } from "@fremtind/jkl-select-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { DatePicker } from "@fremtind/jkl-datepicker-react";

import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-button/button.scss";
import "@fremtind/jkl-select/select.css";
import "@fremtind/jkl-checkbox/checkbox.css";
import "@fremtind/jkl-datepicker/datepicker.css";

import "./styles.css";

const listData = [
    {
        q: "Hva er skadet?",
        input: [
            {
                t: "select",
                l: "Skade på",
                items: ["Mobil", "Nettbrett"],
            },
        ],
    },
    {
        q: "Hva slags skade?",
        input: [{ t: "checkbox", l: "Knust skjerm" }, { t: "checkbox", l: "Stjålet" }],
    },
    {
        q: "Når skjedde skaden?",
        input: [{ t: "datepicker" }],
    },
];

initTabListener();

const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) => index === prev || index === current;

const getField = (i, state, setState) => {
    switch (i.t) {
        case "text":
        case "number":
            return (
                <TextField
                    onChange={(e) => setState({ ...state, [i.l]: e.target.value })}
                    value={state[i.l] || ""}
                    type={i.t}
                    label={i.l}
                />
            );
        case "select":
            return (
                <Select
                    label={i.l}
                    items={i.items}
                    value={state[i.l]}
                    onChange={(value) => {
                        console.log("here");
                        setState({ ...state, [i.l]: value });
                    }}
                    className="select-override"
                />
            );
        case "checkbox":
            return (
                <Checkbox
                    name={i.l}
                    checked={state[i.l] || false}
                    value={state[i.l]}
                    onChange={(e) => setState({ ...state, [i.l]: e.target.checked })}
                >
                    {i.l}
                </Checkbox>
            );
        case "datepicker":
            return (
                <DatePicker
                    onlyFuture={false}
                    onChange={(value) => setState({ ...state, [i.l]: value.toDateString() })}
                />
            );
        default:
            return null;
    }
};

const ListItem = ({ index, onClick, data, state }) => {
    const { q, input } = data;
    const a = input.map((i) => state[i.l]).filter(Boolean);
    return (
        <Flipped flipId={createCardFlipId(index)} stagger="card" shouldInvert={shouldFlip(index)} key={q}>
            <div
                className={`listItem ${a.length === 0 ? "listItem-unanswered" : ""}`}
                role="button"
                onClick={() => onClick(index)}
            >
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <div className="listItemContent">
                        <div className="description">
                            {[q, ...a].map((i, idx) => (
                                <Flipped
                                    flipId={`description-${i}`}
                                    stagger="card-content"
                                    shouldFlip={shouldFlip(index)}
                                    delayUntil={createCardFlipId(index)}
                                    key={`description-${i}`}
                                >
                                    <p className={idx === 0 ? "jkl-lead" : "jkl-p"}>{i}</p>
                                </Flipped>
                            ))}
                        </div>
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
};

const ExpandedListItem = ({ index, onClick, data, state, setState }) => {
    const { q, input } = data;
    return (
        <Flipped
            flipId={createCardFlipId(index)}
            stagger="card"
            onStart={(el) => {
                setTimeout(() => {
                    el.classList.add("animated-in");
                }, 400);
            }}
        >
            <div className="expandedListItem">
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <div className="expandedListItemContent">
                        <div className="description">
                            <Flipped
                                flipId={`description-${index}`}
                                stagger="card-content"
                                delayUntil={createCardFlipId(index)}
                            >
                                <h4 className="jkl-h4" onClick={() => onClick(true)}>
                                    {q}
                                </h4>
                            </Flipped>
                        </div>
                        <div className="additional-content">
                            {input.map((i) => (
                                <div style={{ zIndex: 1 }} key={i.l}>
                                    {getField(i, state, setState)}
                                </div>
                            ))}
                            <div>
                                <TertiaryButton onClick={() => onClick(false)}>Neste</TertiaryButton>
                            </div>
                        </div>
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
};

export default function App() {
    const [focused, setFocused] = React.useState(null);

    const [state, setState] = React.useState({});
    React.useEffect(() => {
        setFocused(0);
    }, []);

    return (
        <>
            <Flipper
                flipKey={focused}
                className="staggered-list-content"
                spring="gentle"
                staggerConfig={{
                    card: {
                        reverse: focused !== null,
                    },
                }}
                decisionData={focused}
            >
                <ul className="list">
                    {listData.map((data, index) => {
                        return (
                            <li key={index}>
                                {index === focused ? (
                                    <ExpandedListItem
                                        index={focused}
                                        data={data}
                                        onClick={(close) => {
                                            setFocused(null);
                                            if (!close && index + 1 < listData.length) {
                                                setTimeout(() => {
                                                    setFocused(index + 1);
                                                }, 500);
                                            }
                                        }}
                                        state={state}
                                        setState={setState}
                                    />
                                ) : (
                                    <ListItem
                                        index={index}
                                        data={data}
                                        state={state}
                                        key={index}
                                        onClick={() => {
                                            setFocused(null);
                                            setTimeout(() => {
                                                setFocused(index);
                                            }, 500);
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                    <li className="call-to-action">
                        <PrimaryButton className="jkl-spacing--all-1">Meld inn skaden</PrimaryButton>
                    </li>
                </ul>
            </Flipper>
        </>
    );
}
/* eslint-enable */
