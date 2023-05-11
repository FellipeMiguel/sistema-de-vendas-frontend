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

  .graficoItem button {
    width: 570px;
    height: 32px;
    background: #18243A;
    border-radius: 0px 0px 20px 20px;
    color: #FFFFFF;
    border: none;
    margin-top: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .cardNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem 1rem;
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

  .cardBody{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  .cardNumber {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    width: 100%;
  }

  .cardNumber h2{
    font-weight: 400;
    font-size: 11px;
    color: #3F4254;
  }

  .cardNumber h3 {
    font-weight: 500;
    font-size: 55.3143px;
    line-height: 55px;
    color: #181C32;
  }

  .cardDados{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 14px;
  }

  .cardDados p {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #999FA2;
  }

  .cardDados div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    width: 44px;
    height: 17px;
    background: #CFE3D4;
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    color: #181C32;
  }

  .cardDados div img:hover {
    cursor: pointer;
  }

  .card01{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
  }

  .card01Container {
    width: 296px;
    height: 81px;
  }

  .card01ContainerTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card01ContainerTitle h2 {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #999FA2;
  }

  .card01Item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid rgba(153, 159, 162, 0.5);
    padding: 0.5rem 0 0.5rem 0;
  }

  .card01Item div {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .card01Item div p {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #5E6E82;
  }

  .pieChart {
    flex: 30%;
    display: grid;
    place-items: center;
  }

  .barChart {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-right: 5rem ;
  }

  .graficoItem .btnCard01 {
    margin-top: 3rem;
  }

  .graficoItem .btnCard02 {
    margin-top: 2.6rem;
  }

  .card04 {
    margin: 0 1rem 0.5rem 1rem;
  }

  .card04 h2 {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #999FA2;
  }

  .card04Title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .card04Title div {
    display: flex;
    gap: 77px;
  }

  .card04Data {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card04Cliente {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #5E6E82;
  }

  .card04Valor {
    display: flex;
    align-items: center;
    gap: 60px;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    text-align: right;
    color: #181C32;
  }

  .graficoItem .btnCard04 {
    margin-top: 3.2rem;
  }
`

export default MainDashboard;