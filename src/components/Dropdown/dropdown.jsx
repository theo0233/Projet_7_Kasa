import { useState } from "react";
import vector from "../../assets/Vector.png";
function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <div className="head-dd">
        <div className="title-dd"> {title}</div>
        <button onClick={() => setIsOpen(false)}>
          <img src={vector} alt="close" />
        </button>
        <div className="text-dd">{text}</div>
      </div>
      {}
    </div>
  ) : (
    <div className="closed-dropdown">
      <div className="head-dd">
        <div className="title-dd"> {title}</div>
        <button className="head-dd" onClick={() => setIsOpen(true)}>
          <img src={vector} alt="open" />
        </button>
      </div>
    </div>
  );
}
export default Dropdown;
