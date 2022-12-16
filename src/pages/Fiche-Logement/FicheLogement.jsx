import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Dropdown from "../../components/Dropdown/dropdown";
import Slider from "../../components/Slider/Slider";
import Rate from "../../components/Rate/Rate";

function FicheLogement() {
  const pickedLoc = useParams();
  const dataLocation = data;
  const location = dataLocation.find((item) => item.id === pickedLoc.id);

  const containerSlider = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className="ficheLogement">
      <div style={containerSlider}>
        <Slider slides={location.pictures} />
      </div>
      <h1>{location.title}</h1>
      <Rate rate={location.rating} />
      <div className="rental__details">
        <Dropdown title="Équipements" text={location.equipments}></Dropdown>
        <Dropdown title="Description" text={location.description}></Dropdown>
      </div>
    </div>
  );
}
export default FicheLogement;
