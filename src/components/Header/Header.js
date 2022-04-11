import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { getUserName } from "../../redux/auth/authSelectors"

import LogoWallet from "../LogoWallet/LogoWallet";
import ModalLogout from "../ModalLogout/ModalLogout";

import logout from "../../img/icons/logout.svg";
import "../../css/main.min.css";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const name = useSelector(getUserName);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
        <header>
        <div className="container header">
          <Link to="/home">
            <LogoWallet/>
          </Link>
          <div className="headerLogoutWrap">
          <p className="headerUserName">{name}</p>
          <button type="button" onClick={toggleModal} className="headerLogoutButton">
            <img className="headerLogoutImg" src={logout} alt="Выйти" />
            <p className="headerLogout">Выйти</p>
          </button>
            {showModal && <ModalLogout onClose={toggleModal} />}
          </div>
        </div>
      </header>
  );
}

export default Header;
