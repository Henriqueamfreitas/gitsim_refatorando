import { StyledLoginPage } from "./style"
import { LoginForm } from "../../components/LoginForm"

export const LoginPage = () => {
    return(
        <StyledLoginPage>
            <h1>HubSim</h1>
            <LoginForm />
        </StyledLoginPage>
    )
}