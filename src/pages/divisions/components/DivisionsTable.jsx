import React from 'react'
import styled from 'styled-components';

export const StyledDivisionsTable = styled.div`
    grid-area: 2 / 2 / 6 / 6;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
    border-radius: 6px;
    padding: 17px;
`;

export const DivisionsTable = () => {
    return (
        <StyledDivisionsTable>
            <p>  i am the division table</p>
        </StyledDivisionsTable>
    )
}
