import { ReactComponent as Calendar } from '../../img/icons/calendar.svg';
import { ReactComponent as SelectArrow } from '../../img/icons/select-arrow.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

import { addTransaction } from '../../redux/transactions/transactionsOperations';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalForm({ closeModal, income, categories }) {
  const dispatch = useDispatch();

  const notify = () => toast('Wow so easy !');

  const incomeCategories = categories.filter(
    category => category.type === 'income',
  );
  const spendingCategories = categories.filter(
    category => category.type === 'spending',
  );

  const yesterday = moment().subtract(1, 'day');
  const valid = current => {
    return current.isAfter(yesterday);
  };

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;

  const initialValues = {
    income: income,
    category: '',
    amount: '',
    date: today,
    comment: '',
  };

  const validate = Yup.object().shape({
    income: Yup.boolean().default(false),
    category: Yup.string().required('Укажите категорию'),
    amount: Yup.string()
      .matches(/^-?\d*\.?\d*$/, 'Введите только цифры')
      .required('Укажите сумму'),
    date: Yup.date().default(() => new Date()),
    comment: Yup.string(),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    const { income, category, amount, date, comment } = values;
    dispatch(addTransaction({ income, category, amount, date, comment }));

    setSubmitting(false);
    resetForm();

    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmit}
      validateOnBlur={true}
    >
      {formik => (
        <Form className="Modal__form">
          <div className="Modal__select">
            {income ? (
              <>
                <Field
                  as="select"
                  className="Select__income Modal__input"
                  name="category"
                >
                  <option defaultValue="" disabled selected>
                    Выберите категорию
                  </option>
                  {incomeCategories.length > 0 &&
                    incomeCategories.map(({ _id, nameDropdown }) => (
                      <option key={_id} value={_id}>
                        {nameDropdown}
                      </option>
                    ))}
                </Field>
                <SelectArrow className="Modal__arrow" />
              </>
            ) : (
              <>
                <Field
                  as="select"
                  className="Select__spending Modal__input"
                  name="category"
                >
                  <option defaultValue="" disabled selected>
                    Выберите категорию
                  </option>
                  {spendingCategories.length > 0 &&
                    spendingCategories.map(({ _id, nameDropdown }) => (
                      <option key={_id} value={_id}>
                        {nameDropdown}
                      </option>
                    ))}
                </Field>
                <SelectArrow className="Modal__arrow" />
              </>
            )}
            <ErrorMessage
              component="div"
              name="category"
              className="formikError"
            />
          </div>

          <div className="Modal__container">
            <span>
              <Field
                type="text"
                name="amount"
                placeholder="0.00"
                className="Modal__input Modal__amount"
              />
              <ErrorMessage
                component="div"
                name="amount"
                className="formikError"
              />
            </span>

            <span className="Modal__date">
              <Datetime
                className="Modal__input Modal__datetime"
                closeOnSelect="true"
                // timeFormat="false"
                dateFormat="DD.MM.YYYY"
                isValidDate={valid}
                value={today}
              />
              <Calendar className="Modal__calendar" />
            </span>
          </div>

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
            <button onClick={() => closeModal(false)} className="Modal__cancel">
              Отмена
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ income, category, amount, date, comment }) =>
//     dispatch(addTransaction({ income, category, amount, date, comment })),
// });

export default ModalForm;
