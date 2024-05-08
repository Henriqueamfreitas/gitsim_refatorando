import { StyledRegisterForm } from "./style"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {
    const navigate = useNavigate();

    const returnToLogin = () => {
        navigate("/")
    }

    const register = () => {
        navigate("/")
    }

    return(
        <StyledRegisterForm>
            <h2>Create your account</h2>
            <span>fast and free, let's go</span>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name here" />
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder="Enter your E-mail here" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password here" />
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm your password here" />
            </div>

            <div>
                <label htmlFor="bio">Bio</label>
                <input type="text" name="bio" placeholder="Tell us about yourself" />
            </div>            

            <div>
                <label htmlFor="contact">Contact</label>
                <input type="text" name="contact" placeholder="Enter your contact here" />
            </div>            

            <div>
                <label htmlFor="course">Course</label>
                <select name="course">
                    <option value="">Select your course</option>
                    <option value="Introduction to Python Programming">Introduction to Python Programming</option>
                    <option value="Java Programming Fundamentals">Java Programming Fundamentals</option>
                    <option value="JavaScript for Beginners: From Zero to Hero">JavaScript for Beginners: From Zero to Hero</option>
                    <option value="iOS App Development with Swift">iOS App Development with Swift</option>
                    <option value="Android App Development: Kotlin Basics">Android App Development: Kotlin Basics</option>
                </select>
            </div>           

            <button onClick={register} type="submit">Register</button> 
        </StyledRegisterForm>
    )
}