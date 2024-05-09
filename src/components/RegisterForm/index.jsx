import { registerFormSchema } from "./registerFormSchema";
import { StyledRegisterForm } from "./style"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input";
import { api } from "../../services/api";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const RegisterForm = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    })

    const submit = async (formData) => {
        delete formData.confirmPassword
        try{
            const response = await api.post("/users", formData)
            toast.success("Congratulations! You're now registered.")
            setTimeout(() => {
                navigate("/")
            }, 5000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return(
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <h2>Create your account</h2>
            <span>fast and free, let's go</span>

            <Input
                label="Name"
                error={errors.name ? <p>{errors.name.message}</p> : null}
                htmlFor="name"
                type="text"
                name="name"
                placeholder="Enter your name here"
                {...register("name")}
            />

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

            <Input
                label="Confirm password"
                error={errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}
                htmlFor="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password here"
                {...register("confirmPassword")}
            />

            <Input
                label="Bio"
                error={errors.bio ? <p>{errors.bio.message}</p> : null}
                htmlFor="bio"
                type="text"
                name="bio"
                placeholder="Tell us about yourself"
                {...register("bio")}
            />

            <Input
                label="Contact"
                error={errors.contact ? <p>{errors.contact.message}</p> : null}
                htmlFor="contact"
                type="text"
                name="contact"
                placeholder="Enter your contact here"
                {...register("contact")}
            />

            <Input
                label="Course"
                error={errors.course ? <p>{errors.course.message}</p> : null}
                select={true}
                htmlFor="course"
                name="course"
                {...register("course_module")}
            />

            <button type="submit">Register</button> 
            <ToastContainer />
        </StyledRegisterForm>
    )
}