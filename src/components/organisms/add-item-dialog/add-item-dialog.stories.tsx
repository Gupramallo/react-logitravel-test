import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../../atoms/button'
import AddItemDialog from './add-item-dialog'

const meta: Meta = {
  title: 'Organisms/Add Item Dialog',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const AddItemDialogStory: StoryObj<{
  numberOfItems: number
  open: boolean
}> = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          width: '600px',
        }}
      >
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <AddItemDialog open={open} closeDialog={() => setOpen(false)} />
      </div>
    )
  },
}
