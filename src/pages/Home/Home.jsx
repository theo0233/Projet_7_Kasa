import homeImg from "../../assets/IMG_home.png";
import "./Home.css";
import Hosts from "../../assets/data/logements.json";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div>
      <Banner image={homeImg} text="Chez vous, partout et ailleurs" />
      <div className="wrap_allLocation">
        <div className="allLocation">
          {Hosts.map((host) => (
            <Link
              to={`/location/${host.id}`}
              className="host__item"
              key={host.id}
            >
              <img
                src={host.pictures[0]}
                alt="logement"
                className="host__img"
              />
              <div className="host__title">
                <span>{host.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
