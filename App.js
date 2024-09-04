import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Cards from "./Card";
import data from "./Data";

export default function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
