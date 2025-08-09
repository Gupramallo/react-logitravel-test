import React from 'react'
import type { PropsWithChildren } from 'react'
import { CardWrapper } from './styles'

const Card: React.FC<PropsWithChildren> = ({ children }) => (
  <CardWrapper className="card">{children}</CardWrapper>
)

export default Card
