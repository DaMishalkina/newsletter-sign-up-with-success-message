import React from "react";
import { ListItem } from "./ListItem";

type ListItem = string;
type List = ListItem[];
interface Props {
    list: List
}

export const CustomList = ({list}: Props) => {
    return (
        <ul>
            {list.map((item, index) => (
                <ListItem item={item} key={index} />
            ))}
        </ul>
    )
}