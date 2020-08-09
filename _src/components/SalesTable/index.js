import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTable, useSortBy } from 'react-table'

import './sales-table.scss'

const SalesTable = ({
  tableData,
}) => {
  const data = useMemo(() => tableData, [])
  const columns = useMemo(() => [
    {
      Header: 'Week Ending',
      Cell: ({ value }) =>
        // should use a lib to format as date (locale-aware?)
        new Date(`${value} 00:00`).toLocaleString('default', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      accessor: 'weekEnding',
    },
    { Header: 'Retail Sales', accessor: 'retailSales' },        // should use a lib to format as currency (locale-aware?)
    { Header: 'Wholesale Sales', accessor: 'wholesaleSales' },  // should use a lib to format as currency (locale-aware?)
    { Header: 'Units Sold', accessor: 'unitsSold' },
    { Header: 'Retailer Margin', accessor: 'retailerMargin' },  // should use a lib to format as currency (locale-aware?)
  ], [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useSortBy
  )

  return (
    <div id="sales-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>                  
                  <span className={column.isSorted ? (column.isSortedDesc ? 'desc' :  'asc') : ''}>
                    {column.render('Header')}
                  </span>
                </th>
              ))}                
            </tr>
          ))}          
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}                
              </tr>
            )            
          })}          
        </tbody>
      </table>
    </div>
  )
}

SalesTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = ({
  product: { sales },
}) => ({
  tableData: sales
})
export default connect(mapStateToProps)(SalesTable)