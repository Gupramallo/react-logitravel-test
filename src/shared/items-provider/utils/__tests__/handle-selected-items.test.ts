import { describe, it, expect } from 'vitest'
import type { Item } from '../../../types'
import {
  firstItem,
  fourthItem,
  mockItems,
  secondItem,
  thirdItem,
} from '../__mocks__/item-provider-utils-mocks'
import {
  handleSelectedItem,
  handleDeleteSelectedItems,
} from '../handle-selected-items'

describe('handleSelectedItem', () => {
  it('should toggle selected state of the clicked item from false to true', () => {
    const result = handleSelectedItem({
      items: mockItems,
      itemClickedId: 1,
    })

    expect(result).toEqual([
      { id: 1, name: 'Item 1', selected: true },
      secondItem,
      thirdItem,
      fourthItem,
    ])
  })

  it('should toggle selected state of the clicked item from true to false', () => {
    const result = handleSelectedItem({
      items: mockItems,
      itemClickedId: 2,
    })

    expect(result).toEqual([
      firstItem,
      { id: 2, name: 'Item 2', selected: false },
      thirdItem,
      fourthItem,
    ])
  })

  it('should handle empty items array', () => {
    const result = handleSelectedItem({
      items: [],
      itemClickedId: 1,
    })

    expect(result).toEqual([])
  })

  it('should handle non-existent item id', () => {
    const result = handleSelectedItem({
      items: mockItems,
      itemClickedId: 999,
    })

    expect(result).toEqual(mockItems)
  })
})

describe('handleDeleteSelectedItems', () => {
  it('should separate selected and unselected items correctly', () => {
    const result = handleDeleteSelectedItems({ items: mockItems })

    expect(result.updatedItems).toEqual([firstItem, thirdItem])

    expect(result.deletedItems).toEqual([secondItem, fourthItem])
  })

  it('should handle all items selected', () => {
    const allSelectedItems: Item[] = mockItems.map((item) => ({
      ...item,
      selected: true,
    }))
    const result = handleDeleteSelectedItems({ items: allSelectedItems })

    expect(result.updatedItems).toEqual([])
    expect(result.deletedItems).toEqual(allSelectedItems)
  })

  it('should handle no items selected', () => {
    const noSelectedItems: Item[] = mockItems.map((item) => ({
      ...item,
      selected: false,
    }))

    const result = handleDeleteSelectedItems({ items: noSelectedItems })

    expect(result.updatedItems).toEqual(noSelectedItems)
    expect(result.deletedItems).toEqual([])
  })

  it('should handle empty items array', () => {
    const result = handleDeleteSelectedItems({ items: [] })

    expect(result.updatedItems).toEqual([])
    expect(result.deletedItems).toEqual([])
  })
})
