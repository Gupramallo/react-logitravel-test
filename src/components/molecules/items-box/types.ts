import type { Item } from '../../../shared/types'

export type ItemsBoxProps = {
  items?: Item[]
  onClick: (id: number) => void
  onDoubleClick: (id: number) => void
}
