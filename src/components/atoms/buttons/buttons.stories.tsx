import type { Meta, StoryObj } from '@storybook/react'
import AddButton from './add-button/add-button'
import CancelButton from './cancel-button/cancel-button'
import DeleteButton from './delete-button/delete-button'
import RevertButton from './revert-button/revert-button'

const meta: Meta = {
  title: 'Atoms/Buttons',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const AllButtons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <AddButton label="Add" />
      <CancelButton label="Cancel" />
      <DeleteButton label="Delete" />
      <RevertButton />
    </div>
  ),
}

export const AddButtonStory: StoryObj = {
  render: () => <AddButton label="Add Item" />,
}

export const CancelButtonStory: StoryObj = {
  render: () => <CancelButton label="Cancel" />,
}

export const DeleteButtonStory: StoryObj = {
  render: () => <DeleteButton label="Delete" />,
}

export const RevertButtonStory: StoryObj = {
  render: () => <RevertButton />,
}
