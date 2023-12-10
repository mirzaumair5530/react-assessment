import { FC } from "react";
import { Box, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  GroupPeopleIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  TodoIcon,
} from "@src/components/svg-icons";

const MobileContainer = styled(Box)(() => {
  return {
    height: 724,
    width: 353,
    borderRadius: 60,
    border: "17px solid #000",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",

    "& .mobile-preview-top-nav": {
      padding: " 2.375rem  1.0625rem 0.8125rem 1.0625rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#FFF",
      boxShadow: "0px 0px 16.995px 0px rgba(0, 0, 0, 0.06)",
    },

    "& .mobile-preview-body": {
      flexGrow: 1,
    },

    "& .mobile-preview-bottom-nav": {
      padding: " 1rem  2.5rem 2rem 2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#FFF",
      boxShadow: "0px 0px 16.995px 0px rgba(0, 0, 0, 0.06)",
      position: "relative",
      "& .navigation-line": {
        position: "absolute",
        width: 114,
        height: 4,
        background: "#000",
        borderRadius: 2,
        bottom: 7,
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
  };
});

const MobilePreview: FC = () => {
  return (
    <MobileContainer>
      <Box className={"mobile-preview-top-nav"}>
        <IconButton>
          <UserIcon />
        </IconButton>
        <IconButton>
          <TodoIcon />
        </IconButton>
      </Box>
      <Box className={"mobile-preview-body"}></Box>
      <Box className={"mobile-preview-bottom-nav"}>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <GroupPeopleIcon />
        </IconButton>
        <IconButton>
          <InboxIcon />
        </IconButton>
        <div className={"navigation-line"}></div>
      </Box>
    </MobileContainer>
  );
};

export default MobilePreview;
