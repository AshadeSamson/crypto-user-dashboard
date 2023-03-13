import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faWallet, faExchange} from '@fortawesome/free-solid-svg-icons'

function WalletActions() {

    const transactTypes = [{
        type: 'Send',
        icon: faArrowUp,
      },
      {
        type: 'Receive',
        icon: faArrowDown,
      },
      {
        type: 'Buy',
        icon: faWallet,
      },
      {
        type: 'Exchange',
        icon: faExchange,
      },]
    
      const transactItems =  transactTypes.map( type => {
        return <div className='wallet-action-item'>
          <FontAwesomeIcon  icon={type.icon} size='2xl'/>
          <h3>{type.type}</h3>
        </div>
      })


  return (
    <div className='wallet-actions'>
        { transactItems }
    </div>
  )
}

export default WalletActions