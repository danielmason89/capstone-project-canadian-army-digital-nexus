import React from "react";
import { Button, Heading, Text, ButtonGroup, Spacer, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from "next/link";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.400", "gray.700")
    return (
        <Flex className="nav" as="nav" align="center" justify="space-between" wrap="wrap" pr={5} pb={6}>
            <Heading as="h1" p="4" size="lg" letterSpacing="-.05rem">
                Digital Nexus: Idea Management
            </Heading>
            <Spacer />
            <Flex direction="column" background={formBackground} p={6} mt={4} rounded={6}>
                <Text as="p" mb={2}>
                    Signed in as: <a herf="#login">Dan Mason</a>
                </Text>
                <ButtonGroup spacing='2'>
                    <Button aria-label={"login-button"} colorScheme='teal'>Log In</Button>
                    <Link href="" passHref>
                        <Button aria-label={"logout-button"}>Log Out</Button>
                    </Link>
                    <Button aria-label={"toggle-theme-button"} onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
                </ButtonGroup>
            </Flex >
        </Flex>
    )
}

export default Header
