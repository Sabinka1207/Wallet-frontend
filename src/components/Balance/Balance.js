import { useSelector } from 'react-redux';
import { getBalance } from '../../redux/transactions/transactionsSelectors';

import '../../css/main.min.css';

function Balance() {
  const balance = useSelector(getBalance);

  return (
    <div className="balanceWrap">
      <p className="balanceTitle">Ваш баланс</p>
      {/* <p className="balanceText">&#8372; {balance}</p> */}
    </div>
  );
}

export default Balance;
