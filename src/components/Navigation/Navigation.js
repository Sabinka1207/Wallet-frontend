import { NavLink } from "react-router-dom";
import home from "../../img/icons/home.svg";
import statistics from "../../img/icons/statistics.svg";
import currency from "../../img/icons/currency.svg";

import "../../css/main.min.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigationList">
        <li className="navigationItem">
          <NavLink
            exact
            to="/home"
            className="navigationLink"
            activeClassName="navigationActiveLink"
          >
            <img
              className="navigationHome navigationImg"
              src={home}
              width="38px"
              height="38px"
              alt="Иконка дома"
            />
            <p className="navigationText">Главная</p>
          </NavLink>
        </li>

        <li className="navigationItem">
          <NavLink
            exact
            to="/diagram"
            className="navigationLink"
            activeClassName="navigationActiveLink"
          >
            <img
              className="navigationStatistic navigationImg"
              src={statistics}
              width="38px"
              height="38px"
              alt="Иконка статистика"
            />
            <p className="navigationText">Статистика</p>
          </NavLink>
        </li>

        <li className="navigationItem navigationCurrencyItem">
          <NavLink
            exact
            to="/сurrency"
            className="navigationLink"
            activeClassName="navigationActiveLink"
          >
            <img
              className="navigationCurrency navigationImg"
              src={currency}
              width="38px"
              height="38px"
              alt="Иконка валюты"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
