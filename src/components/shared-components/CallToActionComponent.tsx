import { FC } from "react";
import { Card, styled, Link } from "@mui/material";
import CardContent, { cardContentClasses } from "@mui/material/CardContent";
import Button, { buttonClasses } from "@mui/material/Button";
import CardMedia, { cardMediaClasses } from "@mui/material/CardMedia";

const CustomCard = styled(Card)(() => {
  return {
    position: "relative",
    borderRadius: 14,
    boxShadow: "0px 1.701px 5.104px 0px rgba(0, 0, 0, 0.06) !important",
    [`.${cardMediaClasses.root}`]: {
      height: 264,
      background: "lightgray 50% / cover no-repeat",
    },
    [`.${cardContentClasses.root}`]: {
      position: "absolute",
      bottom: 0,
      background: "#FFFFFF",
      textAlign: "center",
      left: 0,
      right: 0,
      padding: "1.25rem 0.875rem",
      [`.${buttonClasses.outlined}`]: {
        borderRadius: 24,
        width: "100%",
        border: "2px solid #000",
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
        color: "#000",
      },
    },
  };
});
const CallToActionComponent: FC = () => {
  return (
    <CustomCard elevation={2}>
      <CardMedia image={"./CallOfActionMedia.jpeg"} />
      <CardContent>
        <Button component={Link} href={'https://google.com'} variant={"outlined"}>Learn More</Button>
      </CardContent>
    </CustomCard>
  );
};

export default CallToActionComponent;
