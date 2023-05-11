import React from 'react'

function CadastrarVendasForm() {
  return (
    <form action='' method='get'>
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor ="today" >Hoje</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >Ontem</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >Últimos 15 dias</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >Últimos 30 dias</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >últimos 2 meses</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >Últimos 6 meses</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >Último ano</label><br />
    <input type='checkbox' name='today' value="Hoje" />
    <label htmlFor="today" >Últimos 2 anos</label><br />
  </form>
  )
}

export default CadastrarVendasForm
