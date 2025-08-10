import React from 'react'
import { BackdropWrapper, ModalContent } from './styles'
import type { DialogProps } from './types'

const Dialog: React.FC<DialogProps> = ({ children, className, open }) => (
  <BackdropWrapper className={className} open={open}>
    <ModalContent>{children}</ModalContent>
  </BackdropWrapper>
)

export default Dialog
