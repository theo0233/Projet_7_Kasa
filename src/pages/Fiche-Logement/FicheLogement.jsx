import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FicheLogement() {
  const { pickedLoc } = useParams();

  return <div>{pickedLoc}.pictures[O]</div>;
}
export default FicheLogement;
