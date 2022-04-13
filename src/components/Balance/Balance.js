import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

import '../../css/main.min.css';

function Balance() {
  const transactions = useSelector(state => state.transactions.data);

  if (!transactions || transactions.length === 0) {
    return <span>У вас еще нет ни одной транзакции! Баланс пустой</span>;
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
