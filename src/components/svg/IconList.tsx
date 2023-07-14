import React from "react";
import {SvgProps} from "./types/type";


export const IconList = ({width = "21", height = "21", className = ""}: SvgProps) => {
    return (
        <svg
            role="img"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 21 21">
            <title>Orange Bullet Point</title>
            <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/>
            </g>
        </svg>
    )
}