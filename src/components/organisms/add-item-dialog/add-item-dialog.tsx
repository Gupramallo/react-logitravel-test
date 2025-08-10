import React from 'react'
import type { AddItemDialogProps } from './types'
import Dialog from '../../atoms/dialog'
import { Input, InputCard } from './styles'
import AddButton from '../../atoms/buttons/add-button'
import CancelButton from '../../atoms/buttons/cancel-button'
import { useAddItemDialog } from './use-add-item-dialog'

const AddItemDialog: React.FC<AddItemDialogProps> = ({ open, closeDialog }) => {
  const { textFieldRef, error, handleClose, handleSubmit } = useAddItemDialog({
    open,
    closeDialog,
  })

  return (
    <Dialog open={open}>
      <InputCard
        description="Add item to list"
        rightButtons={
          <>
            <AddButton variant="outlined" onClick={handleSubmit} />
            <CancelButton onClick={handleClose} />
          </>
        }
      >
        <Input
          error={error}
          type="text"
          placeholder="Type the text here"
          inputRef={textFieldRef}
        />
      </InputCard>
    </Dialog>
  )
}

export default AddItemDialog
