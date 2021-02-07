import React from 'react'
import {
    StyledArrowDownRight,
    StyledArrowLeft,
    StyledArrowUp,
    StyledDivisionsTable,
    StyledMenu,
    StyledMore,
    StyledTableRow
} from './style/DivisionsTable.style';

export const DivisionsTable = ({
    tableData,
    handleCheckRow,
    isAllChecked,
    handleToggleAllDataRow }) => {
    const { loading, error, result } = tableData;

    const handleArrowSelection = (risk) => {
        switch (risk) {
            case 'Low Risk':
                return <StyledArrowDownRight />;
            case 'Mid Risk':
                return <StyledArrowLeft />;
            case 'High Risk':
                return <StyledArrowUp />
            default:
                return "StyledArrowDownRight"
        }
    }

const handleCheckIssues = (expirationDate) => {

    // get todays date and extract year and month
        let today = new Date().toISOString().split('T')[0]
        let thisYear = today.slice(2,4)
        let thisMonth = today.split('-')[1]

        expirationDate = expirationDate.split('/')
        let expiryMonth = expirationDate[0]
        let expiryYear = expirationDate[1]


        if(thisYear > expiryYear){
            return '1 Issue Found'
        }else if(thisYear === expiryYear && thisMonth >= expiryMonth){
            return '1 Issue Found'
        }else return 'No Issue Found'
    }



    return (
        <StyledDivisionsTable>
            {loading && <div className="full_centered_page"><p>Loading data ...</p></div>}
            {!loading && result.length === 0 && <div className="full_centered_page"><p>ohhh no data to see here</p></div>}
            {
                result.length > 0 && <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    checked={isAllChecked}
                                    onChange={handleToggleAllDataRow}
                                />
                            </th>
                            <th>name</th>
                            <th>location</th>
                            <th>status</th>
                            <th>entries</th>
                            <th>risk profile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map(data => {
                                const {  firstname, lastname,  city, street, streetName,  phone, status, checked, card_expiration } = data

                                return (
                                    <StyledTableRow
                                        key={phone}
                                        status={handleCheckIssues(card_expiration)}
                                        riskProfile='Mid Risk'
                                        tabIndex="0"
                                    >
                                        <td className="table_checkbox__container">
                                            <input type="checkbox" name="" id="" checked={checked} onChange={() => handleCheckRow(phone)} />
                                            <StyledMore tabIndex="0" />
                                        </td>
                                        <td className="table_data__name">{`${firstname} ${lastname}`}</td>
                                        <td className="table_data__address">
                                            <p className="data__state">{city}</p>
                                            <p className="data__street">{`${street}, ${streetName}`}</p></td>
                                        <td className="table_data__status"><p>{handleCheckIssues(card_expiration)}</p></td>
                                        <td className="table_data__entries">
                                            <p className="entries_stat">test state</p>
                                            <p className="entries_group">Heterogenous</p></td>
                                        <td className="table_data__risk_profile">
                                            <div>{handleArrowSelection("Mid Risk")}</div>
                                            <p className="risk_value">Mid risk</p>
                                        </td>
                                        <td><StyledMenu tabIndex="0" /></td>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </StyledDivisionsTable>
    )
}
