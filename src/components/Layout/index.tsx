import {FC} from 'react';
import {MainBody, SideNavBar} from "./sub-components";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";


const Layout: FC = () => {
    return <MainBody>
        <SideNavBar/>
        <Box flexGrow={1}>
            <Outlet/>
        </Box>
    </MainBody>
}

export default Layout