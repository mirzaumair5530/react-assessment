import { FC } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  DeleteIcon,
  DraggableIcon,
  EyeIcon,
  MobileIcon,
  MobileIcon2,
} from "@src/components/svg-icons";
import { ItemCard } from "@src/components/shared-components";

const Container = styled(Box)(() => {
  return {
    display: "flex",
    height: "100%",
    "& .home-feed-content-left": {
      display: "flex",
      flexDirection: "column",
      flexBasis: "28%",
      maxWidth: "calc(375px - 3rem)",
      boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.08)",
      padding: "2.25rem 1.5rem 1.5rem 1.5rem",
      "& .upper-section": {
        borderBottom: "1px solid #ECEDF0;",
      },
    },
    "& .home-feed-content-preview": {
      padding: "2.5rem",
      flexGrow: 1,

      "& .home-feed-list": {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        flexBasis: "40%",
        maxWidth: 392,
      },
    },
  };
});
const HomeFeed: FC = () => {
  return (
    <Container>
      <Box className={"home-feed-content-left"}>
        <Box className={"upper-section"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"9px"} ml={"1rem"}>
              <MobileIcon />
              <Typography
                fontSize={"1.75rem"}
                variant={"h5"}
                fontWeight={"bolder"}
              >
                Home Feed
              </Typography>
            </Box>
            <Box>
              <IconButton size={"large"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M0.743164 6.56445C0.743164 7.0498 1.14648 7.44629 1.625 7.44629H5.64453V11.4658C5.64453 11.9512 6.04102 12.3477 6.52637 12.3477C7.01172 12.3477 7.4082 11.9512 7.4082 11.4658V7.44629H11.4277C11.9131 7.44629 12.3096 7.0498 12.3096 6.56445C12.3096 6.0791 11.9131 5.68262 11.4277 5.68262H7.4082V1.66309C7.4082 1.18457 7.01172 0.78125 6.52637 0.78125C6.04102 0.78125 5.64453 1.18457 5.64453 1.66309V5.68262H1.625C1.14648 5.68262 0.743164 6.0791 0.743164 6.56445Z"
                    fill="#222224"
                  />
                </svg>
              </IconButton>
            </Box>
          </Box>
          <Box pt={"2rem"} mb={"1rem"} className={""}>
            <ItemCard icon={<MobileIcon2 />} variant={"contained"}>
              <Typography fontSize={"1.125rem"} fontWeight={"bold"}>
                Live Preview
              </Typography>
            </ItemCard>
          </Box>
        </Box>
        <Box
          mt={"2rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
        >
          <ItemCard icon={<>☝️️</>}>
            <Typography fontSize={"1.125rem"} fontWeight={"bold"}>
              Call to Action
            </Typography>
          </ItemCard>

          <ItemCard icon={<>✅</>}>
            <Typography fontSize={"1.125rem"} fontWeight={"bold"}>
              Todo
            </Typography>
          </ItemCard>
        </Box>
      </Box>
      <Box className={"home-feed-content-preview"}>
        <Box className={"home-feed-list"} mt={"3.0625rem"}>
          <ItemCard
            variant={"outlined"}
            iconStyles={{ fontSize: "1rem" }}
            p={"0.75rem"}
            icon={<DraggableIcon />}
          >
            <Typography fontSize={"1.125rem"} fontWeight={"bold"}>
              <Box display={"flex"} alignItems={"center"} gap={"0.75rem"}>
                <div>☝️️</div>
                <Typography fontSize={"1.125rem"} fontWeight={"bold"}>
                  Call to Action
                </Typography>
              </Box>
            </Typography>
          </ItemCard>
          <ItemCard
            variant={"outlined"}
            iconStyles={{ fontSize: "1rem" }}
            p={"0.75rem"}
            icon={<DraggableIcon />}
            childrenStyles={{
              flexGrow: 1,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                flexGrow={1}
                display={"flex"}
                alignItems={"center"}
                gap={"0.75rem"}
              >
                <Box fontSize={"1.125rem"}>✅</Box>
                <Typography fontSize={"1.125rem"} fontWeight={"bold"}>
                  Todo
                </Typography>
              </Box>

              <Box display={"flex"} alignItems={"center"} gap={"0.75rem"}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EyeIcon />
                </IconButton>
              </Box>
            </Box>
          </ItemCard>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeFeed;
