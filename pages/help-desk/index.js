import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'

const Help = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('US');

    const { text_2, btn } = theme.colors.brand;
    return (
        <Layout>
            <Box
                padding={{
                    lg: '45px 30px', md: '45px 30px', base: '100px 20px'
                }}
            >
                <VStack
                    align='flex-start'
                    spacing='20px'
                >
                    <Text
                        color={text_2}
                        fontSize={'28px'}
                        fontWeight={500}
                    >
                        Add new Product
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Catalogue a new product, input the details and description to reach your buyers easily
                    </Text>
                </VStack>

                <VStack
                    marginTop='40px'
                    padding={{ base: "60px 20px", lg: '60px 100px', md: '60px 40px' }}
                    width='100%'
                    borderRadius='7px'
                    align='center'
                    justify='center'
                    backgroundColor='#FFFFFF'
                    border='1px solid #DFE6E9'
                >

                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >

                        <Text
                            fontSize='16px'
                            color='#333F51'
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Product name</Text>
                        <Input
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingLeft='20px'
                            border='1px solid rgba(0,0,0,0.1)'
                            placeholder="name"
                        />
                    </VStack>

                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >
                        <Text
                            fontSize='16px'
                            color='#333F51'
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Product Type</Text>
                        <Select
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingTop='10px'
                            border='1px solid rgba(0,0,0,0.1)'

                            placeholder='physical'>
                            <option value='option1'>bulk buy</option>
                            <option value='option2'>retail buy</option>
                        </Select>
                    </VStack>


                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >

                        <Text
                            fontSize='16px'
                            color='#333F51'
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Price</Text>
                        <Input
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingLeft='20px'
                            border='1px solid rgba(0,0,0,0.1)'
                            placeholder="Price"
                        />
                    </VStack>



                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >

                        <Text
                            fontSize='16px'
                            color='#333F51'
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Category</Text>
                        <Input
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingLeft='20px'
                            border='1px solid rgba(0,0,0,0.1)'
                            placeholder="Category"
                        />
                    </VStack>

                    <HStack
                        width='100%'
                        paddingTop={'30px'}
                        flexWrap='wrap'
                        justify='space-between'
                    >
                        <HStack
                            justify='center'
                            align='center'
                            width={{ base: '45%', md: '250px', lg: '250px' }}
                            borderRadius='10px'
                            height='198px'
                            border='1px dotted #10B6E8'
                        >
                            <HStack
                                bgPos='center'
                                bgSize='contain'
                                width='97%'
                                bgRepeat='no-repeat'
                                height='97%'
                                padding='10px'
                                justify='flex-end'
                                align='flex-start'
                                bgImage={{
                                    base: 'url("/images/img/tst.png")',
                                }}
                            >
                                <HStack

                                    height='23px'
                                    width='114px'
                                    borderRadius='2px'
                                    backgroundColor='#FFF1F1'
                                >
                                    <AiFillCloseCircle fill='red' />
                                    <Text
                                        fontSize='12px'
                                        color='red'
                                    >
                                        Remove Image
                                    </Text>
                                </HStack>

                            </HStack>
                        </HStack>
                    </HStack>

                    <Box height='40px' />
                    <HStack
                        width='100%'
                        align='center'
                        justify='space-between'
                        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                    >


                        <Button
                            marginTop='40px'
                            alignSelf='center'
                            color='#fff'
                            backgroundColor={btn}
                            height='56px'
                            fontWeight={500}
                            width={{ base: '100%', md: '300px', lg: '300px' }}
                        >
                            Submit
                        </Button>

                    </HStack>


                </VStack>
            </Box>
        </Layout>
    )
}

export default Help