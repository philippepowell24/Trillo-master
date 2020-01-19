import React from "react";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";
import CallToAction from "./CallToAction";

const Hotel = () => (
  <main className="hotel-view">
    <Gallery />
    <Overview />
    <Detail />
    <CallToAction />
  </main>
);

export default Hotel;
