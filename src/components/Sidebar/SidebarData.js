import React from 'react'
import DashboardImg from "../../assets/sidebar/dashboard.png"
import VendaCadastroImg from "../../assets/sidebar/vendas-cadastro.png"
import PerfilImg from "../../assets/sidebar/perfil.png"
import ComissaoImg from "../../assets/sidebar/comissao.png"

const  SidebarData =  [
  {
    id:1,
    title:"Dashboard",
    icon: <img src={DashboardImg} alt=''/>,
    link: "/dashboard"
  },
  {
    id:2,
    title:"Cadastrar Venda",
    icon: <img src={VendaCadastroImg} alt=''/>,
    link: "/castrar-venda"
  },
  {
    id:3,
    title:"Perfil",
    icon: <img src={PerfilImg} alt=''/>,
    link: "/perfil"
  },
  {
    id:4,
    title:"Comissão",
    icon: <img src={ComissaoImg} alt=''/>,
    link: "/comissao"
  }
]

export default SidebarData

