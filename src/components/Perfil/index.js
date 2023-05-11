import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import PerfilContainer from './PerfilContainer';
import MainPerfil from './style';

function Perfil() {
  return (
    <MainPerfil>
      <Sidebar />
      <PerfilContainer />
    </MainPerfil>
  )
}

export default Perfil
