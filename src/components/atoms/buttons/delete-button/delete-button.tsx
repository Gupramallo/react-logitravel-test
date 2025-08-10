import type React from 'react'
import Button from '../../button'
import type { ButtonProps } from '../../button/types'

const DeleteButton: React.FC<ButtonProps> = ({
  label = 'Delete',
  ...props
}) => <Button {...props} variant="outlined" label={label} />

export default DeleteButton
