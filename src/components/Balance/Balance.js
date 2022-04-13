import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import '../../css/main.min.css';
import Loader from '../Loader/Loader';

function Balance() {
  const balance = useSelector(state => state.auth.user.balance);

  // if (transactions.length === 0) {
  //   return <span>У вас еще нет ни одной транзакции! Баланс пустой</span>;
  // } else {
  //
  //   );
  // }

  return (
    <>
      {balance ? (
        <Loader />
      ) : (
        <div className="balanceWrap">
          <p className="balanceTitle">Ваш баланс</p>
          <p className="balanceText">
            {'\u20B4'} {balance}
          </p>
        </div>
      )}
    </>
  );
}

export default Balance;
