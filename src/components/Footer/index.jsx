import "./Footer.scss";
import FooterKasaLogo from "./FooterLogoKasa.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={FooterKasaLogo} alt="LOGO" />
      <span className="footer__text">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}
export default Footer;
