import React from 'react'
import ListaItems from './styleItems'
import lapis from "../../assets/lapis.png"

function CasdastrarVendasItems() {
  return (
    <ListaItems>
      <div className='items'>
        <div className='itemsID'>
          <p>000000</p>
          <p>100</p>
        </div>
        <div className='name'>
          <p>Carine Santos 2689 +30 - CASA CARMEN</p>
        </div>
        <div className='itemsData'>
          <p>00/00/00</p>
          <p>&#40;80&#41; 00000-0000</p>
          <p>R$80</p>
          <p>R$20.000</p>
        </div>
      </div>
      <div className='btn'>
        <button>
          <img src={lapis} alt="botão de editar" />
        </button>
      </div>
    </ListaItems>
  )
}

export default CasdastrarVendasItems
