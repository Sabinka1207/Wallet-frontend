// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import '../../css/main.min.css';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';
import { Outlet } from 'react-router-dom';

// import MainTab from "../../components//MainTab/MainTab";

function DashboardPage() {
  // const dispatch = useDispatch();
  // const load = useSelector(getLoader);

  // useEffect(() => {
  //   dispatch(fetchTrasaction());
  // }, [dispatch]);

  // useEffect(() => {
  //       async function getCurrency() {
  //     try {
  //       const response = await axios.get(
  //         "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
  //       );

  //       const currencyArray = response.data.filter(
  //         (item) => item.ccy !== "RUR"
  //       );

  //       setCurrency(currencyArray);
  //       setLoad(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // });

  return (
    <>
      <Header></Header>
      <main className="dashboardMain">
        <div className="dashboardPageContainer">
          <div className=" container dashboardPageWrap">
            <aside className="dashboardPageSidebar">
              <div className="dashboardPageIner">
                <Navigation></Navigation>
                <Balance></Balance>
              </div>
              <Currency></Currency>
            </aside>
            <section className="dashboardPageMain">
              <DiagramTab />
              {/* <MainTab></MainTab> */}
              <Outlet />;
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default DashboardPage;
