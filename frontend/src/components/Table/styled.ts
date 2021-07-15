import styled, { css } from 'styled-components'

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
  `}
`
