import HeaderContainer from "./style"
import imgLogo from "../../assets/logo.svg"
import DownloadMenu from "../../assets/download-menu.svg"
import ExitMenu from "../../assets/exit-menu.svg"

function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={imgLogo} alt="Logo SeuBoné" />
        <div className="iconsMenu">
          <img src={DownloadMenu} alt="Salvar relatório geral"/>
          <img src={ExitMenu} alt="Sair do sistema"/>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header;