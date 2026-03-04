import React from "react";

export const Card = ({ text, text2, handlePrintText, color }) => {
    return (
        <div>
            <p>
                This is my Card, here will be text from PROPS {text}
            </p>
            <h2 style={{ color }}>{text2}</h2>
            <button onClick={handlePrintText}>Call function</button>
        </div>
    );
};
