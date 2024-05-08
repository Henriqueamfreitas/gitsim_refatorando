import { StyledLoginForm } from "./style"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema"
import { Input } from "../Input"

export const LoginForm = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    })

    const submit = (formData) => {
        console.log(formData)
        navigate("/home")
    }

    const registerBtn = () => {
        navigate("/register")
    }

    return(
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>

            <Input
                label="E-mail"
                error={errors.email ? <p>{errors.email.message}</p> : null}
                htmlFor="email"
                type="email"
                name="email"
                placeholder="Enter your email here"
                {...register("email")}
            />

            <Input
                label="Password"
                error={errors.password ? <p>{errors.password.message}</p> : null}
                htmlFor="password"
                type="password"
                name="password"
                placeholder="Enter your password here"
                {...register("password")}
            />

            <button type="submit">Login</button>
            <p>Don't have an account yet?</p>
            <button onClick={registerBtn} type="button">Register</button>
        </StyledLoginForm>
    )
}