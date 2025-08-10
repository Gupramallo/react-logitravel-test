import type { Item } from '../types'
import type { ACTIONS } from './constants'

export type ItemsStore = {
  items: Item[]
  latestId: number
  lastAction?: LastAction
  setNewItem: (item: string) => void
  setItems: (items: Item[]) => void
  removeRevertLastAction: () => void
  deleteItem: (id: number) => void
  toggleItem: (id: number) => void
  revertLastAction: () => void
  deleteSelectedItems: () => void
}

export type PropsWithKey = {
  key: string
}

export type GetStorage = PropsWithKey & {
  defaultValue?: unknown
}

export type SetStorage = PropsWithKey & {
  value?: unknown
}

export type LastAction = {
  value: keyof typeof ACTIONS
  items?: Item[]
}
