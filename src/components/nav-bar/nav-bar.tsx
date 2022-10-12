import { useState, useEffect, FunctionComponent } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./nav-bar.css";

export const NavBar: FunctionComponent<{}> = function () {
  const [active, setActive] = useState<boolean>(false);
  const isTabletView = useMediaQuery("(min-width: 768px)");

  useEffect(
    function () {
      if (isTabletView) setActive(false);
    },
    [isTabletView]
  );

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
        icon={active ? faXmark : faBars}
      />
      <ul className="nav-bar__links">
        <li className="nav-bar__links__page">
          <Link to="/home" className="nav-bar__links__page__link">
            home
          </Link>
        </li>
        <li className="nav-bar__links__page">
          <Link to="/lesson" className="nav-bar__links__page__link">
            lessons
          </Link>
        </li>
      </ul>
    </nav>
  );
};
