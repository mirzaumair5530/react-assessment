import { FC, PropsWithChildren } from "react";
import { styled } from "@mui/material";

const Main = styled("main")(() => {
  return {
    maxWidth: 1440,
    minHeight: 900,
    height: "100vh",
    display: "flex",
  };
});

const MainBody: FC<PropsWithChildren> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainBody;
