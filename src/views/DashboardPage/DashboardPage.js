import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import getStatistics from "../../redux/statistics/statisticsOperation";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency";
import "../../css/main.min.css";

// import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';

function DashboardPage() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const location = useLocation();
  const dispatch = useDispatch();

  const updateSreen = () => setScreenWidth(window.screen.width);

  useEffect(() => {
    dispatch(getStatistics({ month: 12, year: 2022 }));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSreen);
    return () => {
      window.removeEventListener("resize", updateSreen);
    };
  });

  return (
    <div>
      <Header />
      <main className="dashboardPageContainer">
        <div className="dashboardPageWrap">
          <div className="container layoutContainer">
            <aside className="dashboardPageSidebar">
              <div className="dashboardPageIner">
                <Navigation />
                {location.pathname !== "/currency" && <Balance />}
              </div>
              <div>
                {(screenWidth > 767 || location.pathname === "/currency") && (
                  <Currency />
                )}
              </div>
            </aside>
            <section className="dashboardPageMain">
              {location.pathname !== "/currency" && <Outlet />}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
