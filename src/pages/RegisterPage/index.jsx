import { StyledRegisterPage } from "./style"
import { RegisterForm } from "../../components/RegisterForm"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    const navigate = useNavigate()
    
    return(
        <StyledRegisterPage>
            <header>
                <h1>HubSim</h1>
                <Link to="/">
                    Back
                </Link>
            </header>
            <RegisterForm />
        </StyledRegisterPage>
    )
}