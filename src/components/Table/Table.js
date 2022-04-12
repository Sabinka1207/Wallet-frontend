import React, { useState } from 'react';
import '../../css/main.min.css';

const months = [
  { name: "Январь", id: 1 },
  { name: "Февраль", id: 2 },
  { name: "Март", id: 3 },
  { name: "Апрель", id: 4 },
  { name: "Май", id: 5 },
  { name: "Июнь", id: 6 },
  { name: "Июль", id: 7 },
  { name: "Август", id: 8 },
  { name: "Сентябрь", id: 9 },
  { name: "Октябрь", id: 10 },
  { name: "Ноябрь", id: 11 },
  { name: "Декабрь", id: 12 },
];
const years = [
  { name: "2022", id: 1 },
  { name: "2021", id: 2 },
  { name: "2020", id: 3 },
  { name: "2019", id: 4 },
  { name: "2018", id: 5 },
  { name: "2017", id: 6 },
  { name: "2016", id: 7 },
  { name: "2015", id: 8 },
  { name: "2014", id: 9 },
  { name: "2013", id: 10 },
  { name: "2012", id: 11 },
  { name: "2011", id: 12 },
];

function Table({
  data,
  selectedMonth,
  selectedYear,
  valueMonth,
  ValueYear
}) {

  return (
    <div className="chart__container">
      <select  className="select">
        {months.map(month=>(
          <option value={month.id} className="text">
          {month.name}
        </option>
        ))}        
      </select>
      <select name="year" className="select">
      {years.map(year=>(
          <option value={year.id} className="text">
          {year.name}
        </option>
        ))}
      </select>

      <table className="chart__table">
        <thead className="table__head">
          <tr>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>          
            {data[1].categories.map(({category, categorySum})=>(
              <tr key={categorySum}>
                <td >{category}</td> 
                <td>{categorySum}</td>
              </tr>
             ) )}          
        </tbody>
      </table>
      <p className="total__text">
        Расходы: <span className="total__sum isFalse">{data[1].totalSum}</span>
      </p> 
      <p className="total__text">
        Доходы:: <span className="total__sum isTrue">{data[0].totalSum}</span>
      </p> 
    </div>
  );
}

export default Table;
