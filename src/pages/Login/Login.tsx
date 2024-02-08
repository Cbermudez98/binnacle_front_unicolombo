import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../../components/Button/Button";
import InputComponent from "../../components/Input/Input";
import { useState } from "react";
import Constants from "../../utils/constants";
import showToast from "../../utils/toast";
import AxiosRequest, { IRequestAxios } from "../../utils/axios";
import { setStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
interface ILogin {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
}

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<ILogin>({
        email: "",
        password: ""
    });

    const onTypeHandler = (label: string, value: string) => {
        setForm({ 
            ...form,
            [label]: value
        } as unknown as ILogin);
    };

    const onSubmitLoginHandler = async () => {
        const keys = Object.keys(form);
        let error = false;
        let errorMsg = "";
        for(const key of keys) {
            if(!form[key as keyof ILogin]) {
                error = true;
                errorMsg = `${key} must be set`;
                break;
            }
        }
        if(error) return showToast({ message: errorMsg, type: "error" });
        try {
            const url = `${Constants.BACKEND_URL}users/login`;
            const request: IRequestAxios = {
                method: "POST",
                url,
                data: form
            }; 
            const { data } = await AxiosRequest<ILoginResponse>(request);
            setStorage("Token", JSON.stringify(data));
            showToast({ type: "success", message: "Login with success" });
            navigate("/index");
        } catch (error) {
            showToast({ type: "error", message: "Error in login" });
        }
    };

    return <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Container>
            <Row>
                <Col md="4">
                    <InputComponent label="Email" id="email" type="email" required={true} setContext={onTypeHandler} />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <InputComponent label="Password" id="password" type="password" required={true} setContext={onTypeHandler} />
                </Col>
            </Row>
            <Row style={{ "marginTop": "10px" }}>
                <Col md="4">
                    <ButtonComponent children="" label="Login" type="submit" variant="primary" setClick={onSubmitLoginHandler}/>
                </Col>
            </Row>
        </Container>
            
    </div>
};

export default Login;