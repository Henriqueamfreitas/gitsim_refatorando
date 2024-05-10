import styled from "styled-components"

export const StyledHomePage = styled.main`
    background-color: var(--color-grey4);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    header{
        padding: 1.0625rem 4.5vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        button{
            width: 4.9713rem;
        }
    }
    div:nth-child(2){
        border-top: solid 0.0625rem var(--color-grey3);
        padding: 1.5625rem 4.5vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.25rem; 
        span{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    div:nth-child(3){
        border-top: solid 0.0625rem var(--color-grey3);
        padding: 1.5625rem 4.5vw;
        display: flex;
        flex-direction: column;
        gap: 1.25rem; 
    }
`