import "./App.css";
import List from "./components/List";
import Add from "./components/Add";
import Update from "./components/Update";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/add" component={Add} />
          <Route path="/update/:id" component={Update} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
