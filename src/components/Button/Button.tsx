import React, {useState, useEffect, useRef} from "react";
import classNames from "classnames";
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
    //Fixing focus for safari
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        typeof onClick !== "undefined" && onClick();
    }
    const ref = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current?.contains(event?.target)) {
                setIsClicked(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
    return (
        <button
            ref={ref}
            className={classNames("button",
                isClicked ? "button--active" : "button--inactive"
                )}
            disabled={disabled}
            type={type}
            onClick={handleClick}
        >
            <span>{children}</span>
        </button>
    )
}