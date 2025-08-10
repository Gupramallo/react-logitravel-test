import React, { useRef } from 'react'
import type { AddItemDialogProps } from './types'
import Dialog from '../atoms/dialog'
import { Input, InputCard } from './styles'
import AddButton from '../atoms/buttons/add-button'
import CancelButton from '../atoms/buttons/cancel-button'

const AddItemDialog: React.FC<AddItemDialogProps> = ({
  open,
  onClick,
  closeDialog,
}) => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const handleSubmit = () => {
    const value = textFieldRef.current?.value
    onClick(value)
    console.log('Value:', value)
  }

  return (
    <Dialog open={open}>
      <InputCard
        description="Add item to list"
        rightButtons={
          <>
            <AddButton
              disabled={!textFieldRef.current?.value}
              variant="outlined"
              onClick={handleSubmit}
            />
            <CancelButton onClick={closeDialog} />
          </>
        }
      >
        <Input
          type="text"
          placeholder="Type the text here"
          inputRef={textFieldRef}
        />
      </InputCard>
    </Dialog>
  )
}

export default AddItemDialog
