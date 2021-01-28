import React from 'react'
import styled from 'styled-components'
import { NavBar } from '..'
export const StyledLayout = styled.div`
margin:0 auto;
max-width: 1440px;
`
export const Layout = (props) => {
    const {children,searchInput,handleSearch} = props;
    return (
        <StyledLayout>
            <NavBar
            searchInput={searchInput}
            handleSearch={handleSearch}
            />
            {children}
        </StyledLayout>
    )
}
