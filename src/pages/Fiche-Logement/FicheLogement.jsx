import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Dropdown from "../../components/Dropdown/dropdown";

function FicheLogement() {
  const pickedLoc = useParams();
  const dataLocation = data;
  const location = dataLocation.find((item) => item.id === pickedLoc.id);
  return (
    <div className="ficheLogement">
      <h1>{location.title}</h1>
      <div className="rental__details">
        <Dropdown title="Équipements" text={location.equipments}></Dropdown>
        <Dropdown title="Description" text={location.description}></Dropdown>
      </div>
    </div>
  );
}
export default FicheLogement;
