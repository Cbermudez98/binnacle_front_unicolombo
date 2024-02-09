import React from "react";
import Form from "react-bootstrap/Form";

type typeText = "text" | "number" | "email" | "password";

interface IInput {
    id: string,
    label: string;
    type: typeText,
    setContext: (label: string, value: string) => void;
    required?: boolean,
    min?: number,
    max?: number,
    autoComplete?: "on" | "off"
}

const InputComponent = ({ id, label, type, setContext, required = false, min = 0, max, autoComplete = "off"}: IInput) => {

    const onInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setContext(id, value);
    };

    return <>
        <Form.Label htmlFor={id}>{label}</Form.Label>
        <Form.Control type={type} id={id} required={required} onKeyUp={onInputHandler} min={min} max={max ?? Infinity} autoComplete={autoComplete}/>
    </>
};

export default InputComponent;