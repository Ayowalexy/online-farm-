import {
    Box, Flex, Text, HStack,
    ListItem,
    ListIcon,
    List,
    Avatar,
    VStack,
    useMediaQuery,
    Image
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigation } from '../context/navigationContext'
import { navigations, sellers_navigations } from "./navigations";
import { useRouter } from "next/router";
import { userDetails } from "../utils/useAxios";

const SideBar = () => {
    const { active, setActive } = useNavigation();
    const [shrink, setShrink] = useState(false);
    const router = useRouter();
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [isLesserThan1200] = useMediaQuery('(max-width: 1200px)')
    const [bar, setBar] = useState([]);


    useEffect(() => {
        const role = userDetails().role;
        if(role === 'seller'){
            setBar(sellers_navigations)
        } else if(role === 'admin'){
            setBar(navigations)
        }
    }, [])

    useEffect(() => {
        if (isLargerThan600 && isLesserThan1200) {
            setShrink(true)
        }
    }, [isLargerThan600, isLesserThan1200])

    return (

        <VStack
            width={shrink
                ?
                isLargerThan600 && isLesserThan1200
                    ? '7%'
                    : '4%'
                : '18%'}
            height='100vh'
            transition="all ease 500ms"
            backgroundColor='#fff'
            justify='flex-start'
            align='flex-start'
        >


            {
                isLargerThan600 && isLesserThan1200 ?
                    null
                    : (
                        (
                            <HStack
                                onClick={() => setShrink(!shrink)}
                                justify='flex-end'
                                // marginTop='-100px'
                                padding='10px'
                                cursor='pointer'
                                width='100%'
                            >
                                <IoIosArrowBack fill="rgba(0,0,0,0.4)" size='20px' />
                            </HStack>
                        )
                    )
            }
            

            <List width='100%' pt={"50px"} spacing={1}>

                {bar.map((element, idx) => (
                    <ListItem
                        color={active === element.name ? '#53AED5' : '#E7EFFA'}
                        height="56px"
                        width="100%"
                        backgroundColor={active === element.name ? '#E7EFFA' : '#fff'}
                        cursor="pointer"
                        fontFamily="Poppins"
                        transition="all ease 500ms"
                        padding="14px 13px"
                        key={idx}
                        onClick={() => {
                            setActive(element.name)
                            router.push(`/${element.route}`)
                        }}

                    >

                        <HStack>
                            {active === element.name && !shrink ? (<Box transition="all ease 500ms"
                                width='3.5px' marginLeft='-10px' height='20px' backgroundColor='#53AED5' />
                            ) : null}
                            <ListIcon
                                w={25}
                                h={25}
                                as={element.icon}
                                color={active === element.name ? '#53AED5' : '#63708C'}
                            />
                            {!shrink && (
                                <Text

                                    fontStyle="normal"
                                    fontWeight={active === element.name ? 600 : 400}
                                    fontSize="16px"
                                    lineHeight="20px"
                                    letterSpacing="0.2px"
                                    color={active === element.name ? '#53AED5' : '#63708C'}

                                >
                                    {element.name}
                                </Text>
                            )}
                        </HStack>

                    </ListItem>
                ))}
            </List>

        </VStack>

    )
}

export default SideBar