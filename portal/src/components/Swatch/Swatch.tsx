import React from "react";

type RGBValue = {
    r: number;
    b: number;
    g: number;
    a?: number;
};
type CMYKValue = {
    c: number;
    m: number;
    y: number;
    k: number;
};

interface Props {
    name: string;
    large?: boolean;
    screenValue: RGBValue;
    printValue?: CMYKValue;
}

export function Swatch({ name, large, screenValue, printValue }: Props) {
    const { r, g, b, a } = screenValue;
    const hex = (number: number) => number.toString(16).toUpperCase();

    return (
        <div className="jkl-portal-swatch">
            <p className="jkl-h5 jkl-portal-swatch__name">{name}</p>
            <div
                className={`jkl-portal-swatch__swatch${large ? " jkl-portal-swatch__swatch--large" : ""}`}
                style={{ backgroundColor: `rgba(${r}, ${g}, ${b} ${a ? a : "1"})` }}
            />
            <p className="jkl-micro jkl-portal-swatch__values">
                {`RGB: ${r} ${g} ${b}`}
                <br />
                {`Hex: ${"".concat(hex(r), hex(g), hex(b))}`}
                <br />
                {printValue && `CMYK: ${printValue.c} ${printValue.m} ${printValue.y} ${printValue.k}`}
            </p>
        </div>
    );
}
