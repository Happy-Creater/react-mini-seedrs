import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//Pages
import CampaignsPage from "./pages/CampaignsPage";
import NotFoundPage from "./pages/NotFoundPage";
import InvestPage from "./pages/InvestPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CampaignsPage} />
        <Route exact path="/:id" component={InvestPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="404" />
      </Switch>
    </Router>
  );
}

export default App;
