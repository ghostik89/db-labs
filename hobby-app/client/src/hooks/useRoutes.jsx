import {
    Switch,
    Route, Redirect
} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {paths} from "../helpers/paths";
import {HomePage} from "../pages/HomePage";
import {RegisterPage} from "../pages/RegisterPage";
import {ProductPage} from "../pages/ProductPage";
import {OwnersPageProduct} from "../pages/OwnersPageProduct";
import {UserPage} from "../pages/UserPage";
import {BasketPage} from "../pages/BasketPage";
import {AddProductPage} from "../pages/AddProductPage";

export const useRoutes = (isAuth) => {
    return(
        <Switch>
            {isAuth?
                <>
                    <Route path={paths.toHome} exact>
                        <HomePage/>
                    </Route>
                    <Route path={paths.toProduct}>
                        <ProductPage/>
                    </Route>
                    <Route path={paths.toOwnersProductPage}>
                        <OwnersPageProduct/>
                    </Route>
                    <Route path={paths.toUserAccountPage} exact>
                        <UserPage/>
                    </Route>
                    <Route path={paths.toUsersBasketPage} exact>
                        <BasketPage/>
                    </Route>
                    <Route path={paths.toCreateOwnersProduct} exact>
                        <AddProductPage/>
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