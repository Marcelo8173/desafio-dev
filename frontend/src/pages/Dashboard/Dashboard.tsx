import React from 'react'
import { TemplateMain } from '../../view/template/Main'
import { DropZone, Table } from '../../components'
import * as S from './styled'

const list = [
  {
    id: 1,
    tipo: 2,
    data: '09620676017',
    valor: '142',
    cpf: '09620676017',
    cart: '4753****3153',
    hora: '153453',
    DonoDaLoja: 'JOÃO MACEDO',
    NomeLoja: 'BAR DO JOÃO'
  }
]

const Dashboard = () => {
  return (
    <TemplateMain>
      <S.Wrapper>
        <DropZone />
        <p>Listagem</p>
        <Table list={list} />
      </S.Wrapper>
    </TemplateMain>
  )
}

export default Dashboard
