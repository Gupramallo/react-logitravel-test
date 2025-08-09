import { css, styled } from '@mui/material'

export const Wrapper = styled('div')`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  ${({ theme }) => css`
    background: transparent
      linear-gradient(
        135deg,
        ${theme.palette.background.main} 0%,
        ${theme.palette.background.secondary} 100%
      )
      0% 0% no-repeat padding-box;
  `}
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
`
