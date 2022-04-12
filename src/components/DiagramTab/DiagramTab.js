import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from '../Chart';
import Table from '../Table';
import Loader from '../Loader/Loader'
import '../../css/main.min.css';
import {
  getAllStatistics,
  isLoading,
  error,
} from '../../redux/statistics/statisticsSelectors';
import getStatistics from '../../redux/statistics/statisticsOperation';

function DiagramTab() {
  const currentMonth = new Date().getMonth()+1
  const currentYear = new Date().getFullYear()
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  const statistics = useSelector(getAllStatistics)
  const loading = useSelector(isLoading)
  const errorStat = useSelector(error)
  
  const expenses = statistics.filter((statistic) => !statistic.income)[0];
  const income = statistics.filter((statistic) => statistic.income)[0];
  // console.log('expenses:', expenses);
  // console.log('income:', income);
  // const dispatch = useDispatch();
  
  // useEffect(()=>{
  //     dispatch(getStatistics({
  //       month:selectedMonth, 
  //       year:selectedYear
  //     }
  //       ))      
  // },[selectedMonth, selectedYear])

  return (
    <div className="diagram">
      <p className="title">Статистика</p>      
        {statistics && 
          <div className="diagramTab">
            <Chart 
            chartData={expenses}/>
            <Table 
            valueMonth={selectedMonth}
            valueYear={selectedYear}
            selectedMonth={setSelectedMonth}
            selectedYear={setSelectedYear}
            expenses={expenses}
            income={income}
            /> 
          </div>
        } 
        {loading && <Loader/>} 
        {errorStat && <p>OOPS! Failled!</p>}      
    </div>
  );
}

export default DiagramTab;
