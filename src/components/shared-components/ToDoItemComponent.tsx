import { FC } from "react";
import { Card, styled, Typography } from "@mui/material";
import CardContent, { cardContentClasses } from "@mui/material/CardContent";

const CustomCard = styled(Card)(() => {
  return {
    borderRadius: 14,
    boxShadow: "0px 1.701px 5.104px 0px rgba(0, 0, 0, 0.06) !important",
    [`.${cardContentClasses.root}`]: {
      display: "flex",
      gap: "0.625rem",
      alignItems: "center",
      padding: "1rem",
      "&:last-child": {
        paddingBottom: "1rem",
      },
    },
  };
});

const ToDoItemComponent: FC = () => {
  return (
    <CustomCard>
      <CardContent>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="14.5" stroke="#ECEDF0" strokeWidth="3" />
            <path
              d="M10.1333 16.0889L13.7436 20L21.8666 11.2"
              stroke="#ECEDF0"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <Typography fontSize={"0.875rem"}>New todo item</Typography>
        </div>
      </CardContent>
    </CustomCard>
  );
};

export default ToDoItemComponent;
