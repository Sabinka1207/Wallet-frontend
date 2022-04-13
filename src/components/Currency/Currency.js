import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "../../css/main.min.css";

const axios = require("axios");

function Currency() {
  const [currency, setCurrency] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getCurrency() {
      try {
        const response = await axios.get(
          "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
        );

        const currencyArray = response.data.filter(
          (item) => item.ccy !== "RUR"
        );

        setCurrency(currencyArray);
        setLoad(false);
      } catch (error) {
        // console.error(error);
      }
    }
    getCurrency();
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
