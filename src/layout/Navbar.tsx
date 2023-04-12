import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Typography,
  IconButton,
  Navbar as MTNavbar,
  Breadcrumbs,
} from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { sidebarAction } from "../redux/slice/sidebar-slice";
import { INavbar } from "../types/layout/layout-types";

const Navbar: React.FC<INavbar> = ({ routes }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const fixedNavbar = true;

  return (
    <MTNavbar
      color={fixedNavbar ? "gray" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            {page && (
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {page}
              </Typography>
            )}
          </Breadcrumbs>
          {page && (
            <Typography variant="h6" color="blue-gray">
              {page}
            </Typography>
          )}
        </div>
        <div className="flex flex-row-reverse items-center">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => dispatch(sidebarAction.open())}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          {/* <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton> */}
        </div>
      </div>
    </MTNavbar>
  );
};

export default Navbar;
