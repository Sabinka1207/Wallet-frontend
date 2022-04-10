import "../../css/main.min.css";
import ModalLogout from "../ModalLogout/ModalLogout";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logout from "../../img/icons/logout.svg";
import LogoWallet from "../LogoWallet/LogoWallet";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header>
      <div className="container header">
        <NavLink
          exact
          to="/home"
          className="linkLogo"
          activeClassName="activeLinkLogo"
        >
          <LogoWallet></LogoWallet>
        </NavLink>
        <div className="headerLogoutWrap">
          <p className="headerUserName">Имя</p>
          {/* <svg className="headerLogoutImg" width="24px" height="24px">
          <use href="img/icons/logout.svg"></use>
        </svg> */}
          <img className="headerLogoutImg" src={logout} alt="Выйти" />
          <p className="headerLogout">Выйти</p>
          {showModal && <ModalLogout onClose={toggleModal} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
