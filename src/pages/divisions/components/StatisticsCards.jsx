import React from 'react'
import styled from 'styled-components';
import MetricCard from '../../../components/metric-card';
import { device } from '../../../device';
import { metricCardData } from '../constant';

export const StyledStatisticsCards = styled.div`
display: grid;
grid-area: unset;
grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
grid-template-rows: 130px;
grid-gap: 26px;

@media ${device.tablet} {
    grid-area: 1 / 1 / 2 / 6;
}
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
