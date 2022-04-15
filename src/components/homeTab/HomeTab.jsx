import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../redux/transactions/transactionsOperations";
import "../../css/main.min.css";
import {isLoading} from "../../redux/transactions/transactionsSelectors";
import Loader from '../Loader/Loader'

import empty from "../../img/icons/empty.svg";

const moment = require('moment');


export default function HomeTab() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.data);
  const loading = useSelector(isLoading);


  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, transactions.length]);

  return (
    <div> 
      {loading && <Loader color="#000" size="60"  />} 
      {((!transactions || transactions.length) && !loading=== 0) && (
        <div className="emptyTransaction_wraper">
          <div className="emptyTransaction">
            <img
              src={empty}
              alt="empty"
              height={80}
              className="emptyTransaction-icon"
            />
            <p className="emptyTransactionText">
              У вас еще нет доходов и расходов...
            </p>
          </div>
        </div>
      )}
      {transactions.length > 0 && (
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

              {transactions.map(transaction => (
                <tr className="tableRow_item" key={transaction._id}>
                  <td className="table_value">{moment(transaction.date).format("DD.MM.YY")}</td>
                  <td className="table_value">
                    {transaction.income === true && <span>+</span>}
                    {transaction.income === false && <span>-</span>}
                  </td>
                  <td className="table_value">{transaction.category.nameStatistics}</td>
                  <td className="table_value">{transaction.comment}</td>
                  <td
                    className={
                      transaction.income
                        ? "transactionIncomeTrue table_value"
                        : "transactionIncomeFalse table_value"
                    }
                  >
                    {transaction.amount}
                  </td>
                  <td className="table_value">{transaction.currentBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mobileOnly transactionCardWraper">
            {transactions.map(transaction => (
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
                      <td className="transactionCard_value">{moment(transaction.date).format("DD.MM.YY")}</td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Тип</th>
                      <td className="transactionCard_value">
                        {transaction.income === true && <span>+</span>}
                        {transaction.income === false && <span>-</span>}
                      </td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Категория</th>
                      <td className="transactionCard_value">{transaction.category.nameStatistics}</td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Комментарий</th>
                      <td className="transactionCard_value">{transaction.comment}</td>
                    </tr>
                    <tr className="transactionCardRaw">
                      <th className="tabelHeader_item">Сумма</th>
                      <td
                        className={
                          transaction.income
                            ? "transactionIncomeTrue transactionCard_value"
                            : "transactionIncomeFalse transactionCard_value"
                        }
                      >
                        {transaction.amount}
                      </td>
                    </tr>
                    <tr>
                      <th className="tabelHeader_item last-item">Баланс</th>
                      <td className="last-item transactionCard_value">
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
    </div>
  );
}
