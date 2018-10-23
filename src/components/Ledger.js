import React from 'react'
import styled from 'styled-components'
import Transactions from './Transactions'

const Container = styled.div`
  flex: 2
`

const Ledger = () => (
  <div>
    <Transactions />
  </div>
)

export default Ledger
