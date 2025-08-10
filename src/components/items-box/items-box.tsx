import type React from 'react'
import { Block, Container } from './styles'
import { Typography } from '@mui/material'
import type { ItemsBoxProps } from './types'

const test = [
  { name: 'Item 1', id: 8, selected: true },
  { name: 'Item 2', id: 9, selected: false },
  { name: 'Item 3', id: 10, selected: false },
  { name: 'Item 4', id: 11, selected: true },
]

const ItemsBox: React.FC<ItemsBoxProps> = ({
  items = test,
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
