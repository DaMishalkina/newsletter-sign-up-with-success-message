export interface SignupFormDataType extends SuccessMessage {
    list: string[],
    inputLabel: string,
    inputPlaceholder: string,
    inputErrorMessage: string,
}

export type SuccessMessage = {
    header: string,
    message: string,
    buttonLabel: string
}