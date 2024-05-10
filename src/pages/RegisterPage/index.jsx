import { StyledRegisterPage } from "./style"
import { RegisterForm } from "../../components/RegisterForm"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { StyledH1 } from "../../styles/typography"

export const RegisterPage = () => {
    const navigate = useNavigate()
    
    return(
        <StyledRegisterPage>
            <header>
                <StyledH1 fontSize="18" fontWeight="900" color="primary"> HubSim</StyledH1>
                <Link to="/">
                    Back
                </Link>
            </header>
            <RegisterForm />
        </StyledRegisterPage>
    )
}