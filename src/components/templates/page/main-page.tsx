import React, { useState } from 'react'
import { useItemsContext } from '../../../shared/items-provider/context'
import Layout from '../../atoms/layout'
import AddItemDialog from '../../organisms/add-item-dialog'
import ItemsCard from '../../organisms/items-card'

const MainPage: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const {
    items,
    toggleItem,
    deleteItem,
    deleteSelectedItems,
    revertLastAction,
  } = useItemsContext()

  return (
    <Layout>
      <ItemsCard
        toggleItem={toggleItem}
        items={items}
        openDialog={() => setOpenDialog(true)}
        deleteItem={deleteItem}
        deleteSelectedItems={deleteSelectedItems}
        revertLastAction={revertLastAction}
      />
      <AddItemDialog
        open={openDialog}
        closeDialog={() => setOpenDialog(false)}
      />
    </Layout>
  )
}

export default MainPage
