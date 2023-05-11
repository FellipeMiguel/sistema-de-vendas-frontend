import React from 'react'

function FormModal() {
  return (
    <form className='form' method="get">
                <div>
                  <label htmlFor='nomeEmpresa'>Nome da empresa</label>
                  <input type='text' name='nomeEmpresa' placeholder='Digite o nome da empresa' />
                </div>
                <div>
                  <label htmlFor='cnpj'>Nome do cliente</label>
                  <input type='text' name='cnpj' placeholder='Digite o nome do cliente' />
                </div>
                <div>
                  <label htmlFor='nomeCliente'>CNPJ</label>
                  <input type='text' name='nomeCliente' placeholder='00.000-000/0000-00' />
                </div>
                <div>
                  <label htmlFor='clienteTelefone'>Telefone do cliente</label>
                  <input type='text' name='clienteTelefone' placeholder='(00) 0000-0000' />
                </div>
                <div>
                  <label htmlFor='valorTotal'>Valor Total</label>
                  <input type='text' name='valorTotal' placeholder='00000' />
                </div>
                <div>
                  <label htmlFor='valorFrete'>Valor Total</label>
                  <input type='text' name='valorFrete' placeholder='00000' />
                </div>
                <div>
                  <label htmlFor='produto'>Produto</label>
                  <input type='text' name='produto' placeholder='Digite o nome do produto' />
                </div>
                <div>
                  <label htmlFor='qtd'>Quantidade</label>
                  <input type='text' name='qtd' placeholder='00000' />
                </div>
              </form>
  )
}

export default FormModal
