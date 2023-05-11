import React from 'react'
import ListaTitle from './styleTitle'

function CadastrarVendasListaTitle() {
  return (
    <ListaTitle>
      <div className='itemsID'>
        <p>id</p>
        <p>Quantidade</p>
      </div>
      <div className='name'>
        <p>Nome</p>
      </div>
      <div className='itemsData'>
        <p>Data</p>
        <p>Número</p>
        <p>Frete</p>
        <p>Valor</p>
      </div>
    </ListaTitle>
  )
}

export default CadastrarVendasListaTitle
