import { CSSProperties, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const GoBack = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const navigate = useNavigate();
    const iconStyle: CSSProperties = {
        cursor: "pointer",
        color: isHovered ? "darkblue" : "black",
        transition: "border-color 0.3s",
    };

    const onClickHandler = () => {
        navigate(-1);
    };
    return (
        <FaArrowLeft
            style={iconStyle}
            onClick={onClickHandler}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
};

export default GoBack;