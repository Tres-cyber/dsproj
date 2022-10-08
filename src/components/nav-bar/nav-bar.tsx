import { useState, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./nav-bar.css";

export const NavBar: FunctionComponent<{}> = function () {
  const [active, setActive] = useState<boolean>(false);
  const toggleActive = () => {
    setActive((a) => !a);
  };

  return (
    <nav className="nav-bar container">
      <Link to="/home" className="nav-bar__logo">
        oli
      </Link>
      <FontAwesomeIcon
        className={"nav-bar__menu" + (active ? "--active" : "")}
        onClick={toggleActive}
        icon={faBars}
      />
      <ul className="nav-bar__links">
        <li className="nav-bar__links__page">
          <Link to="/home" className="nav-bar__links__page__link">
            home
          </Link>
        </li>
        <li className="nav-bar__links__page">
          <Link to="/lesson" className="nav-bar__links__page__link">
            lesson
          </Link>
        </li>
        <li className="nav-bar__links__page">
          <Link to="/about" className="nav-bar__links__page__link">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};
