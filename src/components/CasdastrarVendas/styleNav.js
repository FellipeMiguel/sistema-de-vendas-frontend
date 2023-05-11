import  styled  from "styled-components";

const ListaNav = styled.div `
  width: 100%;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  > .barraIcon {
    display: flex;
    align-items: center;
    padding: 35px;
  }

  .bntIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 6px;
    width: 40px;
    height: 30px;
    background: #18243A;
    border-radius: 3.75px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    border: none;
  }

  .bntIcon img:hover {
    cursor: pointer;
  }
  
  .barraPesquisa {
    margin-right: 24px;
    position: relative;
  }

  .barraPesquisa input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10.5px;
    width: 363.12px;
    height: 42px;
    background: #FFFFFF;
    border: 0.65625px solid #C1C2C2;
    border-radius: 7px;
    z-index: 1;
  }

  .barraPesquisa  button {
    border: none;
    z-index: 2;
    position: relative;
    width: 25px;
    height: 26px;
    left: -60px;
    top: 6px;
  }
`

export default ListaNav