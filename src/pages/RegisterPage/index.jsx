import { StyledRegisterPage } from "./style"
import { RegisterForm } from "../../components/RegisterForm"

export const RegisterPage = () => {
    return(
        <StyledRegisterPage>
            <header>
                <h1>HubSim</h1>
                <button>Back</button>
            </header>
            <RegisterForm />
        </StyledRegisterPage>
    )
}