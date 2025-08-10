import type { ButtonProps } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './button'

const meta: Meta = {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'inherit', 'primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
  },
  args: {
    label: 'Click Me',
    color: 'primary',
    variant: 'contained',
  },
}

export default meta

export const ButtonStory: StoryObj<{
  label: string
  color: ButtonProps['color']
  variant: ButtonProps['variant']
}> = {
  render: ({ label, color, variant }) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button color={color} label={label} variant={variant} />
    </div>
  ),
}
