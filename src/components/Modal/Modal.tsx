import React, {ReactNode} from "react";
import "./Modal.css";

interface Props {
    children: ReactNode,
    image?: string,
    imageLg?: string,
    header?: string,
    isOpened?: boolean,
    onClick?:(event: MouseEvent) => void
}

export const Modal = ({children}: Props) => {
    return (
        <section className="modal modal-wrapper">
            <div className="modal__container">
                {children}
            </div>
        </section>
    )
}