import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > P {
      margin-top: ${theme.spacings.xlarge};
      border-left: 7px solid ${theme.colors.secondary};
      padding-left: 5px;
      color: ${theme.colors.white};
      font: ${theme.font.sizes.large};
    }
  `}
`
