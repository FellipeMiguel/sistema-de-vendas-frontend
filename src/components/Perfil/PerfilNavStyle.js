import styled from 'styled-components'

const PerfilSidebar = styled.nav `
  height: 100%;
  width: 214px;
  height: 813px;
  width: 214px;
  background: #181C32;
  border-radius: 20px 0px 0px 20px;
  color: #FFFFFF;
  padding: 1rem;

  > .navPerfil {
    height: auto;
    width: auto;
  }

  .navPerfil .row {
    width: 100%;
    height: 50px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navPerfil .row:hover {
    cursor: pointer;
    color: #FCBB19;

  }

  #active {
    color: #FCBB19;
  }

  .row #icon {
    flex: 30%;
    display: grid;
    place-items: center;
  }

  .row #title {
    flex: 70%;
  }
`
export default PerfilSidebar