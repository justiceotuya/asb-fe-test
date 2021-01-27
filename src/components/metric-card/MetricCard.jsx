import React from 'react'
import styled from 'styled-components'
import {ReactComponent as InfoIcon} from '../../assets/icons/info.svg'


export const StyledMetricCard = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
border-radius: 6px;
padding: 17px;
/* max-width: 258px; */
/* height: 129px; */
display: flex;
flex-direction:column;

.metric__metric_number{
flex:2;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: calc(32px - 17px);
position: relative;
p{
    font-weight: bold;
font-size: 32px;
line-height: 44px;
display: flex;
align-items: center;
letter-spacing: -0.44px;
color: #19191D;
}

.metric__info {
    width: 150px;
    padding: 4px;
    border-radius: 4px;
    background-color:#6f6c6c;
    color: #FFFFFF;
    position: absolute;
    font-size: 14px;
    right: 0px;
    bottom: 40px;
    box-shadow: 0px 0px 6px #B2B2B2;
    visibility:hidden;
    opacity: 0;
    transition: visibility .2s ease-out;

:before {
    content: '';
    display: table;
    height: 10px;
    right: 10px;
    bottom: -4px;
    position: absolute;
    width: 10px;
    transform: rotate(310deg);
    box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 40%);
    background-color: #6f6c6c;
    /* background-color: #F2F2F2; */
    position: absolute;
    display: block;
}

:hover {
    visibility:visible;
    opacity: 1;
    transition: visibility .2s ease-out;
}

}
}

.metric__metric_title{
    flex:1;
    font-weight: bold;
font-size: 16px;
line-height: 36px;
color: #9696A0;
}
`;

export const StyledInfoIcon = styled(InfoIcon)`
height: 23px;
width:23px;
cursor:pointer;
:hover + .metric__info{
    visibility:visible;
    opacity: 1;
    transition: visibility .2s ease-out;
}
`

export const MetricCard = ({data}) => {
    const {stat, title, info}= data;
    return (
        <StyledMetricCard info={info}>
            <div className="metric__metric_number">
            <p>{stat}</p>
            <StyledInfoIcon/>
            <div className="metric__info">{info}</div>
            </div>
            <div className="metric__metric_title">
                {title}
            </div>
        </StyledMetricCard>
    )
}
