import React from "react";

import Services from "../GloServices/Services";
import DevicesAndNews from "../DevicesAndNews/DevicesAndNews";
import useDocumentTitle from "./UseTitle";

function Home() {
  useDocumentTitle("Home");
  return (
    <>
      <Services />
      <DevicesAndNews />
    </>
  );
}

export default Home;
