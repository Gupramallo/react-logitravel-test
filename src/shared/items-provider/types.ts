import type { Item } from '../types'
import type { ACTIONS } from './constants'

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

export type ItemProviderValues = {
  items: Item[]
  setItems: (value: Item[]) => void
  removeRevertLastAction: () => void
  setNewItem: (item: string) => void
  lastAction?: LastAction
}
