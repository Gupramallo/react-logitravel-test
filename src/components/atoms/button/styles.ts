import { Button, styled } from '@mui/material'

export const MuiButton = styled(Button)`
  border-radius: ${({ theme }) => theme.spacing(6.25)};
  max-height: ${({ theme }) => theme.spacing(6.25)};
  padding: ${({ theme }) => theme.spacing(2, 3.75)};
`
