import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { authOperations } from "../../redux/auth";

const modalRoot = document.getElementById("modal-root");

const ModalLogout = ({ onClose }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authOperations.logOut());
    onClose();
    return;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  const handleEscClose = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal-logaut">
        <p className="modal-logaut-text">Вы действительно хотите выйти?</p>
        <ul className="btn-list">
          <li className="btn-item">
            <button className="btn-logaut btn-yes" onClick={logout}>
              Да, выйти
            </button>
          </li>
          <li className="btn-item">
            <button className="btn-logaut btn-no" onClick={() => onClose()}>
              Нет, остаться
            </button>
          </li>
        </ul>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalLogout;
