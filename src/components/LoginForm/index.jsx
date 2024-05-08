import { StyledLoginForm } from "./style"

export const LoginForm = () => {
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

            <button type="submit">Entrar</button>
            <p>Ainda não possui uma conta?</p>
            <button type="button">Cadastre-se</button>
        </StyledLoginForm>
    )
}