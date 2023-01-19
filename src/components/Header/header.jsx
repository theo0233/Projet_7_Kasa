import { NavLink } from "react-router-dom";
import KasaLogo from "../../assets/LOGO.svg";
import "../Header/header.scss";

function Header() {
  return (
    <div className="wrapHead">
      <div className="HeaderContainer">
        <div className="Logo">
          <img src={KasaLogo} alt="Logo de Kasa" />
        </div>
        <div className="NavContainer">
          <NavLink className="link" to="/">
            Accueil
          </NavLink>
          <NavLink className="link" to="/a_propos">
            A Propos
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
