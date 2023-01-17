import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routepath";
import Authenticate from "./Authenticate";
import React from "react";

const AuthComponent = React.lazy(() => import("../pages/Auth/Auth"));
const HomeComponent = React.lazy(() => import("../pages/Home/Home"));
const ProfileComponent = React.lazy(() =>
  import("../pages/ProfilePage/ProfilePage")
);
const UserCompoent= React.lazy(() =>import("../components/Profile/Profile"));

const HomeRoutes = () => {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <Router>
        <Routes>
          <Route element={<AuthComponent />} path={ROUTES.AUTH_PAGE} />
          <Route
            path={ROUTES.HOME_PAGE}
            element={
              <Authenticate>
                <HomeComponent />
              </Authenticate>
            }
          />
          <Route
            path={ROUTES.PROFILE_PAGE}
            element={
              <Authenticate>
                <ProfileComponent />
              </Authenticate>
            }
          />
             <Route
            path={ROUTES.USER_PROFILE}
              element={
              <Authenticate>
                <UserCompoent  />
              </Authenticate>
            }
          />
          <Route path="*" element={<AuthComponent />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default HomeRoutes;
