import styled from 'styled-components';

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: block;
    margin: 5px;
`;

export const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;

    &:hover {
        background-color: blue;
        color: white;
    }
`;