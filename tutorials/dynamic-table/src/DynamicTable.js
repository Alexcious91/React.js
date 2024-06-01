import React from 'react'
import TableData from './TableData'
import { Table, Container } from 'react-bootstrap'

function DynamicTable() {
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
      <Container className='mt-3'>
         <Table>
            <thead>
               <tr>{tableHeadData()}</tr>
            </thead>

            <tbody>
               {tableRowData()}
            </tbody>
         </Table>
      </Container>
   )
}

export default DynamicTable;