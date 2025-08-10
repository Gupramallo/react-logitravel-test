import type { PropsWithChildren } from 'react'

export type DialogProps = PropsWithChildren & {
  open: boolean
  className?: string
}
