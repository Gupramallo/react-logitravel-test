import type { Meta, StoryObj } from '@storybook/react-vite'
import { mockItems } from '../../../shared/items-provider/utils/__mocks__/item-provider-utils-mocks'
import Layout from '../../atoms/layout'
import ItemsCard from './items-card'

const meta: Meta = {
  title: 'Organisms/Items Card',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const ItemsCardStory: StoryObj<{
  numberOfItems: number
  open: boolean
}> = {
  render: () => (
    <Layout>
      <ItemsCard
        items={mockItems}
        toggleItem={() => {}}
        deleteItem={() => {}}
        deleteSelectedItems={() => {}}
        revertLastAction={() => {}}
        openDialog={() => {}}
      />
    </Layout>
  ),
}
