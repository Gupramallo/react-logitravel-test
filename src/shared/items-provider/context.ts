import { createContext, useContext } from 'react'
import { ITEMS_CONTEXT_DEFAULT_VALUES } from './constants'
import type { ItemsStore } from './types'

export const ItemsContext = createContext<ItemsStore>(
  ITEMS_CONTEXT_DEFAULT_VALUES
)

export const useItemsContext = () => useContext(ItemsContext)
