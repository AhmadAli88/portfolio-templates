import React from "react";
import WeekendModeToggle from "./home/WeekendModeToggle";
import { Link } from "react-router-dom";

const Footer = () =>
{
    return (
      <>
        <footer className="salv-footer-content" id="slv-footer">
          <div className="salv-footer-wrap">
            <p className="salv-copyright-content mb-0 sm-font inter-font-400 b-text light-copyright">
              Copyright © 2024 Salva ❤{" "}
              <Link
                to="https://1.envato.market/website-portfolio"
                className="b-text"
                target="_blank"
              >
                the_krishna
              </Link>
            </p>
            <WeekendModeToggle />
          </div>
        </footer>
      </>
    );
};
export default Footer;