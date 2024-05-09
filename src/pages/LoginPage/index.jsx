import { StyledLoginPage } from "./style"
import { LoginForm } from "../../components/LoginForm"

export const LoginPage = ({ user, setUser }) => {
    return(
        <StyledLoginPage>
            <h1>HubSim</h1>
            <LoginForm user={user} setUser={setUser} />
        </StyledLoginPage>
    )
}