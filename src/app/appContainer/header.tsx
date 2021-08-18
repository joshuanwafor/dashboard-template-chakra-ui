import React, { Ref } from "react";
import { IoMdMenu } from "react-icons/io"
import { Box, Flex, Spacer, Avatar, Input, useMediaQuery, useBreakpoint, useBreakpointValue, Container, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider } from "@chakra-ui/react"
import { AddIcon, MoonIcon } from '@chakra-ui/icons';
import { AppDrawerListItem } from "./drawerNavigation";

const Screen: React.FC<{ drawer: { onOpen: Function, btnRef: Ref<any>, onClose: Function } }> = ({ children, drawer }) => {
    let breakPoint = useBreakpointValue({ md: true });

    const DesktopHeader = <Flex alignItems="center" position="sticky">
        <Box p="16px" w={"250px"}>
            Tollgator Here
        </Box>
        <Box flex={1} alignItems="center" justifyItems="center" justifyContent="center" display="flex" >
            <Input placeholder="Search hear..." backgroundColor="rgba(200,200,200,.5)" variant="filled" />
        </Box>
        <Flex p="16px" alignItems="center">
            <MoonIcon mx={"16px"} />
            <Avatar size="sm" />
        </Flex>
    </Flex>;


    return <Flex left="0" position="fixed" width="100%" justifyContent="center" shadow="base">
        <Container maxW="container.xl">
            {breakPoint == true ? DesktopHeader : <MobileHeader />}
        </Container>
    </Flex>
}


const MobileHeader: React.FC<{}> = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef: Ref<any> = React.useRef()


    const MobileHeaderComp = <Flex bgColor="orange.100" position="sticky">
        <Box p="16px" ref={btnRef} onClick={() => onOpen()} alignItems="center">
            <IoMdMenu />
        </Box>
        <Box flex={1} alignItems="center" justifyItems="center" justifyContent="center" display="flex">
            <Input placeholder="Search hear..." backgroundColor="rgba(200,200,200,.5)" />
            <AddIcon mx={"16px"} />
        </Box>
        <Box p="16px">
            <Avatar size="sm" />
        </Box>
    </Flex>;


    return <React.Fragment>

        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
                <Divider/>
                <DrawerBody>
                    {AppDrawerListItem}
                </DrawerBody>
                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        {MobileHeaderComp}
    </React.Fragment>
}


export default Screen;