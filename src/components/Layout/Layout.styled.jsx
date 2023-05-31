import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
    margin: 0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
    color: #212121;
    text-decoration: none;

    &.active {
        color: purple;
    }
`;

export const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 20px;
    margin-left: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 24px;
`;

export const StyledLi = styled.li`
    margin: 0;
`;
