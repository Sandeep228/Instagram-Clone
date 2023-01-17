import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../core/store";
import { ROUTES } from "../constants/routepath";

interface Props {
  children: React.ReactNode;
}

const Authenticate = (props: Props) => {
  const { children } = props;
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.AUTH_PAGE} />;
  }
  return children;
};

export default Authenticate;
