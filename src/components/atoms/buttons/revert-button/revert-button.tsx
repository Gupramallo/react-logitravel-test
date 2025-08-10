import type React from 'react'
import Button from '../../button/button'
import type { ButtonProps } from '@mui/material'
import { RevertIcon } from './styles'

const RevertButton: React.FC<ButtonProps> = ({ ...props }) => (
  <Button {...props} variant="outlined">
    <RevertIcon />
  </Button>
)

export default RevertButton
