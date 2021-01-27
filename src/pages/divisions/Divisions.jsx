import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../components'
import { DivisionsSummary, DivisionsTable, ModuleHistory, StatisticsCards } from './components'

export const StyledDivisionsContainer = styled.section`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 20px;
grid-row-gap: 20px;
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
