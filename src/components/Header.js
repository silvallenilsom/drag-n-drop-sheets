import logo from "../logoLenilsom.png"
import "../App.css";

function Header() {
  return (
    <div className="header-bar">
      <div>
        <img className="logo" src={logo} alt="Logo" width={ 120 }/>
      </div>
      <div className="options-menu">
        <span>Quem Somos</span>
        <span>Soluções</span>
        <span>Conteúdo</span>
        <span>Blog</span>
        <span>Login</span>
        <button className="menu-button">Conheça agora</button>
      </div>
    </div>
  )
}

export default Header;
