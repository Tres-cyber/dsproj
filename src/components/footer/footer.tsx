import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
import { Link } from "react-router-dom";

export const Footer: FunctionComponent<{}> = function () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__copyright">
          <Link to="/home" className="footer__copyright__title">
            oli
          </Link>
          <p className="footer__copyright__details">
            This website is free and open. Hosted at{" "}
            <a href="https://github.com/Tres-cyber/dsproj" target="_blank">
              Tres-cyber/dsproj
            </a>
          </p>
        </div>
        <div className="footer__socials">
          <a href="#" className="footer__socials__handle">
            <FontAwesomeIcon
              className="footer__socials__handle__icon"
              icon={faFacebook}
            />
            <span className="footer__socials__handle__text">
              JuliaannGalassss
            </span>
          </a>
          <a href="#" className="footer__socials__handle">
            <FontAwesomeIcon
              className="footer__socials__handle__icon"
              icon={faGithub}
            />
            <span className="footer__socials__handle__text">Tres-Cyber</span>
          </a>
          <a href="#" className="footer__socials__handle">
            <FontAwesomeIcon
              className="footer__socials__handle__icon"
              icon={faLinkedin}
            />
            <span className="footer__socials__handle__text">jericobayod</span>
          </a>
          <a href="#" className="footer__socials__handle">
            <FontAwesomeIcon
              className="footer__socials__handle__icon"
              icon={faTwitter}
            />
            <span className="footer__socials__handle__text">
              juliaanngalassss
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
