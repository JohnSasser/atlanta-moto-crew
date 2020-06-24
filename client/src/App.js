// REACT & HOOKS
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// root css
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/"]} component={Home} />

          <Route exact path={["/contact"]} component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
