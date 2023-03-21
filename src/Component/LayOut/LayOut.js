import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBars from "../NavBar/NavBars";

const LayOut = () => {
  return (
    <Fragment>
      <NavBars />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default LayOut;
