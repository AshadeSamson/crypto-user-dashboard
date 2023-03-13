import React, { useState } from 'react'
import { settings } from '../Dummy-Endpoints/Settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Settings() {

  const [settingItems, setSettingItems] = useState(settings)


  const settingElements = settingItems.map( item => {
    return <>
    <hr />
    <div className='setting' key={item.id}>
        <FontAwesomeIcon icon={item.icon} size='2xl'/>
        <h2>{item.type}</h2>
    </div>
</>
  })

  return (
    <section className='settings'>
      <h2 className='heading settings-heading'>Settings</h2>
      <div className='settings-list'>
          {settingElements}
      </div>
    </section>
  )
}

export default Settings