import React from 'react'
import Card from '../../atoms/card'
import type { CardWithActionButtonProps } from './types'
import {
  ActionButtonsContainer,
  LeftActionButtons,
  RightActionButtons,
  Text,
  TextContainer,
} from './styles'

const CardWithActionButtons: React.FC<CardWithActionButtonProps> = ({
  title,
  children,
  description,
  centeredText = false,
  leftButtons,
  rightButtons,
  className,
}) => (
  <Card className={className}>
    <TextContainer>
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
    </TextContainer>
    {children}
    <ActionButtonsContainer>
      <LeftActionButtons>{leftButtons}</LeftActionButtons>
      <RightActionButtons>{rightButtons}</RightActionButtons>
    </ActionButtonsContainer>
  </Card>
)

export default CardWithActionButtons
