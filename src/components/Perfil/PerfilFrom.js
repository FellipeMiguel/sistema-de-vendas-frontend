import React from 'react'
import ok from '../../assets/perfil/ok.png'

function PerfilFrom() {
  return (
    <form>
          <div>
            <label htmlFor='nome'>Nome</label>
            <input type="text" name="nome" placeholder='Digite seu nome'required/>
          </div>
          <div>
            <label htmlFor='sobrenome'>Sobrenome</label>
            <input type="text" name="sobrenome" placeholder='Digite seu sobrenome' required/>
          </div>
          <div>
            <label htmlFor='email'>E-mail</label>
            <input type="text" name="" placeholder='E-mail da empresa' required/>
          </div>
          <div>
            <label htmlFor='tel'>Número de telefone</label>
            <input type="text" name="tel" placeholder='(00) 0 0000-0000'required/>
          </div>
          <div>
            <label htmlFor='estado'>Estado</label>
            <select id="estado" name="estado">
              <option>Selecione o seu Estado</option>
              <option value="sp">São Paulo</option>
              <option value="rn">Rio Grande do Note</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="ma">Maranhão</option>
            </select>
          </div>
          <div>
            <label htmlFor='cidade'>Cidade</label>
            <select id="cidade" name="cidade">
              <option>Selecione a sua cidade</option>
              <option value="sp">São Paulo</option>
              <option value="rn">Natal</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="ma">São Luiz</option>
            </select>
          </div>
          <div>
            <label htmlFor='senha'>Atualizar senha</label>
            <input type="password" name="senha" required/>
          </div>

          <button type="submit">
            <p>Atualizar Perfil</p>
            <img src={ok} alt='' />
          </button>
        </form>
  )
}

export default PerfilFrom
