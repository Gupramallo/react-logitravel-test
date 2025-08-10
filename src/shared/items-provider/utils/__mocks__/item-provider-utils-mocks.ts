import type { Item } from '../../../types'

export const firstItem: Item = { id: 1, name: 'Item 1', selected: false }
export const secondItem: Item = { id: 2, name: 'Item 2', selected: true }
export const thirdItem: Item = { id: 3, name: 'Item 3', selected: false }
export const fourthItem: Item = { id: 4, name: 'Item 4', selected: true }
export const mockItems: Item[] = [firstItem, secondItem, thirdItem, fourthItem]
export const remainingItems: Item[] = [thirdItem]
export const deletedItems: Item[] = [secondItem]
