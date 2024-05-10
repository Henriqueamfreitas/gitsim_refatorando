import styled, { css } from "styled-components"

export const StyledButtonOrLink = css`
    height: 2.5rem;
    border-radius: .25rem;
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-grey);
    border: none;
    padding: 0rem 1.3938rem;
    background-color: ${({backgroundcolor}) => {
        switch(backgroundcolor){
            case "primary":
                return "var(--color-primary)"
            case "primaryFocus":
                return "var(--color-primary-focus)"
            case "primaryNegative":
                return "var(--color-primary-negative)"
            case "grey3":
                return "var(--color-grey3)"
            case "grey2":
                return "var(--color-grey2)"
            case "grey1":
                return "var(--color-grey1)"
        }
    }};
`

export const StyledButton = styled.button`
    ${StyledButtonOrLink}
` 