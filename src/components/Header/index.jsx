import { Link } from "react-router-dom";
import styled from "styled-components";
import KasaLogo from "../../assets/LOGO.svg";

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 68px;
  left: 100px;
  top: 40px;
  margin-bot: 160px;
`;

const Logo = styled.img`
  position: absolute;
  left: 0%;
  right: 83.04%;
  top: 0%;
  bottom: 0%;
  color: #ff6060;
`;

const NavContainer = styled.nav`
  position: absolute;
  left: 75.08%;
  right: 0%;
  top: 25%;
  bottom: 25%;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #ff6060;
  margin-right: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={KasaLogo} />
      <NavContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a_propos">A Propos</StyledLink>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
