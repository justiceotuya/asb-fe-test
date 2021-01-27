import React from 'react'
import styled from 'styled-components';


export const StyledModuleHistory = styled.div`
 grid-area: 4 / 1 / 6 / 2;
padding:12px;
`;

export const ModuleHistory = () => {
    return (
        <StyledModuleHistory>
           <p> I am the module history</p>
        </StyledModuleHistory>
    )
}
