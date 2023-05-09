import  styled  from "styled-components";

const MainDashboard = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    flex: 70%;
    display: grid;
    place-items: center;
  }

  .evolucaoVendas {
    width: 1172px;
    height: 345px;
    background: #EEEEEE;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    margin-bottom: 24px;
  }

  .graficos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 24px;
  }

  .graficoItem{
    width: 570px;
    height: 236px;
    background: #EEEEEE;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
  }

  .cardNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .cardTitle h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #181C32;
  }

  .cardTitle p {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #999FA2;
  }

  .cardIcons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .cardIcons p {
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    color: #797B86;
  }

  .cardIcons img:hover {
    cursor: pointer;
  }

  .graficoVendas {
    height: 280px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    padding: 0.5rem;
  }

  .vendasDescricao {
    width: 500px;
    height: 202px;
    background: #D9D9D9;
    padding: 1rem;
  }

  .vendasDescricao h2 {
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    color: #797B86;
  }

  .vendasDescricao h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 35px;
    color: #181C32;
  }
  
  .vendasDescricao p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #797B86;
  }
`

export default MainDashboard;