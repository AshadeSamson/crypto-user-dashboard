import React from 'react'
import chart from '../images/Pie-Chart.svg'
import Coins from './sub-components/Coins'
import WalletActions from './sub-components/WalletActions'

function Balance() {



  return (
    <section className='balance'>
      
      <div>
        <h2 className='heading balance-heading'>Balances</h2>
        <div className='main-balance'>
          <div className='balance-chart'>
            <img src={chart} alt="pie-chart of crypto balances" />
            <ul>
              <li><span>Bitcoin - 57.2%</span></li>
              <li><span>Ethereum - 19.01%</span></li>
              <li><span>Solana - 11.37%</span></li>
              <li><span>Tether - 2.41%</span></li>
            </ul>
          </div>
          <div className='balance-body'>
            <h3>Total Balance:</h3>
            <h1>$ 5000.00</h1>
          </div>
        </div>
      </div>

      <hr />
      <Coins />
      <hr />
      <WalletActions />
      <hr />
     
    </section>
  )
}

export default Balance