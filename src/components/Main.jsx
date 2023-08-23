import { useContext } from "react";
import { Context } from "../App";
import Hero from "./Hero";
import ChefBot from "./ChefBot";
import FoodImg from "./FoodImg";

function Main() {

  const { showChefBot, isActive } = useContext(Context);

  return (
    <section className={`main ${isActive ? 'active' : ''}`}>
      <Hero />
      {!showChefBot ? <FoodImg /> : <ChefBot />}
    </section>
  );
}

export default Main;
