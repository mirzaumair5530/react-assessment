import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const WildCard: FC = () => {
  return (
    <Box
      p={"1rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={"1rem"}
      height="calc(100% - 2rem)"
    >
      <Typography variant={"h4"}>The page in progress</Typography>
      <Button component={Link} to={"/home-feed"} variant={"contained"}>
        Go to home feed
      </Button>
    </Box>
  );
};

export default WildCard;
