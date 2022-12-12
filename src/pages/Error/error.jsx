import { Link } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <div className="page_404">
      <h1 className="title_404">404</h1>
      <span className="text_404">
        Oups! La page que vous demandez n'existe pas
      </span>
      <Link to="/" className="link_404">
        Retournez sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
