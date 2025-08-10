export type Item = {
  id: number
  name: string
  selected?: boolean
}

export type ItemsBoxProps = {
  items?: Item[]
  onClick: (id: number) => void
  onDoubleClick: (id: number) => void
}
