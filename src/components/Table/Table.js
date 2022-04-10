import React, { useState } from 'react';
import '../../css/main.min.css';


function Table({data}) {
  // console.log(data);
  const {income, categories, totalSum, year, month} = data
  return (
    <div className="chart__container">
      <select name="month" className="select">
        <option value={month} className="text">
          Январь
        </option>
        {/* <option value="2" className="text">
          Февраль
        </option>
        <option value="3" className="text">
          Март
        </option>
        <option value="4" className="text">
          Апрель
        </option>
        <option value="5" className="text">
          Май
        </option>
        <option value="6" className="text">
          Июнь
        </option> */}
      </select>
      <select name="year" className="select">
        <option value="2022" className="text">
          2022
        </option>
      </select>

      <table className="chart__table">
        <thead className="table__head">
          <tr>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>          
            {data && 
            categories.map(({category, categorySum})=>(
              <tr key={categorySum}>
                <td >{category}</td> 
                <td>{categorySum}</td>
              </tr>
             ) )}          
        </tbody>
      </table>
      <p className="total__text">
        Расходы: <span className="total__sum">{totalSum}</span>
      </p>
      <p className="total__text">
        Доходы:: <span className="total__sum">0</span>
      </p>
    </div>
  );
}

export default Table;
