import type {
  GetStorage,
  ItemProviderValues,
  PropsWithKey,
  SetStorage,
} from './types'

export const STORAGE_KEYS = {
  items: 'items',
  latestId: 'latestId',
  lastAction: 'lastAction',
} as const

export const ACTIONS = {
  add: 'add',
  delete: 'delete',
} as const

export const STORAGE = {
  set: ({ key, value }: SetStorage) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: ({ key, defaultValue = null }: GetStorage) => {
    const storageItem = localStorage.getItem(key)

    return storageItem ? JSON.parse(storageItem) : defaultValue
  },
  remove: ({ key }: PropsWithKey) => {
    localStorage.removeItem(key)
  },
}

export const ITEMS_CONTEXT_DEFAULT_VALUES: ItemProviderValues = {
  items: [],
  setItems: () => {},
  removeRevertLastAction: () => {},
  setNewItem: () => {},
  lastAction: undefined,
}
