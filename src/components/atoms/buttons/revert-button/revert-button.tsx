import type React from 'react'
import type { ButtonProps } from '@mui/material'
import Button from '../../button/button'
import { RevertIcon } from './styles'

const RevertButton: React.FC<ButtonProps> = ({ ...props }) => (
  <Button {...props} variant="outlined">
    <RevertIcon />
  </Button>
)

export default RevertButton
