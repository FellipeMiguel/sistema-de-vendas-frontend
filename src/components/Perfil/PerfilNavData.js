import React from 'react'
import edit from "../../assets/perfil/edit.png"
import notifications from "../../assets/perfil/notifications.png"
import lock from "../../assets/perfil/lock.png"
import help from "../../assets/perfil/help.png"

const PerfilNavData =  [
  {
    id:1,
    title:"Editar Perfil",
    icon: <img src={edit} alt=''/>,
    link: "/editarPerfil"
  },
  {
    id:2,
    title:"Notificações",
    icon: <img src={notifications} alt=''/>,
    link: "/notificacoes"
  },
  {
    id:3,
    title:"Segurança",
    icon: <img src={lock} alt=''/>,
    link: "/segurança"
  },
  {
    id:4,
    title:"Ajuda",
    icon: <img src={help} alt=''/>,
    link: "/ajuda"
  }
]

export default PerfilNavData
