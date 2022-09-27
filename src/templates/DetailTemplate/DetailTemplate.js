import { Fragment, useEffect } from "react";
import {Outlet} from "react-router-dom"

export const DetailTemplate = (props) => {
  return (
          <Fragment>
            <Outlet/>
          </Fragment>
        );
};
