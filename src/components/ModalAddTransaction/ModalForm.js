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

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { income, category, amount, date, comment } = values;
    const object = { income, category, amount, date, comment };
    dispatch(addTransaction(object));

    // setSubmitting(false);
    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={handleSubmit}
      validateOnBlur={true}
    >
      {formik => (
        <Form className="Modal__form">
          <div className="Modal__select">
            {/* <span className="Select__blocked">Выберите категорию</span> */}
            {income ? (
              <>
                <Field
                  as="select"
                  className="Modal__input Select Select__income "
                  name="category"
                >
                  {incomeCategories.length > 0 &&
                    incomeCategories.map(({ _id, nameDropdown }) => (
                      <option className="Select__option" key={_id} value={_id}>
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
                  {spendingCategories.length > 0 &&
                    spendingCategories.map(({ _id, nameDropdown }) => (
                      <option className="Select__option" key={_id} value={_id}>
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

export default ModalForm;
