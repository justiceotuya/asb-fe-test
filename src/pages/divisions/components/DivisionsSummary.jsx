import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Castle} from '../../../assets/icons/castle.svg'
import {ReactComponent as Telephone} from '../../../assets/icons/telephone.svg'
import {ReactComponent as Envelope} from '../../../assets/icons/envelope.svg'
import {ReactComponent as Location} from '../../../assets/icons/location.svg'
import {ReactComponent as Journal} from '../../../assets/icons/notes-book.svg'
import {ReactComponent as Finger} from '../../../assets/icons/fingerprint.svg'
import {divisionSummaryData} from '../constant'
import { device } from '../../../device';


export const StyledDivisionsSummary = styled.div`

    background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
border-radius: 6px;
padding:12px;

@media ${device.tablet}{
    grid-area: 2 / 1 / 4 / 3;
    }
@media ${device.laptop}{
    grid-area: 2 / 1 / 4 / 2;
    }

.divisions_summary__header{
    display: flex;
    align-items:center;
    margin-bottom: 26px;

    h3 {
        font-weight: bold;
        margin-left: 16px;
        font-size: 14px;
        line-height: 150%;
        color: #000000;
    }
}

.divisions_summary__body{
    display: flex;
    align-items:center;
    margin-bottom: 10px;

    p{
        margin-left: 16px;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #0F1A4F;
    }

    .hasLink {
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        text-decoration-line: underline;
        color: #5771EE;
    }
}

`;

export const StyledCastleIcon = styled(Castle) ``
export const StyledTelephoneIcon = styled(Telephone) ``
export const StyledEnvelopeIcon = styled(Envelope) ``
export const StyledLocationIcon = styled(Location) ``
export const StyledJournalIcon = styled(Journal) ``
export const StyledFingerIcon = styled(Finger) ``

export const DivisionsSummary = () => {

    const handleIconSelection = (text) => {
        switch (text) {
            case 'phone':
                return <StyledTelephoneIcon />;
            case 'mail':
                return <StyledEnvelopeIcon />;
            case 'location':
                return <StyledLocationIcon />
            case 'journal':
                return <StyledJournalIcon />
            case 'finger-print':
                return <StyledFingerIcon />
            default:
                return <StyledTelephoneIcon />
        }
    }

    return (
        <StyledDivisionsSummary>
            <div className="divisions_summary__header">
                <StyledCastleIcon/>
                <h3> Divisions Summary</h3>
            </div>

                {
                    divisionSummaryData.map(item => {
                        const {icon, text, isLink} = item;
                        return (
                            <div className="divisions_summary__body"
                            key={text}
                            >
                           { handleIconSelection(icon)}
                            <p className={isLink && 'hasLink'}>{text}</p>
                            </div>

                        )
                    })
                }
        </StyledDivisionsSummary>
    )
}
