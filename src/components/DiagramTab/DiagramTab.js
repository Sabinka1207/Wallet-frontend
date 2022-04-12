import React, { useEffect } from 'react';
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
  const statistics = useSelector(getAllStatistics)
  const loading = useSelector(isLoading)
  const errorStat = useSelector(error)
 
  // const dispatch = useDispatch();
  // console.log(statistics);
  // useEffect(()=>{
  //     dispatch(getStatistics())      
  // },[])

  return (
    <div className="diagram">
      <p className="title">Статистика</p>      
        {statistics && 
          <div className="diagramTab">
            <Chart statData={statistics[0]}/>
            <Table data={statistics[0]}/> 
          </div>
        } 
        {/* {loading && <Loader/>} 
        {errorStat && <h3>OOPS! Failled!</h3>}       */}
    </div>
  );
}

export default DiagramTab;
