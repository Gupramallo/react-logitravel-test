import type { Meta, StoryObj } from '@storybook/react-vite'
import ItemsBox from './items-box'

const meta: Meta = {
  title: 'Molecules/Item Box',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    numberOfItems: {
      control: 'number',
    },
    selected: {
      control: 'boolean',
    },
  },
  args: {
    selected: true,
    numberOfItems: 3,
  },
}

export default meta

export const ItemBoxStory: StoryObj<{
  numberOfItems: number
  selected: boolean
}> = {
  render: ({ numberOfItems, selected }) => {
    const items = Array.from({ length: numberOfItems }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      selected,
    }))

    return (
      <div
        style={{
          gap: '16px',
          width: '600px',
        }}
      >
        <ItemsBox items={items} onClick={() => {}} onDoubleClick={() => {}} />
      </div>
    )
  },
}
