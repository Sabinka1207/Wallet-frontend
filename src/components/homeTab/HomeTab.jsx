import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/transactions/transactionsOperations';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import '../../css/main.min.css';

import empty from '../../img/icons/empty.svg';

const moment = require('moment');

export default function HomeTab() {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.data);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const newTransactios = [...transactions].sort(
    (firstTransaction, nextTransaction) => {
      return (
        new Date(firstTransaction.createdAt) -
        new Date(nextTransaction.createdAt)
      );
    },
  );

  const sortTransactions = newTransactios.slice([0], [6]);

  return (
    <div>
      {!transactions && (
        <div className="emptyTransaction">
          <img src={empty} alt="empty" height={40} />
          <p className="emptyTransactionText">
            У вас еще нет доходов и расходов...
          </p>
        </div>
      )}
      {transactions && (
        <div>
          <table className="tableContainer mobilehidden">
            <tbody>
              <tr className="tableHeader">
                <th className="tabelHeader_item">Дата</th>
                <th className="tabelHeader_item">Тип</th>
                <th className="tabelHeader_item">Категория</th>
                <th className="tabelHeader_item">Комментарий</th>
                <th className="tabelHeader_item">Сумма</th>
                <th className="tabelHeader_item">Баланс</th>
              </tr>

              {sortTransactions.map(transaction => (
                <tr className="tableRow_item" key={transaction._id}>
                  <td>{moment(transaction.date).format('DD.MM.YY')}</td>
                  <td>
                    {transaction.income === true && <span>+</span>}
                    {transaction.income === false && <span>-</span>}
                  </td>
                  <td>{transaction.category.nameStatistics}</td>
                  <td>{transaction.comment}</td>
                  <td
                    className={
                      transaction.income
                        ? 'transactionIncomeTrue'
                        : 'transactionIncomeFalse'
                    }
                  >
                    {transaction.amount}
                  </td>
                  <td>{transaction.currentBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mobileOnly">
            {sortTransactions.map(transaction => (
              <li
                className={
                  transaction.income
                    ? 'transactionCardTrue transactionCard'
                    : 'transactionCardFalse transactionCard'
                }
                key={transaction._id}
              >
                <table
                  className="transactionCardTable"
                  style={{ width: '100%' }}
                >
                  <tbody>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Дата</th>
                      <td>{moment(transaction.date).format('DD.MM.YY')}</td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Тип</th>
                      <td>
                        {transaction.income === true && <span>+</span>}
                        {transaction.income === false && <span>-</span>}
                      </td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Категория</th>
                      <td>{transaction.category.nameStatistics}</td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Комментарий</th>
                      <td>{transaction.comment}</td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Сумма</th>
                      <td
                        className={
                          transaction.income
                            ? 'transactionIncomeTrue'
                            : 'transactionIncomeFalse'
                        }
                      >
                        {transaction.amount}
                      </td>
                    </tr>
                    <tr>
                      <th className="tabelHeader_item last-item">Баланс</th>
                      <td className="last-item">
                        {transaction.currentBalance}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ButtonAddTransactions />
    </div>
  );
}
