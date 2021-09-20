import react from "react";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Service from "./pages/service";
import About from "./pages/about";
import Navbar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
