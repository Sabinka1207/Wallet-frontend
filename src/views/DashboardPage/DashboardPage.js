import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import getStatistics from "../../redux/statistics/statisticsOperation";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency";

import "../../css/main.min.css";

function DashboardPage() {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const [isDesktopOrTable, setIsDesktopOrTable] = useState(true);

  useEffect(() => {
    dispatch(getStatistics({ month: 12, year: 2022 }));
  }, []);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(min-width: 768px)")
    setIsDesktopOrTable(mediaWatcher.matches);

    function updatIsDesktopOrTable (e) {
      setIsDesktopOrTable(e.matches);
      console.log(e.matches)
    }

    mediaWatcher.addEventListener('change', updatIsDesktopOrTable)

    return (() => {mediaWatcher.removeEventListener('change', updatIsDesktopOrTable)})
  },[]);

  return (
    <div>
      <Header />
      <main className="dashboardPageContainer">
        <div className="dashboardPageWrap">
          <div className="container layoutContainer">
            <aside className="dashboardPageSidebar">
              <div className="dashboardPageIner">
                <Navigation />
                {location.pathname !== '/currency' && <Balance />}
              </div>
              <div>
                {(isDesktopOrTable || location.pathname === "/currency") && (
                  <Currency />
                )}
              </div>
            </aside>
            <section className="dashboardPageMain">
              {location.pathname !== '/currency' && <Outlet />}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
