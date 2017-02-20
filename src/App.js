import "./App.css";
import Row from "./components/row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="All Campaigns" fetchUrl={requests.fetchOpen} />
      <Row title="FinTech Campaigns" fetchUrl={requests.fetchFintech} />
    </div>
  );
}

export default App;
