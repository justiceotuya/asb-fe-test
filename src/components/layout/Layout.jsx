import React from 'react'
import styled from 'styled-components'
import { NavBar } from '..'
export const StyledLayout = styled.div`
margin:0 auto;
max-width: 1440px;
`
export const Layout = ({children}) => {
    return (
        <StyledLayout>
            <NavBar/>
            {children}
        </StyledLayout>
    )
}
