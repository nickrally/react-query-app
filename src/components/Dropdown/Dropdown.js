import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, handleSelection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    handleSelection(value);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-container">
      <p>Pick a chart type</p>
      <div className="dropdown-header" onClick={toggle}>
        <span>&#9660;</span>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {options.map((option) => (
              <li
                className="list-item"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
