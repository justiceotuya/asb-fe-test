import React from 'react'
import styled from 'styled-components';


export const StyledDivisionsSummary = styled.div`
    grid-area: 2 / 1 / 4 / 2;
    background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
border-radius: 6px;
padding:12px;
`;

export const DivisionsSummary = () => {
    return (
        <StyledDivisionsSummary>
            <p>I am the division summary</p>
        </StyledDivisionsSummary>
    )
}
