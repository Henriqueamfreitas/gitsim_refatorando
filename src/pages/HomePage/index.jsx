import { StyledHomePage } from "./style"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export const HomePage = ({ user, setUser }) => {
    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        navigate("/")
    }

    return (
        <StyledHomePage>
            <header>
                <h1>HubSim</h1>
                <button onClick={logout}>Back</button>
            </header>

            <div>
                <h2>Hello, {user.name}</h2>
                <p>{user.course_module}</p>
            </div>

            <div>
                <h2>What a shame! We're under development {":("}</h2>
                <p>Our application is under development. Stay tuned for updates!</p>
            </div>
        </StyledHomePage>
    )
}