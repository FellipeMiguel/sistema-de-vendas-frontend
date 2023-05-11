import React from 'react'
import PerfilBodyStyle from './PerfilBodyStyle'
import ProfileImageUpload from './FotoPerfil'
import PerfilFrom from './PerfilFrom'

function PerfilBody() {
  return (
    <PerfilBodyStyle>
      <div>
        <h1>Editar Perfil</h1>
        <ProfileImageUpload />
      </div>

      <div className="form">
        <PerfilFrom />
      </div>
    </PerfilBodyStyle>
  )
}

export default PerfilBody
