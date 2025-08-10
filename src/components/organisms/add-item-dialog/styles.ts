import { styled, TextField } from '@mui/material'
import CardWithActionButtons from '../../molecules/card-with-action-buttons'

export const InputCard = styled(CardWithActionButtons)`
  width: ${({ theme }) => theme.spacing(75)};
  height: ${({ theme }) => theme.spacing(21.75)};
  margin-top: ${({ theme }) => theme.spacing(6.25)};
`

export const Input = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 0;
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`
