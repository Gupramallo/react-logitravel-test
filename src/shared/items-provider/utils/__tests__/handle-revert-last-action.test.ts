import { describe, it, expect } from 'vitest'
import { handleRevertLastAction } from '../handle-revert-last-action'
import { ACTIONS } from '../../constants'
import type { Item } from '../../../types'
import type { LastAction } from '../../types'
import {
  deletedItems,
  firstItem,
  fourthItem,
  mockItems,
  remainingItems,
  secondItem,
  thirdItem,
} from '../__mocks__/item-provider-utils-mocks'

describe('handleRevertLastAction', () => {
  describe('when reverting ADD action', () => {
    it('should remove the last added item', () => {
      const lastAction: LastAction = {
        value: ACTIONS.add,
        items: [fourthItem],
      }

      const result = handleRevertLastAction({
        items: mockItems,
        lastAction,
      })

      expect(result).toEqual([firstItem, secondItem, thirdItem])
    })

    it('should handle lastAction with no items property for ADD', () => {
      const lastAction: LastAction = {
        value: ACTIONS.add,
      }

      const result = handleRevertLastAction({
        items: mockItems,
        lastAction,
      })

      expect(result).toEqual([firstItem, secondItem, thirdItem])
    })
  })

  describe('when reverting DELETE action', () => {
    it('should restore multiple deleted items in correct order', () => {
      const deletedItems: Item[] = [fourthItem, firstItem, secondItem]
      const lastAction: LastAction = {
        value: ACTIONS.delete,
        items: deletedItems,
      }

      const result = handleRevertLastAction({
        items: remainingItems,
        lastAction,
      })

      expect(result).toEqual([firstItem, secondItem, thirdItem, fourthItem])
    })

    it('should handle empty deleted items array', () => {
      const lastAction: LastAction = {
        value: ACTIONS.delete,
        items: [],
      }

      const result = handleRevertLastAction({
        items: mockItems,
        lastAction,
      })

      expect(result).toEqual([])
    })

    it('should handle undefined deleted items', () => {
      const lastAction: LastAction = {
        value: ACTIONS.delete,
        items: undefined,
      }

      const result = handleRevertLastAction({
        items: mockItems,
        lastAction,
      })

      expect(result).toEqual([])
    })

    it('should restore items to empty array', () => {
      const lastAction: LastAction = {
        value: ACTIONS.delete,
        items: deletedItems,
      }

      const result = handleRevertLastAction({
        items: [],
        lastAction,
      })

      expect(result).toEqual([secondItem])
    })
  })

  describe('when handling unknown action', () => {
    it('should return undefined for unknown action type', () => {
      const lastAction = {
        value: 'UNKNOWN_ACTION' as keyof typeof ACTIONS,
        items: mockItems,
      } as LastAction

      const result = handleRevertLastAction({
        items: mockItems,
        lastAction,
      })

      expect(result).toBeUndefined()
    })
  })
})
