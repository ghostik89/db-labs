import {
    Switch,
    Route, Redirect
} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {paths} from "../helpers/paths";
import {HomePage} from "../pages/HomePage";
import {RegisterPage} from "../pages/RegisterPage";

export const useRoutes = (isAuth) => {
    return(
        <Switch>
            {isAuth?
                <>
                    <Route path={paths.toHome}>
                        <HomePage/>
                    </Route>
                    <Redirect to={paths.toHome}/>
                </>:
                <>
                    <Route path={paths.toLogin}>
                        <LoginPage/>
                    </Route>
                    <Route path={paths.toRegister}>
                        <RegisterPage/>
                    </Route>
                    <Redirect to={paths.toLogin}/>
                </>}
        </Switch>
    )
}