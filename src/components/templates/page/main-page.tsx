import React, { useState } from 'react'

import Layout from '../../atoms/layout'
import ItemsCard from '../../organisms/items-card'
import { useItemsContext } from '../../../shared/items-provider/context'
import AddItemDialog from '../../organisms/add-item-dialog'

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
        onClick={() => {}}
        closeDialog={() => setOpenDialog(false)}
      />
    </Layout>
  )
}

export default MainPage
