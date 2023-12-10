import { FC } from "react";
import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { sidebarContent } from "./sidebarContent";
import { ExpandIcon } from "@src/components/svg-icons";
import userIconImg from "@src/assets/userIconImg.png";

const NavBar = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 86,
    border: "1px solid #ECEDF0",
    backgroundColor: "#FAFAFA",
    boxShadow: "-2px 0px 0px 0px rgba(0, 0, 0, 0.03) inset",

    "& .navbar-body": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "calc(100% - 2rem)",
      padding: "1rem",
      "& .top-content": {
        flexGrow: 1,
        "& .routes-container svg": {
          width: 24,
          height: 24,
        },
        [`.${iconButtonClasses.root}`]: {
          padding: "1rem",
          borderRadius: 12,
          "&.active": {
            background: "#F2F2F4",
          },
        },
      },
      "& .bottom-content": {
        "&  img": {
          borderRadius: "50%",
          width: "100%",
          maxWidth: 32,
          maxHeight: 32,
        },
      },
    },
  };
});
const SideNavBar: FC = () => {
  const { pathname } = useLocation();
  return (
    <NavBar>
      <Box className={"navbar-body"}>
        <Box className={"top-content"}>
          <ExpandIcon sx={{ marginTop: "1.375rem" }} />
          <Grid
            container
            alignItems={"center"}
            flexDirection={"column"}
            className={"router-container"}
            mt={"2.5rem"}
            gap={"0.5rem"}
          >
            {sidebarContent.map(({ icon, path }, index) => {
              return (
                <Grid item key={index}>
                  <RouterLink to={path}>
                    <IconButton className={path === pathname ? "active" : ""}>
                      {icon}
                    </IconButton>
                  </RouterLink>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box className={"bottom-content"}>
          <img src={userIconImg} alt={"user-icon"} />
        </Box>
      </Box>
    </NavBar>
  );
};

export default SideNavBar;
