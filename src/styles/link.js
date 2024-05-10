import styled from "styled-components";
import { StyledButtonOrLink } from "./button.js";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    ${StyledButtonOrLink}
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
`