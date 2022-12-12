import { useState } from "react";
import vectoropen from "../../assets/Vector-open.png";
import vectorclosed from "../../assets/Vector-closed.png";
import "./Dropdown.css";

function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <div className="head-dd">
        <div className="title-dd"> {title}</div>
        <button className="vector-dd" onClick={() => setIsOpen(false)}>
          <img src={vectoropen} alt="close" />
        </button>
      </div>
      <div className="text-dd">{text}</div>

      {}
    </div>
  ) : (
    <div className="closed-dropdown">
      <div className="head-dd">
        <div className="title-dd"> {title}</div>
        <button className="vector-dd" onClick={() => setIsOpen(true)}>
          <img src={vectorclosed} alt="open" />
        </button>
      </div>
    </div>
  );
}
export default Dropdown;
