import React from "react";

type ListItem = string;

interface Props {
    item: ListItem
}

export const ListItem = ({ item }: Props) => {
    return (
        <li>item</li>
    )
}