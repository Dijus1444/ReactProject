import React from "react";

export const Comp2 = ({ text, color }) => {
    return (
        <div>
            <p>
                This is my Card, here will be text from PROPS {text}
            </p>
            <h2 style={{ color }}>{text}</h2>
        </div>
    );
};
