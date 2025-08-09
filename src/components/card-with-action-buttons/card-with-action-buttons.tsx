import React from 'react'
import Card from '../atoms/card'
import type { CardWithActionButtonProps } from './types'
import {
  ActionButtonsContainer,
  LeftActionButtons,
  RightActionButtons,
  Text,
} from './styles'

const CardWithActionButtons: React.FC<CardWithActionButtonProps> = ({
  title,
  children,
  description,
  centeredText = false,
  leftButtons,
  rightButtons,
}) => (
  <Card>
    {title && (
      <Text centered={centeredText} variant="h3">
        {title}
      </Text>
    )}
    {description && (
      <Text centered={centeredText} variant="body1">
        {description}
      </Text>
    )}
    {children}
    <ActionButtonsContainer>
      <LeftActionButtons>{leftButtons}</LeftActionButtons>
      <RightActionButtons>{rightButtons}</RightActionButtons>
    </ActionButtonsContainer>
  </Card>
)

export default CardWithActionButtons
