import Sidebar from "../Sidebar/Sidebar";
import MainDashboard from "./style";
import DownaloadIcon from "../../assets/dashboard/download.svg";
import FilterIcon from "../../assets/dashboard/filter.svg";
import SetaCima from "../../assets/dashboard/seta-cima.svg";
import SetaDireita from "../../assets/dashboard/seta-direita.svg";
import blueSquare from "../../assets/square/blue.svg";
import yellowSquare from "../../assets/square/yellow.svg";
import greenSquare from "../../assets/square/green.png";
import PieChart from "../../assets/pie-chart.svg";
import barChart from "../../assets/bar-chart.svg";
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
              <div className="card01">
                <div className="card01Container">
                  <div className="card01ContainerTitle">
                    <h2>ITENS</h2>
                    <h2> QT.</h2>
                  </div>
                  <div className="card01Item">
                    <div>
                    <img src={blueSquare} alt=""/>
                    <p>Tucker</p>
                    </div>
                    <p>000</p>
                  </div>

                  <div className="card01Item">
                    <div>
                    <img src={yellowSquare} alt=""/>
                    <p>Americaco</p>
                    </div>
                    <p>000</p>
                  </div>

                  <div className="card01Item">
                    <div>
                    <img src={greenSquare} alt=""/>
                    <p>Bucket</p>
                    </div>
                    <p>000</p>
                  </div>
                </div>
                <div className="pieChart">
                  <img src={PieChart} alt="" />
                </div>
              </div>
              <button className="btnCard01">
                <p>Detalhar Faturamento</p>
                <img src={SetaDireita}  alt=""/>
              </button>
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
              <div className="card01">
                <div className="card01Container">
                  <div className="card01ContainerTitle">
                    <h2>ITENS</h2>
                    <h2> QT.</h2>
                  </div>
                  <div className="card01Item">
                    <div>
                    <img src={blueSquare} alt=""/>
                    <p>Abril</p>
                    </div>
                    <p>00</p>
                  </div>

                  <div className="card01Item">
                    <div>
                    <img src={blueSquare} alt=""/>
                    <p>Março</p>
                    </div>
                    <p>00</p>
                  </div>

                  <div className="card01Item">
                    <div>
                    <img src={blueSquare} alt=""/>
                    <p>Fevereiro</p>
                    </div>
                    <p>00</p>
                  </div>
                </div>
                <div className="barChart">
                  <img src={barChart} alt="" />
                  <img src={barChart} alt="" />
                  <img src={barChart} alt="" />
                  <img src={barChart} alt="" />
                  <img src={barChart} alt="" />
                  <img src={barChart} alt="" />
                </div>
              </div>
              <button className="btnCard02">
                <p>Detalhar Faturamento</p>
                <img src={SetaDireita}  alt=""/>
              </button>
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
              <div className="cardBody">
                <div className="cardNumber">
                  <h2>R$</h2>
                  <h3>0,00</h3>
                </div>
                <div className="cardDados">
                  <div>
                    <img src={SetaCima} alt=""/>
                    <p>0%</p>
                  </div>
                  <p>COMPARADO COM ABRIL DE 20023</p>
                </div>
              </div>
              <button>
                <p>Detalhar Faturamento</p>
                <img src={SetaDireita}  alt=""/>
              </button>
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
              <div className="card04">
                <div className="card04Title">
                  <h2>CLIENTE</h2>
                  <div>
                    <h2>VENDA</h2>
                    <h2>VALOR</h2>
                  </div>
                </div>
                <div className="card04Data">
                  <div className="card04Cliente">
                    <img src={blueSquare} alt="" />
                    <p>Fulano Fula</p>
                  </div>
                  <div className="card04Valor">
                    <p>00/00/0000</p>
                    <p>R$2.000</p>
                  </div>
                </div>
              </div>
              <div className="card04">
                <div className="card04Data">
                  <div className="card04Cliente">
                    <img src={blueSquare} alt="" />
                    <p>Fulano Fula</p>
                  </div>
                  <div className="card04Valor">
                    <p>00/00/0000</p>
                    <p>R$2.000</p>
                  </div>
                </div>
              </div>
              <div className="card04">
                <div className="card04Data">
                  <div className="card04Cliente">
                    <img src={blueSquare} alt="" />
                    <p>Fulano Fula</p>
                  </div>
                  <div className="card04Valor">
                    <p>00/00/0000</p>
                    <p>R$2.000</p>
                  </div>
                </div>
              </div>
              <button className="btnCard04">
                <p>Detalhar Faturamento</p>
                <img src={SetaDireita}  alt=""/>
              </button>
            </div>
          </div>
        </section>
      </MainDashboard>
    </>
  );
}

export default Dashboard;
