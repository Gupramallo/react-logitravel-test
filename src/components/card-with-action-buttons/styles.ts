import { css, styled, Typography } from '@mui/material'

export const Text = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'centered',
})<{ centered?: boolean }>`
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}
`

export const ActionButtonsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`
export const LeftActionButtons = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: flex-end;
`
export const RightActionButtons = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: flex-start;
`
