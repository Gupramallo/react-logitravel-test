import type { PropsWithChildren, ReactNode } from 'react'

export type CardWithActionButtonProps = PropsWithChildren & {
  title?: string
  description?: string
  centeredText?: boolean
  leftButtons?: ReactNode
  rightButtons?: ReactNode
}
