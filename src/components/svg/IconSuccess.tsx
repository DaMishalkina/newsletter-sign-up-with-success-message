import React from "react";
import {SvgProps} from "./types/type";


export const IconSuccess = ({width = "64", height = "64", className = ""}: SvgProps) => {
    return (
        <svg
            role="img"
            className={className}
             xmlns="http://www.w3.org/2000/svg"
             width={width}
             height={height}
             viewBox="0 0 64 64">
            <title>Success Orange Icon</title>
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3A"/>
                    <stop offset="100%" stopColor="#FF527B"/>
                </linearGradient>
            </defs>
            <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)"/>
                <path stroke="#FFF" strokeWidth="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/>
            </g>
        </svg>
    )
}