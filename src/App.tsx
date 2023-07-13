import React, {ReactNode, useEffect, useState, FormEvent} from "react";
import reactStringReplace from "react-string-replace";
import "./App.css";
import {TextInput} from "./components/TextInput/TextInput";
import {Modal} from "./components/Modal/Modal";
import {CustomList} from "./components/List/CustomList";
import {Button} from "./components/Button/Button";
import mobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import content from "./data/content.json";

type JSONData = Record<string, unknown>
const signupFormData: JSONData = content.signupFormData;
const successMessage: JSONData = content.successMessageData;

const isEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}



function App() {
    const [inputValue, setInputValue] = useState<string | number>("");
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const onInputChange = (value: string | number, id?: string) => {
        setInputValue(value)
        setError("");
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!isEmail(inputValue as string)){
            setError(signupFormData?.inputErrorMessage as string)
        } else {
            setTimeout(() => {
                setIsSuccess(true);
            }, 500)
        }
    }
    const toggleSuccessMessage = () => {
        setTimeout(() => {
            setIsSuccess((prevState) => !prevState);
            setInputValue("");
        }, 500)
    }
    return (
        <main>
            {!isSuccess ?
                <Modal>
                    <>
                        <picture className="modal-picture modal__picture">
                            <source
                                srcSet={desktopImage}
                                media="(min-width: 1024px)"
                            />
                            <img
                                className="modal-picture__image"
                                src={mobileImage}
                                alt="Monitor with opened Email Window"
                            />
                        </picture>
                        <div className="content-section modal__content-section">
                            <div className="content-section__text-item">
                                <h1 className="modal__header">{signupFormData?.header as ReactNode}</h1>
                                <p className="modal__message">
                                    {signupFormData?.message as ReactNode}
                                </p>
                                <CustomList list={signupFormData?.list as string[]} />
                            </div>
                            <form className="content-section__action-item" onSubmit={handleSubmit}>
                                <TextInput
                                    label={signupFormData?.inputLabel as string}
                                    placeholder={signupFormData?.inputPlaceholder as string}
                                    defaultValue={inputValue}
                                    onChange={onInputChange}
                                    error={error} />
                                <Button type="submit">
                                    {signupFormData?.buttonLabel as string}
                                </Button>
                            </form>
                        </div>
                    </>
                </Modal>
                :
                <Modal>
                    <div className="modal-content-section--success modal__content-section">
                        <svg className="modal__svg"
                             xmlns="http://www.w3.org/2000/svg"
                             width="64" height="64"
                             viewBox="0 0 64 64">
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
                        <div className="content-section__text-item">
                            <h1 className="modal__header">{successMessage?.header as ReactNode}</h1>
                            <p className="modal__message">
                                {/* eslint-disable-next-line no-template-curly-in-string */}
                                {reactStringReplace(successMessage?.message as string, "${email}",
                                    (match, i) => (
                                    <span key={i} className="modal__message--bold">{inputValue}</span>
                                    )
                                )}
                            </p>
                        </div>
                        <div className="content-section__action-item">
                            <Button
                                onClick={toggleSuccessMessage}
                            >
                                {successMessage?.buttonLabel as string}
                            </Button>
                        </div>
                    </div>
                </Modal>
            }
        </main>
    );
}

export default App;
