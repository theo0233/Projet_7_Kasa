import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Dropdown from "../../components/Dropdown/dropdown";
import Slider from "../../components/Slider/Slider";
import Rate from "../../components/Rate/Rate";
import Tags from "../../components/Tags/tags";
import Host from "../../components/Host/Host";
import { Redirect } from "react-router";

const containerSlider = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
  marginTop: "150px",
};
const rental_detail = {
  display: "flex",
};
const tagContainer = {
  position: "absolute",
  fontSize: "20px",
  zIndex: 1,
  display: "flex",
};

function FicheLogement() {
  const pickedRent = useParams();
  const dataLocation = data;
  const rent = dataLocation.find((item) => item.id === pickedRent.id);

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
      <div style={containerSlider}>
        <Slider slides={rent.pictures} />
      </div>
      <div className="rent_title">
        <h2>{rent.title}</h2>
        <p>{rent.location}</p>
      </div>
      <Host name={rent.host.name} picture={rent.host.picture} />
      <div style={tagContainer}>
        {rent.tags.map((tag, index) => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
      <Rate rate={rent.rating} />
      <div style={rental_detail}>
        <Dropdown title="Description" text={rent.description}></Dropdown>
        <Dropdown title="Équipements" text={stuff}></Dropdown>
      </div>
    </div>
  );
}
export default FicheLogement;
