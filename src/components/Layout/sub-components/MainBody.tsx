import {FC} from "react";
import styled from "@emotion/styled";
import {SideNavBar} from "./index.ts";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";


const Main = styled('main')(() => {
    return {
        maxWidth: 1440,
        backgroundColor: 'red',
        minHeight: '100vh',
        display: 'flex',
    }
})

const MainBody: FC = () => {
    return <Main>
        <SideNavBar/>
        <Box>
            <Outlet/>
        </Box>
    </Main>
}

export default MainBody