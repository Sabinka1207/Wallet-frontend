import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency";

// import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';

import '../../css/main.min.css';
import { useDispatch } from "react-redux";
import getStatistics from "../../redux/statistics/statisticsOperation";
import { useEffect } from "react";
function DashboardPage() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getStatistics({month:12, year:2022}))      
  },[])

  const isDesktopOrTable = useMediaQuery({
    query: '(min-width: 768px)'
  })

  // console.log("isDesktopOrTable", isDesktopOrTable)

  return (
    <div>
      <Header/>
        <main className="dashboardPageContainer">
          <div className = "dashboardPageWrap">

            <div className="container layoutContainer">
              <aside className="dashboardPageSidebar">
                <div className="dashboardPageIner">
                  <Navigation />
                    {(location.pathname !== "/currency") && 
                  <Balance/>}               
                </div>
                <div>
                  {(isDesktopOrTable ||location.pathname === "/currency")&& 
                    <Currency/>
                  }
                </div>  
              </aside>
              <section className="dashboardPageMain">
                {(location.pathname !== "/currency") && <Outlet />}               
              </section>
            </div>
          </div>
        </main>
    </div>
  );
}

export default DashboardPage;