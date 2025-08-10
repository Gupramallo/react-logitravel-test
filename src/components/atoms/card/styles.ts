import { Card, styled } from '@mui/material'

export const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spacing(106.25)};
  padding: ${({ theme }) => theme.spacing(6.25)};
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: 0px 5px 12px #0000001f;
  height: 100%;
`
