import React, {ReactNode} from "react";
import classNames from "classnames";
import "./ModalContent.css";

interface Props {
    svg?: ReactNode,
    textChildren?: ReactNode
    actionChildren?: ReactNode,
    className?: string,
    header?: string,
    message?: string | ReactNode,
}

export const ModalContent = ({
                                 className = "",
                                 message = "",
                                 header = "",
                                 actionChildren,
                                 textChildren,
                                 svg}: Props) => {
    return (
        <div
            className={classNames(className, "content-section modal__content-section")}
        >
            {typeof svg !== "undefined" && svg}
            <div className="content-section__text-item">
                {header?.length > 0 && (
                    <h1 className="modal__header">{header}</h1>
                )}
                { (
                    typeof (message as ReactNode) !== "undefined"
                    || (message as string)?.length > 0) && (
                    <p className="modal__message">
                        {message}
                    </p>
                )}
                {typeof textChildren !== "undefined" && textChildren}
            </div>
            {typeof actionChildren !== "undefined" && (
                <div className="action-item content-section__action-item">
                    {actionChildren}
                </div>
            )}
        </div>
    )

}