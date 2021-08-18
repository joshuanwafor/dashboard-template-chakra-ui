import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Divider, Icon } from "@chakra-ui/react";
import { AppDrawerNavigationProps } from "./wrapper";
import React from "react";

export default {};

const drawerConfig: AppDrawerNavigationProps = {
    navSections: [{
        sectionLable: "Primary", links: [
            {
                lable: "Home",
                link: "",
                action: () => { }
            },
            {
                lable: "About",
                link: "",
                action: () => { }
            }, {
                lable: "Contact",
                link: "",
                action: () => { }
            }, {
                lable: "Action",
                link: "",
                action: () => { }
            }
        ]
    }]
}



const DrawerList: React.FC<AppDrawerNavigationProps> = ({ navSections }) => {
    return <Box px="0" py={0}>
        {navSections.map(navSection => {
            return <Box>
                <Text py="14px">{navSection.sectionLable}</Text>
                <Divider/>
                <Flex direction="column">
                    {navSection.links.map(sectionLink => {
                        return <Box isFullWidth={false} py="14px" display="flex" alignItems="center">
                            <Icon name="infoIcon" />
                            <Box ml={"16px"}>
                                <Link to={sectionLink.link}>
                                    {sectionLink.lable}
                                </Link>
                            </Box>
                        </Box>
                    })}
                </Flex>
            </Box>
        })}
    </Box>
}



export const AppDrawerListItem = <DrawerList navSections={drawerConfig.navSections} />
