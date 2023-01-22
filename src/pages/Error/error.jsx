import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="page_404">
      <h1 className="title_404">404</h1>
      <span className="text_404">
        <nbsp> Oups! La page que </nbsp> vous demandez n'existe pas.
      </span>
      <Link to="/" className="link_404">
        Retournez sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
