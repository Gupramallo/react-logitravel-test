import { css, styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.spacing(28.5)};
  ${({ theme }) => css`
    background: ${theme.palette.background.secondary} 0% 0%
      no-repeat padding-box;
  `}
  ${({ theme }) => css`
    border: ${theme.spacing(0.125)} solid
      ${theme.palette.divider};
  `}
  opacity: 1;
  padding: ${({ theme }) => theme.spacing(1.5, 1.25)};
  margin-top: ${({ theme }) => theme.spacing(4.5)};
  margin-bottom: ${({ theme }) => theme.spacing(3.75)};
  overflow-y: auto;
`

export const Block = styled('div')<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  min-height: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(0, 2)};
  user-select: none;
  cursor: pointer;

  ${({ theme, selected }) =>
    selected &&
    css`
      background-color: ${theme.palette.primary.main};

      > p {
        color: ${theme.palette.common.white};
      }
    `}
  :hover {
    opacity: 0.8;
  }
`
