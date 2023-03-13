import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { userTransactions } from '../Dummy-Endpoints/user-transactions'

function Transactions() {

  const [ history, setHistory] = useState(userTransactions)

  const deals = history.map( deal => {

    return <>
      <hr />
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
    <section className='transactions'>
      <h2 className='heading transaction-heading'>Transaction History</h2>
      <div className='transaction-history'>
          {deals}
      </div>
    </section>
  )
}

export default Transactions
