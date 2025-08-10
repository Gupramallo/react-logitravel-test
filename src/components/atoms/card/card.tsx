import React from 'react'
import { CardWrapper } from './styles'
import type { CardProps } from './types'

const Card: React.FC<CardProps> = ({ children, className }) => (
  <CardWrapper className={className}>{children}</CardWrapper>
)

export default Card
