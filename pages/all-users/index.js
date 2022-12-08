import Layout from "../../public/components/Layout";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box, Text, VStack, HStack, useTheme, Select, Input, InputGroup, Image, InputRightElement, InputLeftElement, InputRightAddon, Flex, useMediaQuery
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsSearch } from 'react-icons/bs'
import { useNavigation } from "../../public/context/navigationContext";
import { AiOutlineUser } from 'react-icons/ai'
import { TablePreloader } from "../all-products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from '../../public/redux/users/thunkActions'
import moment from "moment";
import UserModal from "./userModal";


const AllUsers = () => {
    const theme = useTheme();
    const { text_2, box_bg } = theme.colors.brand;
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({})
    const { allUsers, loading } = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

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
                        All Users
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        All Registered users on online farms
                    </Text>
                </VStack>

                <VStack
                    marginTop='40px'
                    padding={{ base: "60px 20px", lg: '30px', md: '60px 40px' }}
                    width='100%'
                    borderRadius='7px'
                    align='center'
                    justify='center'
                    backgroundColor='#FFFFFF'
                    border='1px solid #DFE6E9'
                >

                    <HStack
                        justify='space-between'
                        width='100%'
                        flexWrap='wrap'
                    >
                        <Text

                            color={text_2}
                            fontSize={'20px'}
                            fontWeight={500}
                        >
                            User
                        </Text>
                        <HStack
                            spacing='15px'
                            align='center'
                            justify='center'
                        >
                            <Select
                                height='40px'
                                width='140px'
                                borderRadius='10px'
                                border='1px solid #DFE6E9'
                            >
                                <option>Latest</option>

                            </Select>
                            <InputGroup>
                                <InputLeftElement>
                                    <AiOutlineUser />
                                </InputLeftElement>
                                <Input

                                    fontSize='14px'
                                    color='#B2BEC3'
                                    placeholder="Search"
                                    height='40px'
                                    width={{ lg: '240px', md: '240px', base: '150px' }}
                                    borderRadius='10px'
                                    border='1px solid #DFE6E9'
                                />
                            </InputGroup>
                        </HStack>
                    </HStack>

                    <TableContainer width='100%' paddingTop='30px'>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Full name</Th>
                                    <Th>Email</Th>
                                    <Th>Phone</Th>
                                    <Th>Date Joined</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    loading === 'pending'
                                        ? <TablePreloader />
                                        : <>
                                            {
                                                allUsers.map(element => (
                                                    <Tr 
                                                    cursor='pointer'
                                                    key={element._id} onClick={() => {
                                                        setUser(element)
                                                        setIsOpen(!isOpen)
                                                    }}>

                                                        <Td>
                                                            <Text
                                                                color={'#2D3436'}
                                                                fontSize={'14px'}
                                                                fontWeight={300}
                                                                fontFamily='Poppins'
                                                            >
                                                                {element.full_name}
                                                            </Text>

                                                        </Td>
                                                        <Td>
                                                            <Text
                                                                color={'#2D3436'}
                                                                fontSize={'14px'}
                                                                fontWeight={300}
                                                                fontFamily='Poppins'
                                                            >
                                                                {element.email}
                                                            </Text>

                                                        </Td>
                                                        <Td>
                                                            <Text
                                                                color={'#2D3436'}
                                                                fontSize={'14px'}
                                                                fontWeight={300}
                                                                fontFamily='Poppins'
                                                            >
                                                                {moment(element.createdAt).calendar()}
                                                            </Text>

                                                        </Td>
                                                        <Td>
                                                            <Text
                                                                color={'#2D3436'}
                                                                fontSize={'14px'}
                                                                fontWeight={300}
                                                                fontFamily='Poppins'
                                                            >
                                                                {element.phone}
                                                            </Text>

                                                        </Td>

                                                        <Td>
                                                            <HStack
                                                                align='center'
                                                                justify='center'
                                                                padding='6px 10px'
                                                                borderRadius='10px'
                                                                border='1px solid #FF3B30'
                                                                backgroundColor='#FCE8EC'
                                                            >
                                                                <Text
                                                                    color={'#FF3B30'}
                                                                    fontSize={'14px'}
                                                                    fontWeight={400}
                                                                    fontFamily='Poppins'
                                                                >{element.status}</Text>
                                                            </HStack>
                                                        </Td>
                                                    </Tr>
                                                ))
                                            }
                                        </>
                                }
                            </Tbody>

                        </Table>
                    </TableContainer>
                    <UserModal
                        user={user}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />

                </VStack>
            </Box>
        </Layout>
    )
}

export default AllUsers