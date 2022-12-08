import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../public/redux/product/thunkActions'
import { useFileUpload } from "../../public/hooks/fileUpload";
import { Toaster } from "react-hot-toast";
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { userDetails } from "../../public/utils/useAxios";

const AddProduct = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('US');
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    const { loading } = useSelector(state => state.product)
    const { user } = useSelector(state => state.auth)

    const { deleteSelectedImage, fileList, handleFileUpload } =
        useFileUpload(true);

    const { text_2, btn } = theme.colors.brand;


    const handleChange = (event) => {
        const { value, name } = event.target;
        setDetails({
            ...details,
            [name]: value
        })
    }


    const onClick = async () => {
        const formData = new FormData();
        formData.append('file', fileList[0].file);
        formData.append('upload_preset', 'ruhqdzze');
        formData.append('cloud_name', 'dquiwka6j');

        const imageUrl = await fetch('https://api.cloudinary.com/v1_1/dquiwka6j/auto/upload', {
            method: "post",
            body: formData
        }).then(res => res.json()).
            then(data => {
                return data.url
            }).catch(err => {
                console.log(err)
            })
        
        const id = userDetails()._id

        const data = {
            ...details,
            imageUrl,
            id
        }

        await dispatch(addProduct(data)).then((res => {
            console.log(res)
            if (res.meta.requestStatus === 'fulfilled') {
                
            }
        }))

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
                            name='name'
                            onChange={handleChange}
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
                            name='type'
                            onChange={handleChange}
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
                            <option value='bulk buy'>bulk buy</option>
                            <option value='retail buy'>retail buy</option>
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
                            name='price'
                            onChange={handleChange}
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
                            name='category'
                            onChange={handleChange}
                        />
                    </VStack>

                    <HStack
                        width='100%'
                        paddingTop={'30px'}
                        flexWrap='wrap'
                        justify='flex-start'
                    >
                        <HStack
                            justify='center'
                            align='center'
                            width={{ base: '45%', md: '250px', lg: '250px' }}
                            borderRadius='10px'
                            height='198px'
                            border='1px dotted #10B6E8'
                        >
                            {
                                fileList && fileList.map(ele => (
                                    <HStack
                                        key={ele.id}
                                        bgPos='center'
                                        bgSize='contain'
                                        width='97%'
                                        bgRepeat='no-repeat'
                                        height='97%'
                                        padding='10px'
                                        justify='flex-end'
                                        align='flex-start'
                                        bgImage={{
                                            base: `url(${ele.displayUrl})`,
                                        }}
                                    >
                                        <HStack

                                            height='23px'
                                            width='114px'
                                            borderRadius='2px'
                                            backgroundColor='#FFF1F1'
                                            onClick={() => deleteSelectedImage(ele.id)}
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
                                ))
                            }

                        </HStack>
                        <input id='input_form' type='file'
                            onChange={handleFileUpload}
                            style={{
                                display: 'none'
                            }}
                        />
                        <label htmlFor="input_form">
                            <HStack
                                id="input_form"
                                justify='center'
                                align='center'
                                width={{ base: '100%', md: '250px', lg: '250px' }}
                                backgroundColor='#F0FCFF'
                                borderRadius='10px'
                                height='198px'
                                marginTop={{ base: '30px', lg: '-3px' }}
                                border='1px dotted #10B6E8'
                            >
                                <VStack
                                    bgPos='center'
                                    bgSize='contain'
                                    width='97%'
                                    height='97%'
                                    spacing='10px'
                                    padding='10px'
                                    justify='center'
                                    align='center'

                                >
                                    <BsFillCloudUploadFill fill="#10B6E8" size={"30px"} />
                                    <Text
                                        color='#10B6E8'
                                        fontSize='18px'
                                        fontWeight={400}
                                    >
                                        Add product Image
                                    </Text>
                                    <Text
                                        textAlign='center'
                                        color='#10B6E8'
                                        fontSize='10px'
                                        fontWeight={500}
                                    >
                                        Please, ensure the image is clearly visible and has the right resolutions
                                    </Text>

                                </VStack>
                            </HStack>
                        </label>
                    </HStack>

                    <Box height='40px' />
                    <HStack
                        width='100%'
                        align='center'
                        justify='space-between'
                        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                    >


                        <Button
                            onClick={onClick}
                            marginTop='40px'
                            alignSelf='center'
                            isLoading={loading === 'pending' ? true : false}
                            color='#fff'
                            backgroundColor={btn}
                            height='56px'
                            fontWeight={500}
                            width={{ base: '100%', md: '300px', lg: '300px' }}
                        >
                            Submit
                        </Button>

                    </HStack>

                    <Toaster />
                </VStack>
            </Box>
        </Layout>
    )
}

export default AddProduct