import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Item } from '../types'
import type { ItemsStore } from './types'
import { ACTIONS } from './constants'
import {
  handleDeleteSelectedItems,
  handleSelectedItem,
} from './utils/handle-selected-items'
import { handleRevertLastAction } from './utils/handle-revert-last-action'

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
              items: [{ ...itemToDelete, selected: true }],
            },
          })
        }
      },

      toggleItem: (id: number) => {
        const { items } = get()
        set({
          items: handleSelectedItem({ items, itemClickedId: id }),
        })
      },

      revertLastAction: () => {
        const { lastAction, items } = get()

        if (!lastAction?.items) return

        const updatedItems = handleRevertLastAction({ lastAction, items })

        set({
          items: updatedItems,
          lastAction: undefined,
        })
      },

      deleteSelectedItems: () => {
        const { items } = get()

        const { updatedItems, deletedItems } = handleDeleteSelectedItems({
          items,
        })

        if (!deletedItems.length) return

        set({
          items: updatedItems,
          lastAction: {
            value: ACTIONS.delete,
            items: deletedItems,
          },
        })
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
