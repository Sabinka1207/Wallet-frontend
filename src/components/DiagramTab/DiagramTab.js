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
  const [selectedMonth, setSelectedMonth] = useState({});
  const [selectedYear, setSelectedYear] = useState({});
  const statistics = useSelector(getAllStatistics)
  const loading = useSelector(isLoading)
  const errorStat = useSelector(error)
  
  console.log(statistics);

  // const dispatch = useDispatch();
  
  // useEffect(()=>{
  //     dispatch(getStatistics(
  //       {month:1, year:2022}
  //       ))      
  // },[])

  return (
    <div className="diagram">
      <p className="title">Статистика</p>      
        {statistics && 
          <div className="diagramTab">
            <Chart 
            statData={statistics[0]}/>
            <Table 
            valueMonth={selectedMonth}
            valueYear={selectedYear}
            selectedMonth={setSelectedMonth}
            selectedYear={setSelectedYear}
            data={statistics[0]}
            /> 
          </div>
        } 
        {loading && <Loader/>} 
        {errorStat && <p>OOPS! Failled!</p>}      
    </div>
  );
}

export default DiagramTab;
