import React from "react";
import { ListItem } from "./ListItem/ListItem";
import "./CustomList.css";

type ListItem = string;
type List = ListItem[];
interface Props {
    list: List
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