import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header"

const Layout = ({ children }: any) => {
    return (
        <Box>
            <Header />
            {children}
        </Box>)
}

export default Layout;