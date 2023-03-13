import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { currencies } from '../../Dummy-Endpoints/Available-coins'

function Coins() {

    const [coins,setCoins] = useState(currencies)

    const coinItems = coins.map( coin => {
        return <div key={coin.id} className='coin-box'>
            <div className='coin-item-1'>
                <h2 className='sub-coin-item'>{coin.coin}</h2>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className='coin-item-2'>
                <img  className='sub-coin-item' src={coin.iconUrl} alt={`icon of ${coin.coin}`} />
                <span>{coin.change}</span>
            </div>
        </div>
    })

  return (
    <div className='coin-boxes-holder'>
        {coinItems}
    </div>
  )
}

export default Coins