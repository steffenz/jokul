import React from "react";
import { Swatch, Props as SwatchProps } from "./Swatch";

interface Props {
    colors: Array<SwatchProps>;
    large?: boolean;
    className?: string;
}

export function SwatchList({ large, colors, className }: Props) {
    const componentClassName = "jkl-portal-swatch-list".concat(
        large ? " jkl-portal-swatch-list--large" : "",
        className ? ` ${className}` : "",
    );
    return (
        <div className={componentClassName}>
            {colors.map((props, i) => (
                <Swatch key={i} className="jkl-portal-swatch-list__swatch" large={large} {...props} />
            ))}
        </div>
    );
}
