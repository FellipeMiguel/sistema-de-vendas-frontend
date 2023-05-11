import React from 'react'
import ModalStyle from './modalStyle'
import FormModal from './formModal'

function Modal({isOpen, setModalOpen}) {

  if(isOpen) {
    return (
      <ModalStyle>
        <div className='modal'>
          <div>
            <h2>Cadastrar Venda</h2>
          </div>
            <div className='modalBody'>
              <FormModal />
              <div className='descricaoTitle'>
                <div className='descricaoEsquerda'>
                  <h3>Código do Orçamento</h3>
                  <h3>Descrição do produto</h3>
                </div>
                <div className='descricaoDireita'>
                  <h3>Quantidade</h3>
                  <h3>Valor unitário</h3>
                  <h3>Valor total</h3>
                </div>
              </div>
              <div className='descricaoTitle margin'>
                <div className='descricaoEsquerda02'>
                  <h4>AA.AA.AA.AA</h4>
                  <h4 className='h4Descricao'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </h4>
                </div>
                <div className='descricaoDireita02'>
                  <h4>00</h4>
                  <h4>00</h4>
                  <h4>0</h4>
                </div>
              </div>
            </div>
            <div className='modalFooter'>
              <div className='modalBtns'>
                <button className='btnCancel' onClick={setModalOpen}>Cancelar</button>
                <button type="submit" className='btnAdd'>Adicionar</button>
              </div>
            </div>
        </div>
      </ModalStyle>
    )
  }

  return null
}

export default Modal
