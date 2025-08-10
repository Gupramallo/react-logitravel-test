import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Item } from '../types'
import type { LastAction } from './types'
import { ACTIONS } from './constants'

type ItemsStore = {
  items: Item[]
  latestId: number
  lastAction?: LastAction
  setNewItem: (item: string) => void
  setItems: (items: Item[]) => void
  removeRevertLastAction: () => void
  deleteItem: (id: number) => void
  toggleItem: (id: number) => void
  revertLastAction: () => void
}

export const useItemsStore = create<ItemsStore>()(
  persist(
    (set, get) => ({
      items: [],
      latestId: 0,
      lastAction: undefined,
      setNewItem: (item: string) => {
        const { latestId, items } = get()
        const newId = latestId + 1
        const newItem: Item = {
          name: item,
          id: newId,
          selected: false,
        }
        const updatedItems = [...items, newItem]

        console.log('hmmmmm')

        console.log('updatedItems', updatedItems)

        set({
          items: updatedItems,
          latestId: newId,
          lastAction: {
            value: ACTIONS.add,
            items: [newItem],
          },
        })
      },

      setItems: (items) => {
        set({ items })
      },

      removeRevertLastAction: () => {
        set({ lastAction: undefined })
      },

      deleteItem: (id: number) => {
        const { items } = get()
        const itemToDelete = items.find((item) => item.id === id)

        if (itemToDelete) {
          set({
            items: items.filter((item) => item.id !== id),
            lastAction: {
              value: ACTIONS.delete,
              items: [itemToDelete],
            },
          })
        }
      },

      toggleItem: (id: number) => {
        const { items } = get()
        set({
          items: items.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          ),
        })
      },

      revertLastAction: () => {
        const { lastAction, items } = get()

        if (!lastAction) return

        if (lastAction.value === ACTIONS.add && lastAction.items) {
          const idsToRemove = lastAction.items.map((item) => item.id)
          set({
            items: items.filter((item) => !idsToRemove.includes(item.id)),
            lastAction: undefined,
          })

          return
        }

        if (lastAction.value === 'delete' && lastAction.items) {
          set({
            items: [...items, ...lastAction.items],
            lastAction: undefined,
          })

          return
        }
      },
    }),
    {
      name: 'items-storage',
      partialize: (state) => ({
        items: state.items,
        latestId: state.latestId,
        lastAction: state.lastAction,
      }),
    }
  )
)
