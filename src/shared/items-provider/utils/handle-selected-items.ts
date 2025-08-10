import type { Item } from '../../types'

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

export const handleDeleteSelectedItems = ({ items }: { items: Item[] }) =>
  items.reduce<{
    updatedItems: Item[]
    deletedItems: Item[]
  }>(
    (prevItems, item) => {
      if (item.selected) {
        return {
          updatedItems: prevItems.updatedItems,
          deletedItems: [...prevItems.deletedItems, item],
        }
      }

      return {
        updatedItems: [...prevItems.updatedItems, item],
        deletedItems: prevItems.deletedItems,
      }
    },
    {
      updatedItems: [],
      deletedItems: [],
    }
  )
