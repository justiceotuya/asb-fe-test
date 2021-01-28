import React from 'react'
import { StyledInfoIcon, StyledMetricCard } from './MetricCard.style';

export const MetricCard = ({data}) => {
    const {stat, title, info}= data;
    return (
        <StyledMetricCard info={info}>
            <div className="metric__metric_number">
            <p>{stat}</p>
            <StyledInfoIcon data-testid={`info-${title}`}/>
            <div className="metric__info">{info}</div>
            </div>
            <div className="metric__metric_title">
                {title}
            </div>
        </StyledMetricCard>
    )
}
