import type React from 'react'
import { MuiButton } from './styles'
import type { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  label,
  ...props
}) => (
  <MuiButton {...props} className={className}>
    {children ?? label}
  </MuiButton>
)

export default Button
