import { fireEvent, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  firstItem,
  mockItems,
  secondItem,
  thirdItem,
} from '../../../../shared/items-provider/utils/__mocks__/item-provider-utils-mocks'
import theme from '../../../../styles'
import { renderWithTheme } from '../../../../test/render-with-theme'
import ItemsBox from '../items-box'

const mockOnClick = vi.fn()
const mockOnDoubleClick = vi.fn()

beforeEach(() => {
  mockOnClick.mockClear()
  mockOnDoubleClick.mockClear()
})

describe('ItemsBox', () => {
  it('should render empty container when no items provided', () => {
    const { container } = renderWithTheme(
      <ItemsBox
        items={[]}
        onClick={mockOnClick}
        onDoubleClick={mockOnDoubleClick}
      />
    )

    const containerElement = container.firstChild as HTMLElement
    expect(containerElement).toBeInTheDocument()
    expect(containerElement.children).toHaveLength(0)
  })

  it('should render all items when provided', () => {
    renderWithTheme(
      <ItemsBox
        items={mockItems}
        onClick={mockOnClick}
        onDoubleClick={mockOnDoubleClick}
      />
    )

    mockItems.forEach((item) =>
      expect(screen.getByText(item.name)).toBeInTheDocument()
    )
  })

  it('should apply selected styling to selected items', () => {
    renderWithTheme(
      <ItemsBox
        items={mockItems}
        onClick={mockOnClick}
        onDoubleClick={mockOnDoubleClick}
      />
    )

    const selectedItem = screen.getByText(secondItem.name).closest('div')
    const unselectedItem = screen.getByText(firstItem.name).closest('div')

    expect(selectedItem).toHaveStyle({
      backgroundColor: theme.palette.primary.main,
    })
    expect(unselectedItem).not.toHaveStyle({
      backgroundColor: theme.palette.primary.main,
    })
  })

  it('should call onClick with correct id when item is clicked', () => {
    renderWithTheme(
      <ItemsBox
        items={mockItems}
        onClick={mockOnClick}
        onDoubleClick={mockOnDoubleClick}
      />
    )

    fireEvent.click(screen.getByText(thirdItem.name))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith(thirdItem.id)
    expect(mockOnDoubleClick).not.toHaveBeenCalled()
  })

  it('should call onClick with correct id for different items', () => {
    renderWithTheme(
      <ItemsBox
        items={mockItems}
        onClick={mockOnClick}
        onDoubleClick={mockOnDoubleClick}
      />
    )

    fireEvent.click(screen.getByText(secondItem.name))
    fireEvent.click(screen.getByText(thirdItem.name))

    expect(mockOnClick).toHaveBeenCalledTimes(2)
    expect(mockOnClick).toHaveBeenNthCalledWith(1, secondItem.id)
    expect(mockOnClick).toHaveBeenNthCalledWith(2, thirdItem.id)
    expect(mockOnDoubleClick).not.toHaveBeenCalled()
  })

  it('should call onDoubleClick with correct id when item is double clicked', () => {
    const { getByText } = renderWithTheme(
      <ItemsBox
        items={mockItems}
        onClick={mockOnClick}
        onDoubleClick={mockOnDoubleClick}
      />
    )

    fireEvent.doubleClick(getByText(firstItem.name))

    expect(mockOnDoubleClick).toHaveBeenCalledTimes(1)
    expect(mockOnDoubleClick).toHaveBeenCalledWith(firstItem.id)
  })
})
