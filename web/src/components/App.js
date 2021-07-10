import "../stylesheet/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/card">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route>
          <Landing />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
