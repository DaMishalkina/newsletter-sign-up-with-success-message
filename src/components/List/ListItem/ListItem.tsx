import React from "react";
import "./ListItem.css";
import {IconList} from "../../svg/IconList";

type ListItemType = string;

interface Props {
    item: ListItemType
}

export const ListItem = ({ item }: Props) => {
    return (
        <li className="list-item list-container__item">
            <div className="list-item__container">
                <IconList className="list-item__bullet-point-svg" />
                {item}
            </div>
        </li>
    )
}