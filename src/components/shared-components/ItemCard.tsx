import { FC, ReactNode, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";
import { iconButtonClasses } from "@mui/material/IconButton";

const CustomItemCard = styled(Box, {
  shouldForwardProp: (propName) =>
    !["variant", "background", "iconHoverColor"].includes(propName),
})<{
  variant?: "outlined" | "contained" | undefined;
  background?: string;
  iconHoverColor?: string;
}>(({ variant, background, iconHoverColor }) => {
  return {
    display: "flex",
    alignItems: "center",
    borderRadius: 12,
    gap: "1rem",
    backgroundColor: background
      ? background
      : variant === "contained"
        ? "#ECEDF0"
        : "#FFFFFF",
    border: "1px solid" + (variant === "outlined" ? "#ECEDF0" : "transparent"),

    ...(iconHoverColor && {
      [`&:hover`]: {
        [`.${iconButtonClasses.root}, .item-icon`]: {
          "svg path": {
            fill: iconHoverColor || "#000",
          },
        },
      },
    }),
  };
});

interface ItemCardProps {
  icon: ReactNode;
  iconHoverColor?: string;
  iconStyles?: BoxProps;
  variant?: "outlined" | "contained" | undefined;
  childrenStyles?: BoxProps;
  background?: string;
}

const ItemCard: FC<ItemCardProps & PropsWithChildren & BoxProps> = ({
  icon,
  variant,
  children,
  iconStyles,
  childrenStyles,
  className,
  ...rest
}) => {
  return (
    <CustomItemCard
      className={"custom-item-card " + className}
      p={"1rem"}
      variant={variant}
      {...rest}
    >
      <Box fontSize={"1.75rem"} {...iconStyles} className={"item-icon"}>
        {icon}
      </Box>
      <Box {...childrenStyles}>{children}</Box>
    </CustomItemCard>
  );
};

export default ItemCard;
