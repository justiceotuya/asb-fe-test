import React, { useState, useEffect } from 'react'
import { Layout } from '../../components'
import { DivisionsSummary, DivisionsTable, ModuleHistory, StatisticsCards } from './components'
import data from '../../assets/tableData.json'
import { StyledDivisionsContainer } from './components/style/Divisions.style'

export const Divisions = () => {

    const [searchInput, setSearchInput] = useState('')
    const [isAllChecked, setIsAllChecked] = useState(false) //used to handle checking and unchecking overall table
    const [tableData, setTableData] = useState({ loading: false, error: null, result: [] })
    const [filterDataStore, setFilterDataStore] = useState([])
    //handles the searching/filtering of the table
    const handleSearch = (e) => {
        let newData = filterDataStore.filter(item => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())|| item.street.toLowerCase().includes(e.target.value.toLowerCase()) || item.location.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setSearchInput(e.target.value)
        setTableData({ ...tableData, result: newData })
    }

    //handles loading table data
    useEffect(() => {
        setTableData({ ...tableData, loading: true })
        const handlePopulateData = () => {
            //add checked state to data
            let modifiedData = data.map(item => ({ ...item, checked: false }))
            setTableData({ ...tableData, result: modifiedData, loading: false })
            setFilterDataStore([...modifiedData])
        }
        //simulate async call
        setTimeout(() => {
            handlePopulateData()
        }, 1000);
    }, [])

    //handles checking and unchecking of all table row listens to changes in
    //tabledata to update the checking state of all data
    useEffect(() => {
        const handleCheckAllData = () => {
            let tableHasCheckedValue = tableData.result.some(item => item.checked === false)
            tableHasCheckedValue ? setIsAllChecked(false) : setIsAllChecked(true)
        }

        handleCheckAllData()
    }, [tableData])

    /**
     * This handles checking the a table row
     * @param {String} id The id of a table row
     */
    const handleCheckRow = (id) => {
        const newData = tableData.result.map(item => {
            if (item.id === id) {
                return { ...item, checked: !item.checked }
            } else {
                return item
            }
        })

        setTableData({ ...tableData, result: newData })
    }


    //handles when the checkbox at the table header is clicked, it checks and
    //unchecks all the row in the table
    const handleToggleAllDataRow = () => {
        let newResultData = []
        if (isAllChecked) {
            newResultData = tableData.result.map(item => ({ ...item, checked: false }))
        } else {
            newResultData = tableData.result.map(item => ({ ...item, checked: true }))
        }
        setTableData({ ...tableData, result: newResultData })
        // setFilterDataStore([...newResultData])
        setIsAllChecked(!isAllChecked)


    }

    return (
        <Layout
            searchInput={searchInput}
            handleSearch={handleSearch}
        >
            <StyledDivisionsContainer>
                <StatisticsCards />
                <DivisionsSummary />
                <ModuleHistory />
                <DivisionsTable
                    tableData={tableData}
                    handleCheckRow={handleCheckRow}
                    isAllChecked={isAllChecked}
                    handleToggleAllDataRow={handleToggleAllDataRow}
                />
            </StyledDivisionsContainer>
        </Layout>
    )
}
