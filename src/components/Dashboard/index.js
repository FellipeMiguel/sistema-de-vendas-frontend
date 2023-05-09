import Sidebar from "../Sidebar/Sidebar";
import MainDashboard from "./style";
import DownaloadIcon from "../../assets/dashboard/download.svg";
import FilterIcon from "../../assets/dashboard/filter.svg";
import LineChart from "../Charts/LineChart";
import { useState } from "react";
import { UserData } from "../../ChartData/Data"; 

function Dashboard() {

  const [userData] = useState ({
    labels: UserData.map((data)=> data.day),
    datasets: [{
      data: UserData.map((data)=> data.userGain),
      label: 'Vendas no mês',
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
    }]
  })

  return (
    <>
      <MainDashboard>
        <Sidebar />
        <section>
          <div className="evolucaoVendas">
            <div className="cardNav">
              <div className="cardTitle">
                <h2>Evolução de Venda</h2>
                <p>QUANTIDADE TODAL - 00/00/0000</p>
              </div>
              <div className="cardIcons">
                <p>Março de 2023</p>
                <img src={DownaloadIcon} alt="" />
                <img src={FilterIcon} alt="" />
              </div>
            </div>
            <div className="graficoVendas">
              <LineChart className="lineChart" chartData={userData}/>
              <div className="vendasDescricao">
                <h2>Vendido no mês</h2>
                <h3>R$0,00</h3>
                <p>Hoje R$0,00</p>
              </div>
            </div>
          </div>
          <div className="graficos">
            <div className="graficoItem">
              <div className="cardNav">
                <div className="cardTitle">
                  <h2>Número de Produtos Vendidos</h2>
                  <p>QUANTIDADE TODAL - 00/00/0000</p>
                </div>
                <div className="cardIcons">
                  <img src={DownaloadIcon} alt="" />
                  <img src={FilterIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="graficoItem">
              <div className="cardNav">
                <div className="cardTitle">
                  <h2>Número de clinetes</h2>
                  <p>QUANTIDADE TODAL - MARÇO</p>
                </div>
                <div className="cardIcons">
                  <img src={DownaloadIcon} alt="" />
                  <img src={FilterIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="graficoItem">
              <div className="cardNav">
                <div className="cardTitle">
                  <h2>Pedidos compensados</h2>
                  <p>Março</p>
                </div>
                <div className="cardIcons">
                  <img src={DownaloadIcon} alt="" />
                  <img src={FilterIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="graficoItem">
              <div className="cardNav">
                <div className="cardTitle">
                  <h2>Pedidos a compensar</h2>
                  <p>Clientes com pagamentos pendente</p>
                </div>
                <div className="cardIcons">
                  <img src={DownaloadIcon} alt="" />
                  <img src={FilterIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainDashboard>
    </>
  );
}

export default Dashboard;
