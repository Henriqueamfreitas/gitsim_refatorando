import { StyledLoginForm } from "./style"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/home")
    }

    const register = () => {
        navigate("/register")
    }

    return(
        <StyledLoginForm>
            <h2>Login</h2>

            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="E-mail" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
            </div>

            <button onClick={login} type="submit">Login</button>
            <p>Don't have an account yet? Sign up here?</p>
            <button onClick={register} type="button">Register</button>
        </StyledLoginForm>
    )
}