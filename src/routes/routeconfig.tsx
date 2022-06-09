import { useRoutes } from "react-router-dom";
import { AboutPage } from "../pages/about";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import Logout from '../components/Logout/Logout'
import ListUser from "../pages/user/ListUser/ListUser";
import GuardedRoute from "./routeGuard";
import SignUp from "../pages/signup";
import Forgot from "../pages/forgot";


//central routing page 

const AppRoutes = () => {

    const routes = useRoutes(
        [
            {
                path: "/login", element: <LoginPage />
            },
            {
                path: "/logout", element: <Logout />
            },
            {
                path: "/signup", element: <SignUp />
            },
            {
                path: "/forgot", element: <Forgot />
            },  
            // routes are wrapped inside gaurded routes for checking if user is logged in
            // allowed roles props is passed to check if the user's role has access to that page. 
            {
                path: "/",
                element: <GuardedRoute allowedRoles={['super-admin', 'admin', 'visitor']}><HomePage /></GuardedRoute>,
                children: [
                    {
                        path: "/dashboard",
                        element: <GuardedRoute allowedRoles={['super-admin', 'admin', 'visitor']}><DashboardPage /></GuardedRoute>
                    },
                    {
                        path: "/about",
                        element: <GuardedRoute allowedRoles={['super-admin', 'admin']}><AboutPage /></GuardedRoute>
                    },

                    { path: "list", element: <GuardedRoute 
                                allowedRoles={["super-admin",'admin']}><ListUser /></GuardedRoute> },
                ]
            },
        ]
    )
    return routes;
}
export default AppRoutes

