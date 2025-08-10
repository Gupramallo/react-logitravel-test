import type React from 'react'
import Button from '../../button'
import type { ButtonProps } from '../../button/types'

const CancelButton: React.FC<ButtonProps> = ({
  label = 'Cancel',
  ...props
}) => <Button {...props} variant="outlined" label={label} />

export default CancelButton
