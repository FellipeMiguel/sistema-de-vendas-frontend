import React from 'react';
import { GlobalStyle } from '../styles/global';
import Header from '../components/Header/index';
import Perfil from '../components/Perfil';


function PerfilPage() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Perfil />
    </div>
  );
}

export default PerfilPage;
