import React from "react";
import { Navigate } from "react-router-dom";
import { getStorage } from "../utils/localStorage";

type GuardProps = {
    Children: React.FC
}

const Guard: React.FC<GuardProps> = ({ Children }) => {
    const token = getStorage('Token');
    return token ? <Children /> : <Navigate to={"/"} />;
};

export default Guard