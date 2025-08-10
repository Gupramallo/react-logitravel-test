import { useEffect, useRef, useState } from 'react'
import type { AddItemDialogProps } from './types'

export const useAddItemDialog = ({
  open,
  onClick,
  closeDialog,
}: AddItemDialogProps) => {
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

    onClick(value)
    handleClose()
  }

  return {
    handleSubmit,
    handleClose,
    error,
    textFieldRef,
  }
}
