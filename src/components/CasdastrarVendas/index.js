import React from 'react'
import MainDashboard from '../Dashboard/style'
import Sidebar from '../Sidebar/Sidebar'
import CadastrarVendasContainer from './style'
import ContainerFiltro from './containerFiltro'
import remove from "../../assets/remove.png"
import close from "../../assets/close.png"
import ContainerLista from './containerLista'
import CadastrarVendasForm from './cadastrarVendasForm'
import ContainerListaNav from './containerListaNav'

import CadastrarVendasListaTitle from './cadastrarVendasListaTitle'
import CasdastrarVendasItems from './CasdastrarVendasItems'

function CastrarVendas() {
  return (
    <MainDashboard>
      <Sidebar />
      <CadastrarVendasContainer>
        <h2>Você já fez R$00.000,00, está faltando apenas R$00.000,00 para pontuar a comissão.</h2>
        <div>
          <ContainerFiltro>
            <div>
              <div className='contentTitle'>
                <h3>Data</h3>
                <img src={remove} alt=''/>
              </div>
              <div className='content'>
                <CadastrarVendasForm />
              </div>
            </div>
            <button>
              <img src={close} alt='' />
              <p>Selecione Data</p>
            </button>
          </ContainerFiltro>

          <ContainerLista>
            <ContainerListaNav />
            <CadastrarVendasListaTitle />
            <div className='listaItems'>
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
              <CasdastrarVendasItems />
            </div>
          </ContainerLista>
        </div>
      </CadastrarVendasContainer>
    </MainDashboard>
  )
}

export default CastrarVendas
