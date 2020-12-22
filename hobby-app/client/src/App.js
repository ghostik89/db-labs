import './App.css';
import 'materialize-css'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";
import {useAuth} from "./hooks/useAuth";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {token, login, userId, logout} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)
      return (
          <AuthContext.Provider value={{
              token, login, logout, userId, isAuth
          }}>
              <Router>
                  {routes}
              </Router>
          </AuthContext.Provider>
      );
}

export default App;
