import React from "react";
import "./Button.css";

interface Props {
    children: string,
    onClick?: () => void,
    type?: "submit" | "reset" | "button",
    disabled?: boolean
}

export const Button = ({
                           children,
                           onClick,
                           type = "button",
                           disabled = false}: Props) => {
    return (
        <button className="button" disabled={disabled} type={type} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}