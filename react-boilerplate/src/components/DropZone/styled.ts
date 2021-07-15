import styled, { css } from 'styled-components'

export const DropZone = styled.div`
  ${({ theme }) => css`
    border: 3px dotted ${theme.colors.primary};
    background: ${theme.colors.white};
    width: 100%;
    height: 20rem;
  `}
`
