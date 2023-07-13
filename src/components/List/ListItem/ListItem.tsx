import React from "react";
import "./ListItem.css";

type ListItem = string;

interface Props {
    item: ListItem
}

export const ListItem = ({ item }: Props) => {
    return (
        <li className="list-item list-container__item">
            <div className="list-item__container">
                <svg className="list-item__bullet-point-svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                    <g fill="none">
                        <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                        <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/>
                    </g>
                </svg>
                {item}
            </div>
        </li>
    )
}