import { ACTIONS } from '../constants'
import type { HandleRevertLastAction, RevertDeletedItems } from './types'

const revertAddItem = ({ items }: Pick<HandleRevertLastAction, 'items'>) =>
  items.slice(0, -1)

const revertDeletedItems = ({
  itemsDeleted = [],
  items,
}: RevertDeletedItems) => {
  if (!itemsDeleted.length) return

  const updatedItems = [...items, ...itemsDeleted]
  const sortedItems = updatedItems.sort((a, b) => a.id - b.id)

  return sortedItems
}

export const handleRevertLastAction = ({
  items,
  lastAction,
}: HandleRevertLastAction) => {
  switch (lastAction.value) {
    case ACTIONS.add:
      return revertAddItem({ items })

    case ACTIONS.delete:
      return revertDeletedItems({ itemsDeleted: lastAction?.items, items })

    default:
      return
  }
}
