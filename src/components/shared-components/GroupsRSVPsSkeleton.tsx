import { FC } from "react";
import { Box, styled } from "@mui/material";

const SkeletonBody = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
    justifyContent: "space-between",
    ".avatar": {
      width: 64,
      height: 34,
      background: "#ECEDF0",
      borderRadius: 16,
    },

    ".message-section": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      ".sender-name": {
        width: 93,
        height: 15,
        borderRadius: 5,
        background: "#ECEDF0",
      },
      ".message-text": {
        width: 170,
        height: 14,
        borderRadius: 5,
        background: "#ECEDF0",
      },
    },
  };
});
const GroupsRSVPsSkeleton: FC = () => {
  return (
    <SkeletonBody>
      <div className={"message-section"}>
        <div className={"message-text"} />
        <div className={"sender-name"} />
      </div>
      <div className={"avatar"} />
    </SkeletonBody>
  );
};

export default GroupsRSVPsSkeleton;
