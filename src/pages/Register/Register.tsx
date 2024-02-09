import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../../components/Button/Button";
import InputComponent from "../../components/Input/Input";
import { useState } from "react";
import Constants from "../../utils/constants";
import showToast from "../../utils/toast";
import AxiosRequest, { IRequestAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import GoBack from "../../components/GoBack/GoBack";
interface IRegister {
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    student_id: string;
    document_number: string;
}

interface IRegisterResponse {
    token: string;
}

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState<IRegister>({
        name: "",
        last_name: "",
        email: "",
        password: "",
        document_number: "",
        phone_number: "",
        student_id: ""
    });

    const onTypeHandler = (label: string, value: string) => {
        setForm({ 
            ...form,
            [label]: value
        } as unknown as IRegister);
    };

    const onSubmitRegisterHandler = async () => {
        setIsLoading(true);
        const keys = Object.keys(form);
        let error = false;
        let errorMsg = "";
        for(const key of keys) {
            if(!form[key as keyof IRegister]) {
                error = true;
                errorMsg = `${key.replace(/[_\W]+/g, " ")} must be set`;
                break;
            }
        }
        if(error) {
            setIsLoading(false);
            return showToast({ message: errorMsg, type: "error" });
        }
        try {
            const url = `${Constants.BACKEND_URL}users/`;
            const request: IRequestAxios = {
                method: "POST",
                url,
                data: form
            }; 
            await AxiosRequest<IRegisterResponse>(request);
            setIsLoading(false);
            showToast({ type: "success", message: "Register with success" });
            navigate("/index");
        } catch (error) {
            setIsLoading(false)
            showToast({ type: "error", message: "Error in Register" });
        }
    };

    return isLoading ? <Spinner/> :
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Container>
                <Row>
                    <Col>
                        <GoBack/>
                    </Col>
                </Row>
                <Row>
                    <h1>Register form</h1>
                </Row>
                <Row>
                    <Col md="3">
                        <InputComponent label="Name" id="name" type="text" required={true} setContext={onTypeHandler} />
                    </Col>
                    <Col md="3">
                        <InputComponent label="last Name" id="last_name" type="text" required={true} setContext={onTypeHandler} />
                    </Col>
                    <Col md="3">
                        <InputComponent label="Phone Number" id="phone_number" type="number" required={true} setContext={onTypeHandler} />
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <InputComponent label="Email" id="email" type="email" required={true} setContext={onTypeHandler} />
                    </Col>
                    <Col md="4">
                        <InputComponent label="Password" id="password" type="password" required={true} setContext={onTypeHandler} />
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <InputComponent label="Student Id" id="student_id" type="number" required={true} setContext={onTypeHandler} />
                    </Col>
                    <Col md="4">
                        <InputComponent label="Document Number" id="document_number" type="number" required={true} setContext={onTypeHandler} />
                    </Col>
                </Row>
                <Row style={{ "marginTop": "10px" }}>
                    <Col md="4">
                        <ButtonComponent children="" label="Register" type="submit" variant="primary" setClick={onSubmitRegisterHandler}/>
                    </Col>
                </Row>
            </Container>
                
        </div>
};

export default Register;