import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Dropdown from "../../components/Dropdown/dropdown";
import Slider from "../../components/Slider/Slider";
import Rate from "../../components/Rate/Rate";
import Tags from "../../components/Tags/tags";
import Host from "../../components/Host/Host";
import { Redirect } from "react-router";
import "../Fiche-Logement/FicheLogement.css";

function FicheLogement() {
  const pickedRent = useParams();
  const dataRent = data;
  const rent = dataRent.find((item) => item.id === pickedRent.id);

  if (rent === undefined) {
    return <Redirect to="/not_found" />;
  }

  const stuff = rent.equipments.map((e, index) => (
    <li key={index} className="">
      {e}
    </li>
  ));

  return (
    <div className="ficheLogement">
      <div className="containerSlider">
        <Slider slides={rent.pictures} />
      </div>
      <div className="wrap">
        <div className="containerRent">
          <div className="rent_title">
            <div>{rent.title}</div>
            <p>{rent.location}</p>
          </div>
          <div className="tagContainer">
            {rent.tags.map((tag, index) => (
              <Tags key={tag} tag={tag} />
            ))}
          </div>
        </div>

        <div className="host-wrap">
          <Host name={rent.host.name} picture={rent.host.picture} />
          <div className="rating">
            <Rate rate={rent.rating} />
          </div>
        </div>
      </div>
      <div className="rental_detail">
        <div className="wrap_dd">
          <Dropdown title="Description" text={rent.description}></Dropdown>
        </div>
        <div className="wrap_dd">
          <Dropdown title="Équipements" text={stuff}></Dropdown>
        </div>
      </div>
    </div>
  );
}
export default FicheLogement;
