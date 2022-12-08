import {
    Text,
    Avatar,
    Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Image, Box,
    useMediaQuery
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from "react";
import { Toaster } from "react-hot-toast";



const AuthLayout = ({ children }) => {

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    return (
        <HStack
            align='center'
            justify='space-between'
            height='100vh'
            width='100%'
            backgroundColor='#fff'
        >
            <VStack
                width={{
                    base: '100%', md: '100%', lg: '50%'
                }}
                align='center'
                justify='center'
                height='100vh'
                overflow='scroll'
                backgroundColor='#fff'

            >
                {children}
            </VStack>
            {isLargerThan800 && (
                <VStack
                    height='100vh'
                    width='50%'
                    align='center'
                    spacing='20px'
                    justify='center'
                    bgSize='cover'
                    backgroundRepeat='no-repeat'
                    bgPos='right'
                    bgImage={{
                        base: 'url("/images/img/bg.jpg")'
                    }}
                >

                </VStack>
            )}
            <Toaster />
        </HStack>
    )
}

export default AuthLayout