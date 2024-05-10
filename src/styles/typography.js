import styled, { createGlobalStyle, css } from "styled-components"

export const HeadlineStyles = css`
    font-family: "Inter", sans-serif;
    font-size: ${({fontSize}) => {
        switch(fontSize){
            case "10":
                return "0.625rem"            
            case "12":
                return "0.75rem"
            case "14":
                return "0.875rem"
            case "16":
                return "1rem"
            case "18":
                return "1.125rem"
        }
    }};

    font-weight: ${({fontWeight}) => {
        switch(fontWeight){
            case "400":
                return "400"
            case "500":
                return "500"
            case "600":
                return "600"
            case "700":
                return "700"
            case "800":
                return "800"
            case "900":
                return "900"
        }
    }};

    color: ${({color}) => {
        switch(color){
            case "grey5":
                return "var(--color-grey5)"
            case "grey4":
                return "var(--color-grey4)"
            case "grey3":
                return "var(--color-grey3)"
            case "grey2":
                return "var(--color-grey2)"
            case "grey1":
                return "var(--color-grey1)"
            case "grey0":
                return "var(--color-grey0)"
            case "grey":
                return "var(--color-grey)"            
            case "primary":
                return "var(--color-primary)"
            case "primaryFocus":
                return "var(--color-primary)-focus"
            case "primaryNegative":
                return "var(--color-primary)-negative"
            case "success":
                return "var(--color-success)"
            case "negative":
                return "var(--color-negative)"
        }
    }};
`

export const StyledH1 = styled.h1`
    ${HeadlineStyles}
`

export const StyledH2 = styled.h2`
    ${HeadlineStyles}
`

export const StyledP = styled.p`
    ${HeadlineStyles}
`

export const StyledLabel = styled.label`
    ${HeadlineStyles}
`

export const StyledSpan = styled.span`
    ${HeadlineStyles}
`