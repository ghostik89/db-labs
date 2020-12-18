import {
    Switch,
    Route
} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {paths} from "../helpers/paths";
import {HomePage} from "../pages/HomePage";

export const useRoutes = (isAuth) => {
    return(
        <Switch>
            {isAuth?
                <>
                    <Route path={paths.toHome}>
                        <HomePage/>
                    </Route>
                </>:
                <>
                    <Route path={paths.toLogin}>
                        <LoginPage/>
                    </Route>
                </>}
        </Switch>
    )
}