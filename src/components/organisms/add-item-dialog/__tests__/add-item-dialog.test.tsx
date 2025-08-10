import { screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderWithTheme } from '../../../../test/render-with-theme'
import AddItemDialog from '../add-item-dialog'
import * as useAddItemDialogModule from '../use-add-item-dialog'

const mockHandleClose = vi.fn()
const mockHandleSubmit = vi.fn()
const mockTextFieldRef = { current: null }
const mockUseAddItemDialog = vi.fn(() => ({
  textFieldRef: mockTextFieldRef,
  error: false,
  handleClose: mockHandleClose,
  handleSubmit: mockHandleSubmit,
}))
const mockCloseDialog = vi.fn()
const defaultProps = {
  open: false,
  closeDialog: mockCloseDialog,
}

vi.spyOn(useAddItemDialogModule, 'useAddItemDialog').mockImplementation(
  mockUseAddItemDialog
)

describe('AddItemDialog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseAddItemDialog.mockReturnValue({
      textFieldRef: mockTextFieldRef,
      error: false,
      handleClose: mockHandleClose,
      handleSubmit: mockHandleSubmit,
    })
  })

  it('should render the dialog', () => {
    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    const input = screen.getByPlaceholderText('Type the text here')
    const addButton = screen.getByRole('button', { name: 'Add' })
    const cancelButton = screen.getByRole('button', { name: 'Cancel' })

    expect(screen.getByText('Add item to list')).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(addButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()

    fireEvent.click(addButton)
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1)

    fireEvent.click(cancelButton)
    expect(mockHandleClose).toHaveBeenCalledTimes(1)
  })

  it('should call useAddItemDialog hook with correct props', () => {
    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    expect(mockUseAddItemDialog).toHaveBeenCalledWith({
      open: true,
      closeDialog: defaultProps.closeDialog,
    })
  })

  it('should display input without error state by default', () => {
    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    const input = screen.getByPlaceholderText('Type the text here')

    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('should display input with error state when error is true', () => {
    mockUseAddItemDialog.mockReturnValue({
      textFieldRef: mockTextFieldRef,
      error: true,
      handleClose: mockHandleClose,
      handleSubmit: mockHandleSubmit,
    })

    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    const input = screen.getByPlaceholderText('Type the text here')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should allow typing in the input field', () => {
    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    const input = screen.getByPlaceholderText('Type the text here')
    fireEvent.change(input, { target: { value: 'New item' } })

    expect(input).toHaveValue('New item')
  })

  it('should show error state when hook returns error true', () => {
    mockUseAddItemDialog.mockReturnValue({
      textFieldRef: mockTextFieldRef,
      error: true,
      handleClose: mockHandleClose,
      handleSubmit: mockHandleSubmit,
    })

    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    const input = screen.getByPlaceholderText('Type the text here')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should not show error state when hook returns error false', () => {
    mockUseAddItemDialog.mockReturnValue({
      textFieldRef: mockTextFieldRef,
      error: false,
      handleClose: mockHandleClose,
      handleSubmit: mockHandleSubmit,
    })

    renderWithTheme(<AddItemDialog {...defaultProps} open />)

    const input = screen.getByPlaceholderText('Type the text here')
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })
})
