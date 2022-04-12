import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as CloseModal } from '../../img/icons/close.svg';
import '../../css/main.min.css';
import axios from 'axios';
import ModalForm from './ModalForm';

const modalRoot = document.getElementById('modal-root');

function ModalAddTransaction({ isOpen }) {
  const [income, setIncome] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('https://pure-atoll-67904.herokuapp.com/api/transactions/categories')
      .then(results => setCategories(results.data))
      .catch(error => console.log(error.message));
  }, []);

  const closeModal = () => {
    isOpen(false);
    document.body.style.overflow = 'unset';
  };

  return createPortal(
    <div className="Overlay">
      <div className="ModalAddTransaction">
        <CloseModal className="Modal__close" onClick={closeModal} />
        <div className="Modal__body">
          <h2 className="Modal__heading">Добавить транзакцию</h2>
          <div className="Switcher">
            <span
              className="Switcher__option Switcher__income"
              style={{
                color: income ? 'var(--accentGreenColor)' : 'var(--grayFive)',
              }}
            >
              Доход
            </span>
            <div className="Switcher__control">
              <input
                onClick={() => setIncome(!income)}
                className="Switcher__toggle"
                type="checkbox"
                name="transaction-type"
                id="switcher-toggle"
                value={income}
                defaultChecked
                aria-label="Выбрать расход или доход"
              />
              <label
                aria-hidden="true"
                className="Switcher__track"
                htmlFor="switcher-toggle"
              ></label>
              <div aria-hidden="true" className="Switcher__marker"></div>
            </div>
            <span
              className="Switcher__option Switcher__spending"
              style={{
                color: income ? 'var(--grayFive)' : 'var(--accentRoseColor)',
              }}
            >
              Расход
            </span>
          </div>
          <ModalForm
            closeModal={closeModal}
            categories={categories}
            income={income}
          />
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default ModalAddTransaction;
