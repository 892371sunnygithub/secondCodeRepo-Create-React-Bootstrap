import React from 'react'
import Introduction from '../../components/introduction/Introduction'
import Installation from '../../components/installation/Installation'
import ImportantCom from '../../components/importentCom/ImportantCom'
import GlobalBrowser from '../../components/globalBrowse/GlobalBrowser'

const GetStarted = () => {
  return (
    <div className='p-5'>
      <Introduction />
      <Installation />
      <ImportantCom />
      <GlobalBrowser />
    </div>
  )
}

export default GetStarted