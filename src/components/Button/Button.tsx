import { Button } from "react-bootstrap";

type variant = "primary" | "secondary" | "success" | "danger" | "warning";

type typeButton = "submit" | "button";

interface IButtonInput {
    label: string,
    children: string,
    variant: variant;
    setClick: () => void;
    type: typeButton;
}

const ButtonComponent = ({ label, variant, type, setClick }: IButtonInput) => {

    const onClickHandler = () => {
        setClick();
    };

    return <Button variant={variant} onClick={() => onClickHandler()} type={type} >{label}</Button>
};


export default ButtonComponent;