import { StyledRegisterPage } from "./style"
import { RegisterForm } from "../../components/RegisterForm"
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
    const navigate = useNavigate();

    const returnToLogin = () => {
        navigate("/")
    }
    
    return(
        <StyledRegisterPage>
            <header>
                <h1>HubSim</h1>
                <button onClick={returnToLogin}>Back</button>
            </header>
            <RegisterForm />
        </StyledRegisterPage>
    )
}