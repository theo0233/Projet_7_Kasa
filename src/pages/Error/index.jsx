import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas</h3>
      <nav>
        <Link to="/">Retournez sur la page d'accueil</Link>
      </nav>
    </div>
  );
}

export default Error;
