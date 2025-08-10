import { useMemo, type PropsWithChildren } from 'react'
import { ItemsContext } from './context'
import { useItemsStore } from './store'

const ItemsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const items = useItemsStore((state) => state.items)
  const latestId = useItemsStore((state) => state.latestId)
  const lastAction = useItemsStore((state) => state.lastAction)
  const setItems = useItemsStore((state) => state.setItems)
  const deleteItem = useItemsStore((state) => state.deleteItem)
  const revertLastAction = useItemsStore((state) => state.revertLastAction)
  const setNewItem = useItemsStore((state) => state.setNewItem)
  const removeRevertLastAction = useItemsStore(
    (state) => state.removeRevertLastAction
  )
  const toggleItem = useItemsStore((state) => state.toggleItem)
  const deleteSelectedItems = useItemsStore(
    (state) => state.deleteSelectedItems
  )

  const value = useMemo(
    () => ({
      items,
      lastAction,
      latestId,
      setItems,
      deleteItem,
      setNewItem,
      removeRevertLastAction,
      toggleItem,
      revertLastAction,
      deleteSelectedItems,
    }),
    [
      items,
      lastAction,
      latestId,
      setItems,
      deleteItem,
      setNewItem,
      removeRevertLastAction,
      toggleItem,
      revertLastAction,
      deleteSelectedItems,
    ]
  )

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

export default ItemsProvider
