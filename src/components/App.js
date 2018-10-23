import React from 'react'
import Ledger from './Ledger'
import WishList from './WishList'
import LedgerForm from './LedgerForm'
import WishListForm from './WishListForm'
import { Flex } from './Shared'


const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const App = () => (
  <div>
    <Flex alignItems="stretch">
      <LedgerFrom />
      <WishListForm />
    </Flex>
    <Flex justifyContent="space-around">
      <Ledger />
      <WishList />
    </Flex>
  </div>
)

export default App