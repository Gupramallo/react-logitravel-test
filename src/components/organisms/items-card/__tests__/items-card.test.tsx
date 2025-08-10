import { screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  firstItem,
  mockItems,
} from '../../../../shared/items-provider/utils/__mocks__/item-provider-utils-mocks'
import { renderWithTheme } from '../../../../test/render-with-theme'
import ItemsCard from '../items-card'

describe('ItemsCard', () => {
  const mockOpenDialog = vi.fn()
  const mockToggleItem = vi.fn()
  const mockDeleteItem = vi.fn()
  const mockDeleteSelectedItems = vi.fn()
  const mockRevertLastAction = vi.fn()

  const defaultProps = {
    openDialog: mockOpenDialog,
    toggleItem: mockToggleItem,
    deleteItem: mockDeleteItem,
    deleteSelectedItems: mockDeleteSelectedItems,
    revertLastAction: mockRevertLastAction,
  }

  beforeEach(() => vi.clearAllMocks())

  it('should render with items', () => {
    renderWithTheme(<ItemsCard {...defaultProps} items={mockItems} />)

    const addButton = screen.getByRole('button', { name: 'Add' })
    const deleteButton = screen.getByRole('button', { name: 'Delete' })
    const revertButton = screen.getByTestId('ReplayIcon')

    expect(screen.getByText('This is a technical proof.')).toBeInTheDocument()
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet consectetur adipiscing/)
    ).toBeInTheDocument()

    expect(revertButton).toBeInTheDocument()
    expect(deleteButton).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()

    fireEvent.click(addButton)
    expect(mockOpenDialog).toHaveBeenCalledTimes(1)

    fireEvent.click(revertButton)
    expect(mockRevertLastAction).toHaveBeenCalledTimes(1)

    fireEvent.click(deleteButton)
    expect(mockDeleteSelectedItems).toHaveBeenCalledTimes(1)

    mockItems.forEach((item) =>
      expect(screen.getByText(item.name)).toBeInTheDocument()
    )
  })

  it('should render with empty items array', () => {
    renderWithTheme(<ItemsCard {...defaultProps} items={[]} />)

    expect(screen.getByText('This is a technical proof.')).toBeInTheDocument()
  })

  describe('items interaction', () => {
    it('should call toggleItem when an item is clicked', () => {
      renderWithTheme(<ItemsCard {...defaultProps} items={mockItems} />)

      const item = screen.getByText(firstItem.name)
      fireEvent.click(item)

      expect(mockToggleItem).toHaveBeenCalledTimes(1)
      expect(mockToggleItem).toHaveBeenCalledWith(firstItem.id)
    })

    it('should call deleteItem when an item is double-clicked', () => {
      renderWithTheme(<ItemsCard {...defaultProps} items={mockItems} />)

      const item = screen.getByText(firstItem.name)
      fireEvent.doubleClick(item)

      expect(mockDeleteItem).toHaveBeenCalledTimes(1)
      expect(mockDeleteItem).toHaveBeenCalledWith(firstItem.id)
    })
  })
})
