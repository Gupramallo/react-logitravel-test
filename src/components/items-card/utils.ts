import type { Item } from '../../shared/types'

export const handleSelectedItem = ({
  items,
  itemClickedId,
}: {
  items: Item[]
  itemClickedId: number
}) =>
  items.map((item) => {
    if (item.id !== itemClickedId) {
      return item
    }

    return {
      ...item,
      selected: !item.selected,
    }
  })

export const handleDeleteItem = ({
  items,
  itemClickedId,
}: {
  items: Item[]
  itemClickedId: number
}) =>
  items.map((item) => {
    if (item.id !== itemClickedId) {
      return item
    }

    return {
      ...item,
      selected: !item.selected,
    }
  })
