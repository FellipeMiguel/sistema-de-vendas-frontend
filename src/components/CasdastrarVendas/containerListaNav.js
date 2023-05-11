import React, { useState } from 'react'
import ListaNav from './styleNav'
import modal from "../../assets/close.png"
import refesh from "../../assets/refresh.png"
import search from "../../assets/search.png"
import Modal from './Modal'

function ContainerListaNav() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <ListaNav>
        <div className="barraIcon">
          <button className="bntIcon">
            <img src={modal}  alt='' onClick={() => setOpenModal(true)}/>
          </button>
          <button className="bntIcon">
            <img src={refesh}  alt='' />
          </button>
        </div>
        <div className="barraPesquisa">
          <input type="text" className="txtBusca" placeholder="Pesquisar ID"/>
          <button type='submit'><img src={search} className="bntIcon" alt="Buscar"/></button>
        </div>
      </ListaNav>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
    </>
  )
}

export default ContainerListaNav
