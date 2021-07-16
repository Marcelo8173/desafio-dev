import React, { useEffect, useState } from 'react'
import { TemplateMain } from '../../view/template/Main'
import { IListProps } from '../../components/Table/models/index-table-models'
import { DropZone, Table } from '../../components'
import * as S from './styled'
import api from '../../infra/services/api'

const Dashboard = () => {
  const [list, SetList] = useState<IListProps[]>([])

  useEffect(() => {
    api.get('/data/import').then((response) => SetList(response.data))
  }, [])

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
