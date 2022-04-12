import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency";

// import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';

import '../../css/main.min.css';
// import HomeTab from "../../components/homeTab/HomeTab";
// import DiagramTab from "../../components/DiagramTab/DiagramTab"
function DashboardPage() {
  const location = useLocation();

  const isDesktopOrTable = useMediaQuery({
    query: '(min-width: 768px)'
  })

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
              <div>
                {/* <HomeTab />
                {(location.pathname === "/diagrama") && 
                <DiagramTab />} */}
              </div>
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