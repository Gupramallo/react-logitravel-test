import type { Meta, StoryObj } from '@storybook/react-vite'
import Layout from './layout'

const meta: Meta = {
  title: 'Atoms/Layout',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const ButtonStory: StoryObj = {
  render: () => <Layout>This is the Layout of the page</Layout>,
}
