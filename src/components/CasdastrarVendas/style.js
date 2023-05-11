import  styled  from "styled-components";

const CadastrarVendasContainer = styled.div`
  flex: 70%;
  display: grid;
  place-items: center;

  >  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #181C32;
    margin-bottom: 29px;
  }

  div {
    display: flex;
    gap: 13px;
  }

  .listaItems {
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
    
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 99999px;
      border-radius: 9999px;
      background: #797B86; 
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
`

export default CadastrarVendasContainer