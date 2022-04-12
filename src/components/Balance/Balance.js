import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import '../../css/main.min.css';

function Balance() {
  const balance = useSelector(authSelectors.getBalance);
  console.log(balance);
  return (
    <div className="balanceWrap">
      <p className="balanceTitle">Ваш баланс</p>
      <p className="balanceText">
        {'\u20B4'} {balance}
      </p>
    </div>
  );
}

export default Balance;
