import React, {useState, FormEvent} from "react";
import reactStringReplace from "react-string-replace";
import "./App.css";
import {TextInput} from "./components/TextInput/TextInput";
import {Modal} from "./components/Modal/Modal";
import {CustomList} from "./components/List/CustomList";
import {Button} from "./components/Button/Button";
import {ModalContent} from "./components/ModalContent/ModalContent";
import {IconSuccess} from "./components/svg/IconSuccess";
import mobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import content from "./data/content.json";
import {SuccessMessage, SignupFormDataType} from "./data/types/contentType";


const signupFormData: SignupFormDataType = content.signupFormData;
const successMessage: SuccessMessage = content.successMessageData;

const isEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}



function App() {
    const [inputValue, setInputValue] = useState<string | number>("");
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const onInputChange = (value: string | number) => {
        setInputValue(value)
        setError("");
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!isEmail(inputValue as string)){
            setError(signupFormData?.inputErrorMessage)
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
            <Modal>
                {!isSuccess ?
                    <div className="modal--signup">
                        <picture className="modal-picture modal__picture">
                            <source
                                srcSet={desktopImage}
                                media="(min-width: 1200px)"
                            />
                            <img
                                className="modal-picture__image"
                                src={mobileImage}
                                alt="Monitor with opened Email Window"
                            />
                        </picture>
                        <ModalContent
                            header={signupFormData?.header}
                            message={signupFormData?.message}
                            textChildren={<CustomList list={signupFormData?.list} />}
                            actionChildren={
                                <form className="action-item__form" onSubmit={handleSubmit}>
                                    <TextInput
                                        label={signupFormData?.inputLabel}
                                        placeholder={signupFormData?.inputPlaceholder}
                                        defaultValue={inputValue}
                                        onChange={onInputChange}
                                        error={error} />
                                    <Button type="submit">
                                        {signupFormData?.buttonLabel}
                                    </Button>
                                </form>
                            }
                        />
                    </div>
                    :
                    <div className="modal--success">
                        <ModalContent
                            className="modal-content-section--success"
                            svg={
                                <IconSuccess className="modal__svg" />
                            }
                            header={successMessage?.header}
                            message={
                                // eslint-disable-next-line no-template-curly-in-string
                                reactStringReplace(successMessage?.message, "${email}",
                                    (match, i) => (
                                        <span key={i} className="modal__message--bold">{inputValue}</span>
                                    )
                                )
                            }
                            actionChildren={
                                <Button
                                    onClick={toggleSuccessMessage}
                                >
                                    {successMessage?.buttonLabel}
                                </Button>
                            }
                        />
                    </div>
                }
            </Modal>
        </main>
    );
}

export default App;
