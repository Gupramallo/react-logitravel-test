import React, { useState } from 'react'

import Layout from '../layout'
import ItemsCard from '../items-card'
import AddItemDialog from '../add-item-dialog'
import { useItemsContext } from '../../shared/items-provider/context'

const MainPage: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const { items } = useItemsContext()

  return (
    <Layout>
      <ItemsCard items={items} openDialog={() => setOpenDialog(true)} />
      <AddItemDialog
        open={openDialog}
        onClick={() => {}}
        closeDialog={() => setOpenDialog(false)}
      />
    </Layout>
  )
}

export default MainPage
