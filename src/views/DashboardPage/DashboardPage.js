import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency";

// import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';

import '../../css/main.min.css';

function DashboardPage() {
  const location = useLocation();

  const isDesktopOrTable = useMediaQuery({
    query: '(min-width: 768px)'
  })

  console.log("isDesktopOrTable", isDesktopOrTable)

  return (
    <>
      <Header/>
      <main className="dashboardMain">
        <div className="dashboardPageContainer">
          <div className=" container dashboardPageWrap">
            <aside className="dashboardPageSidebar">
              <div className="dashboardPageIner">
                <Navigation />
                {(location.pathname !== "/currency") && <Balance/>}               
              </div>
                {(isDesktopOrTable ||location.pathname === "/currency")&& <Currency/>}
            </aside>
            <section className="dashboardPageMain">
               {(location.pathname !== "/currency") && <Outlet />}               
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardPage;