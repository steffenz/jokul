import React from "react";
import { Link } from "../src";

import "@fremtind/jkl-core/core.min.css";

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <h2 className="jkl-title-large">Title-large: Hello World, look at this!</h2>
        <h2 className="jkl-title-medium jkl-spacing--top-3">Title-medium: These are typography</h2>
        <h3 className="jkl-heading-large jkl-spacing--top-2">Heading-large: components for</h3>
        <h4 className="jkl-heading-medium jkl-spacing--top-2">Heading-medium: jøkul design system</h4>
        <h5 className="jkl-heading-small jkl-spacing--top-2">Heading-small: This is the last heading component</h5>
        <p className="jkl-lead">
            Lead-paragraph: For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to
            think of going indoors when, all at once, the car burst into the pure and starlit region of the upper air.
        </p>
        <p className="jkl-body">
            Body-paragraph: The sky of a deep dark blue was hung with innumerable stars, which seemed to float in the
            limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain between us
            and the lower world. The stillness was so profound that we could hear the beating of our own hearts.
        </p>
        <p className="jkl-small">
            Small-paragraph (same size desktop/mobile): The telescope was very powerful for its size, and showed the
            dusky night side of the planet against the brilliant crescent of the day like the &quot;new moon in the arms
            of the old,&quot; or, as Miss Carmichael said, &quot;like an amethyst in a silver clasp.&quot;
        </p>
        <p className="jkl-micro">
            Micro-paragraph (same size desktop/mobile): The unwonted sadness of her tone reminded me of her devoted
            life, and I turned towards her with new interest and sympathy. She was looking at the Evening Star, whose
            bright beam softened the irregularities of her profile, and made her almost beautiful.
        </p>

        <div style={{ backgroundColor: "#000", color: "#fafafa" }}>
            <p className="jkl-body">
                Body-paragraph: The sky of a deep dark blue was hung with innumerable stars, which seemed to float in
                the limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain
                between us and the lower world. The{" "}
                <Link negative href="#">
                    stillness
                </Link>{" "}
                was so profound that we could hear the beating of our own hearts.
            </p>
        </div>
        <Link href="#">Go away</Link>
    </section>
);
export default Example;
