import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import Datetime from 'react-datetime';
// import 'react-datetime/css/react-datetime.css';
// import moment from 'moment';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { error } from '../../redux/transactions/transactionsSelectors';
import { addTransaction } from '../../redux/transactions/transactionsOperations';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalSelectBackground from './ModalSelectBackground';

function ModalForm({ closeModal }) {
  const dispatch = useDispatch();
  const checkError = useSelector(error);

  const [income, setIncome] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [placeholder, showPlaceholder] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://pure-atoll-67904.herokuapp.com/api/transactions/categories')
      .then(results => setCategories(results.data))
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const notify = () => toast('Wow so easy !');

  const incomeCategories = categories.filter(
    category => category.type === 'income',
  );
  const spendingCategories = categories.filter(
    category => category.type === 'spending',
  );

  // const yesterday = moment().subtract(1, 'day');
  // const valid = current => {
  //   return current.isAfter(yesterday);
  // };

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = mm + '.' + dd + '.' + yyyy;

  const initialValues = {
    income: income,
    category: '',
    amount: '',
    date: today,
    comment: '',
  };

  const validate = Yup.object().shape({
    income: Yup.boolean(),
    category: Yup.string().required('Укажите категорию'),
    amount: Yup.string()
      .matches(/^-?\d*\.?\d*$/, 'Введите только цифры')
      .required('Укажите сумму'),
    date: Yup.date().default(() => new Date()),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const { category, amount, date, comment = '' } = values;
    const object = { income, category, amount, date, comment };
    dispatch(addTransaction(object));
    setSubmitting(false);
    closeModal();
    resetForm();
  };

  return (
    <>
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

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleSubmit}
        validateOnBlur={true}
      >
        {formik => (
          <Form className="Modal__form">
            {isLoading ? (
              <Loader color="var(--black)" />
            ) : (
              <div className="Modal__select">
                <ModalSelectBackground
                  income={income}
                  categories={categories}
                />
                {income ? (
                  <>
                    <Field
                      as="select"
                      className="Modal__input Select Select__income "
                      name="category"
                    >
                      <option
                        className="Select__blocked"
                        disabled
                        hidden={placeholder}
                      >
                        Выберите категорию
                      </option>
                      {incomeCategories.length > 0 &&
                        incomeCategories.map(({ _id, nameDropdown }) => (
                          <option
                            className="Select__option"
                            key={_id}
                            value={_id}
                          >
                            {nameDropdown}
                          </option>
                        ))}
                    </Field>
                  </>
                ) : (
                  <>
                    <Field
                      as="select"
                      className="Modal__input Select Select__spending "
                      name="category"
                    >
                      <option
                        className="Select__blocked"
                        disabled
                        hidden={placeholder}
                      >
                        Выберите категорию
                      </option>
                      {spendingCategories.length > 0 &&
                        spendingCategories.map(({ _id, nameDropdown }) => (
                          <option
                            className="Select__option"
                            key={_id}
                            value={_id}
                          >
                            {nameDropdown}
                          </option>
                        ))}
                    </Field>
                  </>
                )}
                <span className="Select__focus"></span>
                <ErrorMessage
                  component="div"
                  name="category"
                  className="formikError"
                />
              </div>
            )}

            <div className="Modal__container">
              <span>
                <Field
                  type="text"
                  name="amount"
                  placeholder="0.00"
                  className="Modal__input Modal__amount"
                />
              </span>

              <span className="Modal__date">
                {today}
                {/* <Datetime
                className="Modal__input Modal__datetime"
                closeOnSelect="true"
                // timeFormat="false"
                dateFormat="DD.MM.YYYY"
                isValidDate={valid}
                value={today}
              /> */}
              </span>
            </div>
            <ErrorMessage
              component="div"
              name="amount"
              className="formikError"
            />

            <Field
              as="textarea"
              type="text"
              placeholder="Комментарий"
              className="Modal__input Modal__comment"
              name="comment"
            />
            <ErrorMessage
              component="div"
              name="comment"
              className="formikError"
            />

            <div className="Modal__controllers">
              <button type="submit" className="Modal__add">
                Добавить
              </button>
              <button
                onClick={() => closeModal()}
                className="Modal__cancel"
                type="button"
              >
                Отмена
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ModalForm;
