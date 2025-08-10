import AddButton from '../../atoms/buttons/add-button'
import DeleteButton from '../../atoms/buttons/delete-button'
import RevertButton from '../../atoms/buttons/revert-button'
import ItemsBox from '../../molecules/items-box'
import { Card } from './styles'
import type { ItemsCardProps } from './types'

const ItemsCard: React.FC<ItemsCardProps> = ({
  openDialog,
  items = [],
  toggleItem,
  deleteItem,
  deleteSelectedItems,
  revertLastAction,
}) => (
  <Card
    centeredText
    title="This is a technical proof."
    description="Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis"
    leftButtons={
      <>
        <RevertButton onClick={revertLastAction} />
        <DeleteButton onClick={deleteSelectedItems} />
      </>
    }
    rightButtons={<AddButton variant="outlined" onClick={openDialog} />}
  >
    <ItemsBox items={items} onClick={toggleItem} onDoubleClick={deleteItem} />
  </Card>
)

export default ItemsCard
