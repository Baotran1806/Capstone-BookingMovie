import { Fragment} from "react";
import {USER_LOGIN} from "../../util/settings/config";
import {Outlet,Navigate} from "react-router-dom";

export const CheckoutTemplate = (props) => {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/login" />;
  }
  return (
    <Fragment>
      <Outlet/>
    </Fragment>
  );
  
};

