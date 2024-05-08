import { StyledHomePage } from "./style"

export const HomePage = () => {
    return (
        <StyledHomePage>
            <header>
                <h1>HubSim</h1>
                <button>Back</button>
            </header>

            <div>
                <h2>Hello, student</h2>
                <p>Course Name</p>
            </div>

            <div>
                <h2>What a shame! We're under development {":("}</h2>
                <p>Our application is under development. Stay tuned for updates!</p>
            </div>
        </StyledHomePage>
    )
}