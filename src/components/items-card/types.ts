import type { ItemsStore } from '../../shared/items-provider/types'
import type { Item } from '../../shared/types'

export type ItemsCardProps = Pick<
  ItemsStore,
  'toggleItem' | 'deleteItem' | 'deleteSelectedItems' | 'revertLastAction'
> & {
  openDialog: () => void
  items?: Item[]
}
