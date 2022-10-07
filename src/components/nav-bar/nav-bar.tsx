import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./nav-bar.css";

export const NavBar: FunctionComponent<{}> = function () {
  return (
    <nav className="nav-bar container">
      <a href="#" className="nav-bar__logo">
        oli
      </a>
      <FontAwesomeIcon
      className="nav-bar__menu"
      icon={faBars}
      />
      <ul className="nav-bar__links">
        <li>
          <a href="#" className="nav-bar__links__anchor">
            home
          </a>
        </li>
        <li>
          <a href="#" className="nav-bar__links__anchor">
            lesson
          </a>
        </li>
        <li>
          <a href="#" className="nav-bar__links__anchor">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
};
