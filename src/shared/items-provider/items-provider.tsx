import { useMemo, type PropsWithChildren } from 'react'
import { ItemsContext } from './context'
import { useItemsStore } from './store'

const ItemsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const items = useItemsStore((state) => state.items)
  const lastAction = useItemsStore((state) => state.lastAction)
  const setItems = useItemsStore((state) => state.setItems)
  const setNewItem = useItemsStore((state) => state.setNewItem)
  const removeRevertLastAction = useItemsStore(
    (state) => state.removeRevertLastAction
  )

  const value = useMemo(
    () => ({
      items,
      lastAction,
      setItems,
      setNewItem,
      removeRevertLastAction,
    }),
    [items, lastAction, setItems, setNewItem, removeRevertLastAction]
  )

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

export default ItemsProvider
