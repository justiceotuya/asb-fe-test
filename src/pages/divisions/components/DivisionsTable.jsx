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
                                const { id, name, street, location, status, entries_stat, entries_group, risk_profile, checked } = data
                                return (
                                    <StyledTableRow
                                        key={id}
                                        status={status}
                                        riskProfile={risk_profile}
                                        tabIndex="0"
                                    >
                                        <td className="table_checkbox__container">
                                            <input type="checkbox" name="" id="" checked={checked} onChange={() => handleCheckRow(id)} />
                                            <StyledMore tabIndex="0" />
                                        </td>
                                        <td className="table_data__name">{name}</td>
                                        <td className="table_data__address">
                                            <p className="data__state">{location}</p>
                                            <p className="data__street">{street}</p></td>
                                        <td className="table_data__status"><p>{status}</p></td>
                                        <td className="table_data__entries">
                                            <p className="entries_stat">{entries_stat}</p>
                                            <p className="entries_group">{entries_group}</p></td>
                                        <td className="table_data__risk_profile">
                                            <div>{handleArrowSelection(risk_profile)}</div>
                                            <p className="risk_value">{risk_profile}</p>
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
