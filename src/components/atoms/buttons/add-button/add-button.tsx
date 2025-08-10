import type React from 'react'
import type { ButtonProps } from '../../button/types'
import { StyledButton } from './styles'

const AddButton: React.FC<ButtonProps> = ({ label = 'Add', ...props }) => (
  <StyledButton {...props} variant="contained" label={label} />
)

export default AddButton
