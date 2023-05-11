import React from 'react'
import Header from '../components/Header/index';
import { GlobalStyle } from '../styles/global';
import CastrarVendas from '../components/CasdastrarVendas';

function CastrarVendasPage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CastrarVendas />
    </>
  )
}

export default CastrarVendasPage
