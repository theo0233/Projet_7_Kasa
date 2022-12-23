import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Dropdown from "../../components/Dropdown/dropdown";
import Slider from "../../components/Slider/Slider";
import Rate from "../../components/Rate/Rate";
import Tags from "../../components/Tags/tags";

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
  const pickedLoc = useParams();
  const dataLocation = data;
  const location = dataLocation.find((item) => item.id === pickedLoc.id);
  const stuff = location.equipments.map((e, index) => (
    <li key={index} className="">
      {e}
    </li>
  ));

  return (
    <div className="ficheLogement">
      <div style={containerSlider}>
        <Slider slides={location.pictures} />
      </div>
      <h1>{location.title}</h1>
      <Rate rate={location.rating} />
      <div style={tagContainer}>
        {location.tags.map((tag, index) => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
      <div style={rental_detail}>
        <Dropdown title="Description" text={location.description}></Dropdown>
        <Dropdown title="Équipements" text={stuff}></Dropdown>
      </div>
    </div>
  );
}
export default FicheLogement;
