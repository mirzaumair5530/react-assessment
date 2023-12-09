import { FC } from "react";
import { Box, styled } from "@mui/material";
import { GroupPeopleIcon, HomeIcon } from "@src/components/svg-icons";
import InboxIcon from "../svg-icons/InboxIcon.tsx";
import IconButton from "@mui/material/IconButton";

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
        left:'50%',
        transform: "translateX(-50%)"
      },
    },
  };
});

const MobilePreview: FC = () => {
  return (
    <MobileContainer>
      <Box className={"mobile-preview-top-nav"}>
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8692 22.4116C20.3878 21.3329 19.6045 20.4166 18.6138 19.7733C17.6232 19.1301 16.4674 18.7873 15.2862 18.7865C14.105 18.7873 12.9493 19.1301 11.9586 19.7733C10.9679 20.4166 10.1846 21.3329 9.70326 22.4116"
            stroke="#8C10FE"
            strokeWidth="1.69953"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.2862 14.1978C16.9757 14.1978 18.3454 12.8281 18.3454 11.1386C18.3454 9.4491 16.9757 8.07947 15.2862 8.07947C13.5967 8.07947 12.2271 9.4491 12.2271 11.1386C12.2271 12.8281 13.5967 14.1978 15.2862 14.1978Z"
            stroke="#8C10FE"
            strokeWidth="1.69953"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.2862 29.4935C22.8891 29.4935 29.0524 23.3302 29.0524 15.7273C29.0524 8.12446 22.8891 1.96112 15.2862 1.96112C7.68336 1.96112 1.52002 8.12446 1.52002 15.7273C1.52002 23.3302 7.68336 29.4935 15.2862 29.4935Z"
            stroke="#222224"
            strokeWidth="1.69953"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="25"
          height="27"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8017 3.81378H4.93081C3.28822 3.81378 1.95663 5.08196 1.95663 6.64633V22.2254C1.95663 23.7897 3.28822 25.0579 4.93081 25.0579H19.8017C21.4443 25.0579 22.7759 23.7897 22.7759 22.2254V6.64633C22.7759 5.08196 21.4443 3.81378 19.8017 3.81378Z"
            stroke="#222224"
            strokeWidth="1.69953"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.3404 2.39749H9.39209V5.23004H15.3404V2.39749Z"
            stroke="#222224"
            strokeWidth="1.69953"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.29166 15.5122L10.8197 17.9199L16.3517 12.6371"
            stroke="#8C10FE"
            strokeWidth="1.69953"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
