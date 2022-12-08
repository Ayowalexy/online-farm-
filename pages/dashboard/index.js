import Layout from "../../public/components/Layout";
import { Box, Divider, HStack, useMediaQuery, VStack, useTheme, Text } from "@chakra-ui/react";
import Board from "./board";

const Dashboard = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
    const theme = useTheme();
    const { btn } = theme.colors.brand

    return (
        <Layout>
            <Box
                padding={{
                    lg: '45px 30px', md: '45px 30px', base: '20px'
                }}
            >
                <HStack
                    width='100%'
                    height='300px'
                    align='flex-start'
                    justify='center'
                    backgroundColor='rgba(30, 176, 217, 0.1)'
                    borderTopRightRadius='30px'
                >
                    <Board />

                    <VStack
                        width='25%'
                        align='flex-start'
                    >
                        <HStack>
                            <Box width='40px' height='40px' borderRadius='50%' bgColor='#fff' />
                            <VStack
                                padding='20px'
                                spacing='0px'
                                align='flex-start'
                            >
                                <Text
                                    color={btn}
                                    fontWeight={500}
                                    fontSize='20px'
                                >Andre Johnson</Text>
                                <Text
                                    fontWeight={400}
                                    fontSize='13px'
                                >TOP SELLER</Text>
                            </VStack>
                        </HStack>

                        <HStack>
                            <VStack
                                padding='20px'
                                spacing='0px'
                                align='flex-start'
                            >
                                <Text
                                    color={btn}
                                    fontWeight={500}
                                    fontSize='13px'
                                >Produts solds</Text>
                                <Text
                                    fontWeight={400}
                                    fontSize='18px'
                                >300</Text>
                            </VStack>
                            <HStack
                                backgroundColor=''
                                borderRadius='10px'
                                height='30px'
                                width='30px'
                                align='center'
                                justify='center'
                            >

                            </HStack>
                        </HStack>

                    </VStack>
                </HStack>
            </Box>
        </Layout>
    )
}

export default Dashboard