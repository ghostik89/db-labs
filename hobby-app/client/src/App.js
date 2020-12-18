import './App.css';
import 'materialize-css'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";

function App() {
    const routes = useRoutes(true)
      return (
          <Router>
              {routes}
          </Router>
      );
}

export default App;
