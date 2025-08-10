import { styled } from '@mui/material'
import Button from '../../button/button'

export const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(2, 6.25)};
`
