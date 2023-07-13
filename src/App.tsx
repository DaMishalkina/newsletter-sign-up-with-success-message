import React, {ReactNode, useEffect, useState, FormEvent} from 'react';
import './App.css';
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
    // const documentHeight = () => {
    //     const doc = document.documentElement
    //     doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
    // }

    const onInputChange = (value: string | number, id?: string) => {
        setInputValue(value)
        setError("");
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!isEmail(inputValue as string)){
            setError(signupFormData?.inputErrorMessage as string)
        }
        console.log(inputValue);
    }
    // useEffect(() => {
    //     window.addEventListener("resize", documentHeight)
    //     documentHeight()
    // }, [])
    return (
        <main>
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
        </main>
    );
}

export default App;
