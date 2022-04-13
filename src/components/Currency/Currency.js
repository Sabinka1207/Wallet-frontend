import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "../../css/main.min.css";

function Currency() {
  const [currency, setCurrency] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error("ERROR"));
      })
      .then((data) => {
        const currency = data.filter((item) => item.ccy !== "RUR");
        setCurrency(currency);
        setLoad(false);
      });
  }, []);

  return (
    <table className="table">
      <thead className="tableHead">
        <tr>
          <th className="tableHeadItem tableItemLeft">Валюта</th>
          <th className="tableHeadItem">Покупка</th>
          <th className="tableHeadItem tableItemRight">Продажа</th>
        </tr>
      </thead>

      {/* <tbody className="tableBody">
        {load && <Loader color="#fff" size="40" />}
        {currency.map((item) => (
          <tr key={item.ccy}>
            <td className="tableItemLeft ">{item.ccy}</td>
            <td className="tableItemCenter">
              {Math.round(parseFloat(item.buy) * 100) / 100}
            </td>
            <td className="tableItemRight">
              {Math.round(parseFloat(item.sale) * 100) / 100}
            </td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
}

export default Currency;
