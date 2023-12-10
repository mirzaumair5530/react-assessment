import { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  GroupPeopleIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  TodoIcon,
} from "@src/components/svg-icons";
import {
  NewMessageSkeleton,
  GroupsRSVPsSkeleton,
  CallToActionComponent,
  ToDoItemComponent,
} from "@src/components/shared-components";
import { useAppContext } from "@src/contexts/AppContext";

const MobileContainer = styled(Box)(() => {
  return {
    height: 760,
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
      paddingInline: "1rem",
      maxHeight: "calc(100% - 190px)",
      overflow: "hidden",
      overflowY: "auto",
      ".body-upper-section": {
        ".section-heading": {
          color: "#7F7F82",
          paddingBlock: "1.25rem 0.375rem ",
          marginBottom: "1rem",
          fontSize: "0.75rem",
        },
        paddingBottom: "1.375rem",
        borderBottom: "1px solid #F5F5F5",
      },
      ".body-bottom-section": {
        paddingBlockStart: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.875rem",
      },
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
  const { data } = useAppContext();
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
      <Box className={"mobile-preview-body"}>
        <Box className={"body-upper-section"}>
          <Box className={"new-message-section"}>
            <Typography className={"section-heading"}>New messages</Typography>
            <NewMessageSkeleton />
          </Box>

          <Box className={"group-event-section"}>
            <Typography className={"section-heading"}>Group RSVPs</Typography>
            <GroupsRSVPsSkeleton />
          </Box>
        </Box>
        <Box className={"body-bottom-section"}>
          {data
            .filter((item) => !item.hidden)
            .map((item, index) => {
              switch (item.type) {
                case "todo": {
                  return <ToDoItemComponent index={index} />;
                }
                case "action": {
                  return <CallToActionComponent index={index} />;
                }
                default: {
                  return null;
                }
              }
            })}
        </Box>
      </Box>
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
