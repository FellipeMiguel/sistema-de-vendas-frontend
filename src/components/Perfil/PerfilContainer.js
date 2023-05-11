import React from 'react'
import SectionPerfil from './PerfilContainerStyle'
import PerfilNav from './PerfilNav'
import PerfilBody from './PerfilBody'

function PerfilContainer() {
  return (
    <SectionPerfil>
      <div className='container'>
        <div className='nav'>
          <PerfilNav />
        </div>
        <div className='body'>
          <PerfilBody />
        </div>
      </div>
      
    </SectionPerfil>
  )
}

export default PerfilContainer
