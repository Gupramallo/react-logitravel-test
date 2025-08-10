import type React from 'react'
import { Typography } from '@mui/material'
import { Block, Container } from './styles'
import type { ItemsBoxProps } from './types'

const ItemsBox: React.FC<ItemsBoxProps> = ({
  items = [],
  onClick,
  onDoubleClick,
}) => (
  <Container>
    {items.map(({ id, selected, name }) => (
      <Block
        key={id}
        selected={selected}
        onClick={() => onClick(id)}
        onDoubleClick={() => onDoubleClick(id)}
      >
        <Typography variant="body1">{name}</Typography>
      </Block>
    ))}
  </Container>
)

export default ItemsBox
