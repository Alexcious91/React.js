import React, { useEffect } from 'react'
import TableData from './TableData'
import { Table } from 'react-bootstrap'

function DynamicTable() {

   /**
    * get the object properties
    * 
   */
   const column = Object.keys(TableData[0])
   console.log(column);

   /**
    * map through array and assign each element to <th>
    * each <th> must be unique
   */
   const tableHeadData = () => {
      return column.map(data => {
         return <th key={data}>{data}</th>
      })
   }

   const tableRowData = () => {
      return TableData.map(data => {
         return (
            <tr>
               {column.map(value => {
                  return <td>{data[value]}</td>
               })}
            </tr>
         )
      })
   }

   return (
      <Table>
         <thead>
            <tr>{tableHeadData()}</tr>
         </thead>

         <tbody>
            {tableRowData()}
         </tbody>
      </Table>
   )
}

export default DynamicTable;