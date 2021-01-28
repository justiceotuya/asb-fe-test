import React from 'react'
import { divisionSummaryData } from '../constant';
import {
    StyledCastleIcon,
    StyledDivisionsSummary,
    StyledEnvelopeIcon,
    StyledFingerIcon,
    StyledJournalIcon,
    StyledLocationIcon,
    StyledTelephoneIcon
} from './style/DivisionsSummary';

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
                <StyledCastleIcon />
                <h3> Divisions Summary</h3>
            </div>

            {
                divisionSummaryData.map(item => {
                    const { icon, text, isLink } = item;
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
