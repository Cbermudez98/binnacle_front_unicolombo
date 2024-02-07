import React from "react";
import Form from "react-bootstrap/Form";

type typeText = "text" | "number" | "email" | "password";

interface IInput {
    id: string,
    label: string;
    type: typeText,
    setContext: (label: string, value: string) => void;
    required?: boolean
}

const InputComponent = ({ id, label, type, setContext, required = false}: IInput) => {

    const onInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        console.log(value);
        setContext(id, value);
    };

    return <>
        <Form.Label htmlFor={id}>{label}</Form.Label>
        <Form.Control type={type} id={id} required={required} onKeyUp={onInputHandler}/>
    </>
};

export default InputComponent;