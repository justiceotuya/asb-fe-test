import React from 'react'
import styled from 'styled-components';
import { device } from '../../../device';

export const StyledDivisionsTable = styled.div`

    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
    border-radius: 6px;
    padding: 17px;
    display:none;

    @media ${device.tablet}{
        display: block;
        grid-area: 4/ 1 / 4 / 6;
    }
    @media ${device.laptop}{
        grid-area: 2 / 2 / 6 / 6;
    }


`;

export const DivisionsTable = () => {
    return (
        <StyledDivisionsTable>
            <p>  i am the division table</p>
        </StyledDivisionsTable>
    )
}
