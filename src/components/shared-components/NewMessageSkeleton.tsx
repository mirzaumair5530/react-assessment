import { FC } from "react";
import { Box, styled } from "@mui/material";

const SkeletonBody = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
    ".avatar": {
      width: 40,
      height: 40,
      background: "#ECEDF0",
      borderRadius: "50%",
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

const NewMessageSkeleton: FC = () => {
  return (
    <SkeletonBody>
      <div className={"avatar"} />
      <div className={"message-section"}>
        <div className={"sender-name"} />
        <div className={"message-text"} />
      </div>
    </SkeletonBody>
  );
};

export default NewMessageSkeleton;
