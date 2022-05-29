import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RegistrationPage from "./Components/pages/RegistrationPage";
import Home from "./Components/pages/Home ";
import Header from "./Components/pages/Header";

function App() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/registration-page" />
          </Route>

          <Route exact path="/registration-page" component={RegistrationPage} />
          <Route path="/home" component={Home} />
          <Route path="/header" component={Header} />
        </Switch>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
