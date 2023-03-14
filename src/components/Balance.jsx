import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import chart from '../images/Pie-Chart.svg'
import Coins from './sub-components/Coins'
import WalletActions from './sub-components/WalletActions'
import { userTransactions } from '../Dummy-Endpoints/user-transactions'

function Balance() {

  const [ history, setHistory] = useState(userTransactions)

  const deals = history.filter( deal => deal.id <= 5)

  const dealsHistory = deals.map( deal => {
    return <>
      <div className='transaction' key={deal.id}>
            <div className='transaction-item-1'>
                {deal.type === 'Buy' ? 
                  <FontAwesomeIcon icon={faArrowAltCircleUp} className='green'/> :
                  <FontAwesomeIcon icon={faArrowAltCircleDown} className='red'/>}
                <div>
                  <h3 className='deal-header'>{deal.type}</h3>
                  <p>{deal.date}</p>
                </div>
            </div>
            <div className='transaction-item-2'>
              <h3 className='deal-header'>{deal.value} {deal.coin}</h3>
              <p>{deal.USDvalue} USD</p>
            </div>
      </div>
    </>
})


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
      <div className='transaction-history short'>
        <div className='transaction-list'>
          <h1 className='heading'>Last five (5) transactions</h1>
          <Link to='transactions'>View all</Link>
        </div>
        <div>
          {dealsHistory}
        </div>
      </div>
     
    </section>
  )
}

export default Balance