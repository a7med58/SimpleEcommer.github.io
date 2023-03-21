import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBars from "../NavBar/NavBars";

const LayOut = () => {
  return (
    <Fragment>
      <NavBars />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default LayOut;
