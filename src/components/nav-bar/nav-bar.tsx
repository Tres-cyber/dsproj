import { useState, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./nav-bar.css";

export const NavBar: FunctionComponent<{}> = function () {
  const [active, setActive] = useState<boolean>(false);
  const toggleActive = () => {
    setActive((a) => !a);
  };

  return (
    <nav className="nav-bar container">
      <a href="#" className="nav-bar__logo">
        oli
      </a>
      <FontAwesomeIcon
        className={"nav-bar__menu" + (active ? "--active" : "")}
        onClick={toggleActive}
        icon={faBars}
      />
      <ul className="nav-bar__links">
        <li className="nav-bar__links__page">
          <a href="#" className="nav-bar__links__page__link">
            home
          </a>
        </li>
        <li className="nav-bar__links__page">
          <a href="#" className="nav-bar__links__page__link">
            lesson
          </a>
        </li>
        <li className="nav-bar__links__page">
          <a href="#" className="nav-bar__links__page__link">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
};
