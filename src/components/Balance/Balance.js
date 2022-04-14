import { useSelector } from "react-redux";
import React from "react";

import '../../css/main.min.css';
import Loader from '../Loader/Loader';

function Balance() {
  const transactions = useSelector(state => state.transactions.data);

  // const balance = useSelector(state => state.auth.user.balance);

  // if (transactions.length === 0) {
  //   return <span>У вас еще нет ни одной транзакции! Баланс пустой</span>;
  // } else {
  //
  //   );
  // }

  // return (
  //   <>
  //     {balance ? (
  //       <Loader />
  //     ) : (
  //       <div className="balanceWrap">
  //         <p className="balanceTitle">Ваш баланс</p>
  //         <p className="balanceText">
  //           {'\u20B4'} {balance}
  //         </p>
  //       </div>
  //     )}
  //   </>
  // );
  if (!transactions || transactions.length === 0) {
    return (
      <div className="balanceWrap balanceWrap_empty">
        <p className="balanceText_empty">
         У вас еще нет ни одной транзакции! Баланс пустой
        </p>
      </div>
    )
  } else {
    const balance = transactions[0].currentBalance;
    return (
      <div className="balanceWrap">
        <p className="balanceTitle">Ваш баланс</p>
        <p className="balanceText">
          {'\u20B4'} {balance}{' '}
        </p>
      </div>
    );
  }
}

export default Balance;
