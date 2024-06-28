import { Outlet } from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar";
import BreadCrumps from "../components/BreadCrumps";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <BreadCrumps />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
