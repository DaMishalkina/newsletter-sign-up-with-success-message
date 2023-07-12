import React, {ReactNode, useState} from 'react';
import './App.css';
import {TextInput} from "./components/TextInput/TextInput";
import {Modal} from "./components/Modal/Modal";
import mobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import content from "./data/content.json";

type JSONData = Record<string, unknown>
const signupFormData: JSONData = content.signupFormData;
const successMessage: JSONData = content.successMessageData;


function App() {
    const [inputValue, setInputValue] = useState<string | number>("");
    const [error, setError] = useState("");


    const onInputChange = (value: string | number, id?: string) => {
        setInputValue(value)
        setError("");
    }

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
                    <div className="modal__content-section">
                        <h1 className="modal__header">{signupFormData?.header as ReactNode}</h1>
                        <TextInput defaultValue={inputValue} onChange={setInputValue} error={error} />
                    </div>
                </>
            </Modal>
        </main>
    );
}

export default App;
