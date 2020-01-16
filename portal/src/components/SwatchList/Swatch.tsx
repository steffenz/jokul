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

export interface Props {
    name: string;
    screenValue: RGBValue;
    printValue?: CMYKValue;
    large?: boolean;
    bordered?: boolean;
    className?: string;
}

export function Swatch({ name, large, bordered, screenValue, printValue, className }: Props) {
    const { r, g, b, a } = screenValue;
    const backgroundColor = `rgba(${r}, ${g}, ${b}, ${a ? a : "1"})`;
    const hex = (number: number) =>
        number
            .toString(16)
            .toUpperCase()
            .padStart(2, "0");
    const componentClassName = "jkl-portal-swatch".concat(
        large ? " jkl-portal-swatch--large" : "",
        bordered ? " jkl-portal-swatch--bordered" : "",
        className ? ` ${className}` : "",
    );

    return (
        <div className={componentClassName}>
            <p className="jkl-portal-swatch__name">{name}</p>
            <div className="jkl-portal-swatch__swatch" style={{ backgroundColor }} />
            <p className="jkl-portal-swatch__values">
                {`RGB: ${r} ${g} ${b}`}
                <br />
                {`HEX: ${"".concat(hex(r), hex(g), hex(b))}`}
                <br />
                {printValue && `CMYK: ${printValue.c} ${printValue.m} ${printValue.y} ${printValue.k}`}
            </p>
        </div>
    );
}
