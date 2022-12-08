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
    Skeleton,
    TableContainer,
    Box, Text, VStack, HStack, useTheme, Select, Input, InputGroup, Image, InputRightElement, InputLeftElement, InputRightAddon, Flex, useMediaQuery, Button
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsSearch } from 'react-icons/bs'
import { getProducts } from "../../public/redux/product/thunkActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "../../public/context/navigationContext";
import { AiOutlineUser, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import ConfirmModal from "../../public/components/confirmModal";
import { editProducts, deleteProducts } from "../../public/redux/product/thunkActions";
import { useEffect, useState } from "react";
import EditModal from "../../public/components/editModal";
import moment from "moment";
import { userDetails } from "../../public/utils/useAxios";

export const TablePreloader = () => (
    <VStack width='100%'>
        <Skeleton height='50px' width='100%' />
        <Skeleton height='50px' width='100%' />
        <Skeleton height='50px' width='100%' />
        <Skeleton height='50px' width='100%' />
        <Skeleton height='50px' width='100%' />
        <Skeleton height='50px' width='100%' />
        <Skeleton height='50px' width='100%' />
    </VStack>
)


const AllProducts = () => {
    const theme = useTheme();
    const { text_2, box_bg } = theme.colors.brand;
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
    const dispatch = useDispatch();
    const { loading, isDeleting, allProducts } = useSelector(state => state.product);
    const { user } = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [selectedProduct, setProduct] = useState({})
    const [details, setDetails] = useState({})
    const router = useRouter();

    useEffect(() => {
        const currentUser = userDetails();
        if (currentUser._id) {
            dispatch(getProducts(currentUser._id))
        }
    }, [user])

    useEffect(() => {
        setDetails(selectedProduct)
    }, [selectedProduct])

    const handleDelete = async () => {

        await dispatch(deleteProducts({ id: selectedProduct._id })).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                setIsOpen(false)
                const currentUser = userDetails();

                dispatch(getProducts(currentUser._id))

            }
        })
    }

    const handleEdit = async () => {

        const data = {
            name: details.name,
            type: details.type,
            price: details.price,
            category: details.category,
        }

        await dispatch(editProducts({ id: selectedProduct._id, ...data })).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                setIsEditOpen(false)
                const currentUser = userDetails();

                dispatch(getProducts(currentUser._id))
            }
        })
    }


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
                        All Products
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        All sellers products on online farm
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

                    {
                        loading === 'pending' ? <TablePreloader />
                            : (
                                <>
                                    {allProducts.length === 0

                                        ?
                                        <VStack
                                                
                                        >
                                            <Text
                                                color='#000'
                                                marginTop='40px'
                                                fontWeight={700}
                                                fontSize='25px'
                                                fontFamily='Poppins'
                                                textAlign='center'
                                                width='400px'
                                            >No product yet</Text>
                                            <Text
                                                color='#000'
                                                fontSize='14px'
                                                fontFamily='Poppins'
                                                textAlign='center'
                                                width='400px'
                                            >
                                                You have not added any product untill now, click the button below to add as many product
                                                and sell without limits;

                                            </Text>
                                            <Button
                                                mt='20px'
                                                colorScheme='cyan'
                                                onClick={() => router.push('/product')}
                                            >
                                                Add Product
                                            </Button>
                                        </VStack>
                                        :

                                        <>
                                            <TableContainer width='100%' paddingTop='30px'>
                                                <Table variant='simple'>
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Product name</Th>
                                                            <Th>Category</Th>
                                                            <Th>Type</Th>
                                                            <Th>Price</Th>
                                                            <Th>Date created</Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {
                                                            allProducts.map(product => (
                                                                <Tr>

                                                                    <Td>
                                                                        <Text
                                                                            color={'#2D3436'}
                                                                            fontSize={'14px'}
                                                                            fontWeight={300}
                                                                            fontFamily='Poppins'
                                                                        >
                                                                            {product.name}
                                                                        </Text>

                                                                    </Td>
                                                                    <Td>
                                                                        <Text
                                                                            color={'#2D3436'}
                                                                            fontSize={'14px'}
                                                                            fontWeight={300}
                                                                            fontFamily='Poppins'
                                                                        >
                                                                            {product.category}
                                                                        </Text>
                                                                    </Td>
                                                                    <Td>
                                                                        <Text
                                                                            color={'#2D3436'}
                                                                            fontSize={'14px'}
                                                                            fontWeight={300}
                                                                            fontFamily='Poppins'
                                                                        >
                                                                            {product.type}
                                                                        </Text>
                                                                    </Td>
                                                                    <Td>
                                                                        <Text
                                                                            color={'#2D3436'}
                                                                            fontSize={'14px'}
                                                                            fontWeight={300}
                                                                            fontFamily='Poppins'
                                                                        >
                                                                            {product.price}
                                                                        </Text>
                                                                    </Td>
                                                                    <Td>
                                                                        <Text
                                                                            color={'#2D3436'}
                                                                            fontSize={'14px'}
                                                                            fontWeight={300}
                                                                            fontFamily='Poppins'
                                                                        >
                                                                            {moment(product.createdAt).calendar()}
                                                                        </Text>
                                                                    </Td>
                                                                    <Td>
                                                                        <HStack
                                                                            align='center'
                                                                            justify='center'

                                                                        >
                                                                            <HStack
                                                                                height='50px'
                                                                                backgroundColor='rgba(255, 0,0 ,0.5)'
                                                                                align='center'
                                                                                borderRadius='10px'
                                                                                justify='center'
                                                                                width='50px'
                                                                                onClick={() => {
                                                                                    setProduct(product)
                                                                                    setIsOpen(true)
                                                                                }}

                                                                            >
                                                                                <AiFillDelete fill="red" size='20px' />
                                                                            </HStack>
                                                                            <HStack
                                                                                height='50px'
                                                                                backgroundColor='rgba(0, 255,0 ,0.5)'
                                                                                align='center'
                                                                                borderRadius='10px'
                                                                                justify='center'
                                                                                width='50px'
                                                                                onClick={() => {
                                                                                    setProduct(product)
                                                                                    setIsEditOpen(true)
                                                                                }}
                                                                            >
                                                                                <AiFillEdit fill="green" size='20px' />
                                                                            </HStack>
                                                                        </HStack>
                                                                    </Td>
                                                                </Tr>
                                                            ))
                                                        }

                                                    </Tbody>

                                                </Table>
                                            </TableContainer>
                                        </>

                                    }
                                </>
                            )
                    }


                    <ConfirmModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        loading={isDeleting}
                        name={selectedProduct.name}
                        time={moment(selectedProduct.createdAt).calendar()}
                        action={handleDelete}
                    />

                    <EditModal
                        product={selectedProduct}
                        isOpen={isEditOpen}
                        setIsOpen={setIsEditOpen}
                        loading={isDeleting}
                        action={handleEdit}
                        details={details}
                        setDetails={setDetails}
                    />
                </VStack>
            </Box>
        </Layout>
    )
}

export default AllProducts