import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useAddItemDialog } from '../use-add-item-dialog'

const mockSetNewItem = vi.fn()
const mockItemsContextValue = {
  items: [],
  latestId: 0,
  lastAction: undefined,
  setNewItem: mockSetNewItem,
  setItems: vi.fn(),
  removeRevertLastAction: vi.fn(),
  deleteItem: vi.fn(),
  toggleItem: vi.fn(),
  revertLastAction: vi.fn(),
  deleteSelectedItems: vi.fn(),
}

vi.mock('../../../../shared/items-provider/context', () => ({
  useItemsContext: () => mockItemsContextValue,
}))

describe('useAddItemDialog', () => {
  const mockCloseDialog = vi.fn()
  const mockOnClick = vi.fn()

  beforeEach(() => {
    mockSetNewItem.mockClear()
    mockCloseDialog.mockClear()
    mockOnClick.mockClear()

    // Mock DOM methods
    Object.defineProperty(HTMLInputElement.prototype, 'focus', {
      value: vi.fn(),
      writable: true,
    })

    Object.defineProperty(HTMLInputElement.prototype, 'value', {
      get: vi.fn(),
      set: vi.fn(),
      configurable: true,
    })
  })

  const defaultProps = {
    open: false,
    closeDialog: mockCloseDialog,
    onClick: mockOnClick,
  }

  it('should focus text field when dialog opens', () => {
    const mockFocus = vi.fn()
    const mockElement = {
      focus: mockFocus,
      value: '',
    } as unknown as HTMLInputElement

    const { result, rerender } = renderHook(
      ({ open }) => useAddItemDialog({ ...defaultProps, open }),
      { initialProps: { open: false } }
    )

    expect(mockFocus).not.toHaveBeenCalled()

    act(() => {
      result.current.textFieldRef.current = mockElement
    })

    rerender({ open: true })

    expect(mockFocus).toHaveBeenCalledTimes(1)
  })

  it('should clear text field value when closing', () => {
    const mockElement = {
      value: 'test value',
      focus: vi.fn(),
    } as unknown as HTMLInputElement
    const { result } = renderHook(() =>
      useAddItemDialog({ ...defaultProps, open: true })
    )

    act(() => {
      result.current.textFieldRef.current = mockElement
    })

    expect(result.current.textFieldRef.current?.value).toBe('test value')

    act(() => result.current.handleClose())

    expect(mockElement.value).toBe('')
    expect(mockCloseDialog).toHaveBeenCalledTimes(1)
  })

  it('should handle error state', () => {
    const { result } = renderHook(() =>
      useAddItemDialog({ ...defaultProps, open: true })
    )
    act(() => result.current.handleSubmit())

    expect(result.current.error).toBe(true)
    expect(mockSetNewItem).not.toHaveBeenCalled()

    act(() => result.current.handleClose())

    expect(result.current.error).toBe(false)
    expect(mockCloseDialog).toHaveBeenCalledTimes(1)
  })

  it('should set error to true when value is only whitespace', () => {
    const mockElement = {
      value: '   ',
      focus: vi.fn(),
    } as unknown as HTMLInputElement
    const { result } = renderHook(() =>
      useAddItemDialog({ ...defaultProps, open: true })
    )

    act(() => (result.current.textFieldRef.current = mockElement))

    act(() => result.current.handleSubmit())

    expect(result.current.error).toBe(true)
    expect(mockSetNewItem).not.toHaveBeenCalled()
    expect(mockCloseDialog).not.toHaveBeenCalled()
  })

  it('should call setNewItem with trimmed value when valid', () => {
    const mockElement = {
      value: '  Test Item  ',
      focus: vi.fn(),
    } as unknown as HTMLInputElement
    const { result } = renderHook(() =>
      useAddItemDialog({ ...defaultProps, open: true })
    )

    act(() => {
      result.current.textFieldRef.current = mockElement
    })

    act(() => result.current.handleSubmit())

    expect(result.current.error).toBe(false)
    expect(mockSetNewItem).toHaveBeenCalledTimes(1)
    expect(mockSetNewItem).toHaveBeenCalledWith('Test Item')
    expect(mockCloseDialog).toHaveBeenCalledTimes(1)
  })

  it('should clear error state on successful submission', () => {
    const mockElement = {
      value: '',
      focus: vi.fn(),
    } as unknown as HTMLInputElement
    const { result } = renderHook(() =>
      useAddItemDialog({ ...defaultProps, open: true })
    )

    act(() => {
      result.current.textFieldRef.current = mockElement
    })

    act(() => result.current.handleSubmit())

    expect(result.current.error).toBe(true)

    act(() => {
      mockElement.value = 'Valid Item'
      result.current.handleSubmit()
    })

    expect(result.current.error).toBe(false)
    expect(mockCloseDialog).toHaveBeenCalledTimes(1)
  })
})
