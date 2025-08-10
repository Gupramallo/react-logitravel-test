import React from 'react'
import type { PropsWithChildren } from 'react'
import { Wrapper } from './styles'

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Wrapper className="layout">{children}</Wrapper>
)

export default Layout
