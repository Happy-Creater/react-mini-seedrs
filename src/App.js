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
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import { useState } from "react";
import Header from "./components/header/Header";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Roboto+Mono:wght@100;200;300;400;500&display=swap"
  rel="stylesheet"
></link>;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const seedrsTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#7FBB30",
        light: "#23a393",
        // light: "#a06ee1",
        // light: "#64e291",
      },
      secondary: {
        // main: "#F5F6F8",
        main: "#FFFFFF",
      },
      background: {
        paper: "#F5F5F5",
        // main: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "'Lato', sans-serif",
    },
  });

  const crowdcubeTheme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        paper: "#222222",
      },
      primary: {
        main: "#FF5100",
        light: "#222222",
      },
      secondary: {
        main: "#333333",
      },
    },
    typography: {
      fontFamily: "'Roboto Mono', monospace",
    },
  });

  return (
    <ThemeProvider theme={darkMode ? crowdcubeTheme : seedrsTheme}>
      <Paper style={{ height: "100%" }}>
        <Header checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Router>
          <Switch>
            <Route exact path="/" component={CampaignsPage} />
            <Route exact path="/:id" component={InvestPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="404" />
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
