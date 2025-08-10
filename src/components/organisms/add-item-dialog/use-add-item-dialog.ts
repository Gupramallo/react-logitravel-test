import { useEffect, useRef, useState } from 'react'
import type { AddItemDialogProps } from './types'
import { useItemsContext } from '../../../shared/items-provider/context'

export const useAddItemDialog = ({ open, closeDialog }: AddItemDialogProps) => {
  const { setNewItem } = useItemsContext()
  const textFieldRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (open && textFieldRef.current) {
      textFieldRef.current?.focus()
    }
  }, [open])

  const handleClose = () => {
    if (textFieldRef.current) {
      textFieldRef.current.value = ''
    }
    setError(false)
    closeDialog()
  }
  const handleSubmit = () => {
    const value = textFieldRef.current?.value?.trim()

    if (!value) {
      setError(true)

      return
    }

    setNewItem(value)
    handleClose()
  }

  return {
    handleSubmit,
    handleClose,
    error,
    textFieldRef,
  }
}
