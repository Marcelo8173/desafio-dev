import React from 'react'
import { ITableProps } from './models/index-table-models'
import * as S from './styled'

const Table = ({ list }: ITableProps) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>id</th>
          <th>tipo</th>
          <th>data</th>
          <th>valor</th>
          <th>cpf</th>
          <th>cart</th>
          <th>hora</th>
          <th>DonoDaLoja</th>
          <th>NomeLoja</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {list.map((item, index) => (
            <td key={index}>{item[index]}</td>
          ))}
        </tr>
      </tbody>
    </S.Table>
  )
}

export default Table
