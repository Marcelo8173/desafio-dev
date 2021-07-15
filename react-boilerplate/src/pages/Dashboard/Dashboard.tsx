import React from 'react'
import { TemplateMain } from '../../view/template/Main'
import { DropZone } from '../../components'
import * as S from './styled'

const Dashboard = () => {
  return (
    <TemplateMain>
      <S.Wrapper>
        <DropZone />
      </S.Wrapper>
    </TemplateMain>
  )
}

export default Dashboard
