import { Link } from "react-router-dom";
import styled from "styled-components";
import KasaLogo from "../../assets/LOGO.svg";

const HeaderContainer = styled.div`
  position: absolute;
  width: 1240px;
  height: 68px;
  left: 100px;
  top: 40px;
`;

const Logo = styled.img`
  position: absolute;
  left: 0%;
  right: 83.04%;
  top: 0%;
  bottom: 0%;
  colors: #ff6060;
`;

const NavContainer = styled.nav`
  position: absolute;
  left: 75.08%;
  right: 0%;
  top: 25%;
  bottom: 25%;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={KasaLogo} />
      <NavContainer>
        <Link to="/">Accueil</Link>
        <Link to="/a_propos">A Propos</Link>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
