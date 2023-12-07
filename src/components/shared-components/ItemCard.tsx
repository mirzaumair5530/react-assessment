import {FC, ReactNode, PropsWithChildren} from "react";
import styled from "@emotion/styled";
import {Box, BoxProps} from "@mui/material";


const CustomItemCard = styled(Box, {
    shouldForwardProp: propName => !['variant'].includes(propName)
})<{ variant?: 'outlined' | "contained" | undefined }>(({variant}) => {
    return {
        display: "flex",
        alignItems: "center",
        borderRadius: 12,
        gap: '1rem',
        backgroundColor: variant === 'contained' ? '#ECEDF0' : 'transparent',
        border: '1px solid' + (variant === 'outlined' ? '#ECEDF0' : 'transparent')
    }
})


interface ItemCardProps {
    icon: ReactNode,
    iconStyles?: BoxProps,
    variant?: 'outlined' | "contained" | undefined,
    childrenStyles?: BoxProps,
}

const ItemCard: FC<ItemCardProps & PropsWithChildren & BoxProps> = ({icon, variant, children, iconStyles, childrenStyles, ...rest}) => {
    return <CustomItemCard p={'1rem'} variant={variant} {...rest}>
        <Box fontSize={'1.75rem'} {...iconStyles} className={'item-icon'}>
            {icon}
        </Box>
        <Box {...childrenStyles}>
            {children}
        </Box>
    </CustomItemCard>
}

export default ItemCard