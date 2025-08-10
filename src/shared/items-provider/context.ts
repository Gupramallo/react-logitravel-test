import { createContext, useContext } from 'react'
import { ITEMS_CONTEXT_DEFAULT_VALUES } from './constants'
import type { ItemProviderValues } from './types'

export const ItemsContext = createContext<ItemProviderValues>(
  ITEMS_CONTEXT_DEFAULT_VALUES
)

export const useItemsContext = () => useContext(ItemsContext)
