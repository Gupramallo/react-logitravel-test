import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '../../atoms/button'
import CardWithActionButtons from './card-with-action-buttons'
import type { CardWithActionButtonProps } from './types'

const meta: Meta = {
  title: 'Molecules/Card With Action Buttons',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    centeredText: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Card title',
    description: 'Card description',
    centeredText: false,
    variant: 'contained',
    showLeftButtons: true,
    showRightButtons: true,
  },
}

export default meta

export const CardWithActionButtonsStory: StoryObj<
  CardWithActionButtonProps & {
    showLeftButtons?: boolean
    showRightButtons?: boolean
  }
> = {
  render: (args) => {
    const leftButtons = args.showLeftButtons ? (
      <Button color="primary" variant="contained" label="Left Action " />
    ) : null

    const rightButtons = args.showRightButtons ? (
      <Button color="primary" variant="contained" label="Right Action 2" />
    ) : null

    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <CardWithActionButtons
          {...args}
          leftButtons={leftButtons}
          rightButtons={rightButtons}
        >
          <Box
            sx={{
              width: '600px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Content
          </Box>
        </CardWithActionButtons>
      </div>
    )
  },
}
