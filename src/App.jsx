import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const Context = createContext("");

function App() {

  const [showChefBot, setShowChefBot] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <Context.Provider
      value={{ showChefBot, setShowChefBot, isActive, setIsActive }}
    >
      <>
        <section className="main-container">
          <Navbar />
          <Main />
        </section>
        <section className="footer-container">
          <Footer />
        </section>
      </>
    </Context.Provider>
  );
}

export default App;
