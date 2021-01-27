import React from 'react'
import styled from 'styled-components';
import MetricCard from '../../../components/metric-card';
import { metricCardData } from '../constant';

export const StyledStatisticsCards = styled.div`
display: grid;
grid-area: 1 / 1 / 2 / 6;
grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
grid-template-rows: 130px;
grid-gap: 26px;
`;

export const StatisticsCards = () => {
    return (
        <StyledStatisticsCards>
            {
                metricCardData.map(metric => {
                    return <MetricCard data={metric} />
                })
            }
        </StyledStatisticsCards>
    )
}
