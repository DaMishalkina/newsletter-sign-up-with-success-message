import React from "react";
import { ListItem } from "./ListItem/ListItem";
import {ListType} from "./types/type";
import "./CustomList.css";

interface Props {
    list: ListType
}

export const CustomList = ({list}: Props) => {
    return (
        <ul className="list-container">
            {list.map((item, index) => (
                <ListItem item={item} key={index} />
            ))}
        </ul>
    )
}