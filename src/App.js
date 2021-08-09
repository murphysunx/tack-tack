// import logo from "./logo.svg";
import "./App.css";

import "./components/Menu";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex vh-100">
      <div className="col-2 menu">
        <Menu />
      </div>
      <div className="col-5 items">Items</div>
      <div className="col-5 item-detail">Item Detail</div>
    </div>
  );
}

export default App;
