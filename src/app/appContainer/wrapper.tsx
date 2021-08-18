
import { Box, Container, Divider, Flex, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon"
import React from "react";
import Header from "./header";
import NavigationContent from "./navigation"
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/hooks";
import { AppDrawerListItem } from "./drawerNavigation";
import { useBreakpointValue } from '@chakra-ui/react';

const Screen: React.FC<{}> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isMd = useBreakpointValue({md:true})
    const btnRef = React.useRef()

    return <Container maxW="container.xl" >
        <Header drawer={{
            btnRef: btnRef,
            onOpen: onOpen,
            onClose
        }} />
        <Flex pt="70px">
            <Box w="250px" display={isMd== true?"block":"none"} px="16px">
                {AppDrawerListItem}
            </Box>
            <Box p={"24px"}>
                <NavigationContent />
            </Box>
        </Flex>
    </Container>
}

export type AppDrawerNavigationProps = {
    navSections: { sectionLable: string, links: { lable: string, link: string, action: Function }[] }[]
}


export default Screen;