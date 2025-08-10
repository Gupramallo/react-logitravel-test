import AddButton from '../atoms/buttons/add-button'
import DeleteButton from '../atoms/buttons/delete-button'
import RevertButton from '../atoms/buttons/revert-button'
import CardWithActionButtons from '../card-with-action-buttons'
import ItemsBox from '../items-box'
import type { ItemsCardProps } from './types'

const ItemsCard: React.FC<ItemsCardProps> = ({
  openDialog,
  items = [],
  toggleItem,
  deleteItem,
  deleteSelectedItems,
  revertLastAction,
}) => (
  <CardWithActionButtons
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
  </CardWithActionButtons>
)

export default ItemsCard
