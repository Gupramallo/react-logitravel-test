import type { Item } from '../../types'
import type { LastAction } from '../types'

export type HandleRevertLastAction = {
  items: Item[]
  lastAction: LastAction
}

export type RevertDeletedItems = Pick<HandleRevertLastAction, 'items'> & {
  itemsDeleted?: Item[]
}
