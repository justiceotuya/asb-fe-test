import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../components'
import { device } from '../../device'
import { DivisionsSummary, DivisionsTable, ModuleHistory, StatisticsCards } from './components'

export const StyledDivisionsContainer = styled.section`
display: grid;
grid-column-gap: 26px;
grid-row-gap: 26px;
padding: 0 18px;
margin-bottom:25px;
grid-template-columns: unset;
    grid-template-rows: unset;
@media ${device.tablet}{
    grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr 230px auto;
}
`

export const Divisions = () => {
    return (
        <Layout>
            <StyledDivisionsContainer>
                <StatisticsCards />
                <DivisionsSummary />
                <ModuleHistory />
                <DivisionsTable />
            </StyledDivisionsContainer>
        </Layout>
    )
}
