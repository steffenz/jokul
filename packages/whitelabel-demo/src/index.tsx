import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { initTabListener } from "@fremtind/jkl-core";
import NextLevel from "./nextLevelDemo";

import "./dnb.scss";
import "./sb1.scss";
import "./fremtind.scss";

initTabListener();

const App = () => {
    return (
        <>
            <nav
                style={{
                    width: "100%",
                    height: "80px",
                    backgroundColor: "#14555A",
                    color: "white",
                    fontSize: "48px",
                }}
            >
                <aside style={{ padding: "20px" }}>DNB</aside>
            </nav>
            <main
                className="dnb1"
                style={{ display: "flex", justifyContent: "space-evenly", margin: "32px", flexDirection: "column" }}
            >
                <NextLevel />
            </main>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
