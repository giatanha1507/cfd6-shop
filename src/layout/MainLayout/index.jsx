import React from "react";
import {
  ModalNewHor,
  ModalNewVer,
  ModalPassReset,
  ModalProduct,
  ModalSearch,
  ModalShopping,
  ModalSidebar,
  ModalSize,
  ModalWait,
} from "../../component";
import { Footer, Header } from "./component";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ModalNewHor />
      <ModalNewVer />
      <ModalPassReset />
      <ModalProduct />
      <ModalSearch />
      <ModalShopping />
      <ModalSidebar />
      <ModalSize />
      <ModalWait />
      {children}
      <Footer />
    </>
  );
};
