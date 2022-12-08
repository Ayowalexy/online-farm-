import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Image, Box } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible, AiFillAccountBook } from 'react-icons/ai'
import { useState } from "react";
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../public/redux/auth/thunkActions';
import { CheckboxIcon } from '@chakra-ui/react';

import Link from 'next/link';



const Login = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const router = useRouter();
    const [details, setDetails] = useState({});
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.auth)

    const handleLogin = async () => {

        await dispatch(login(details)).then(res => {
            console.log(res)
            if (res.meta.requestStatus === 'fulfilled') {
                router.push('/dashboard')
            }
        })
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setDetails({
            ...details,
            [name]: value
        })
    }


    return (
        <AuthLayout>
            <VStack
                width={{
                    base: '90%', md: '60%', lg: '60%'
                }}
                spacing='30px'
                align='center'
                justify='center'
            >
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    fontFamily='Poppins'
                >
                    Welcome back, Sign in.
                </Text>

                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Email</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            name='email'
                            onChange={handleChange}
                            paddingLeft='20px'
                            type={'email'}
                            placeholder='Your email'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                        />

                    </InputGroup>

                </VStack>

                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Password</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            name='password'
                            onChange={handleChange}
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder='Your password'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                        />
                        <InputRightElement
                            onClick={() => setShow(!show)} padding={'30px'}
                            children={<Text>{show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />}</Text>}
                        />
                    </InputGroup>

                </VStack>

                {/* <HStack alignSelf='flex-end'>
                    <Link href='/Auth/forgot-password'>
                        <Text fontFamily='Poppins' textAlign='left' fontWeight={500} padding='10px 0px' color='#69ACD1'>Forgot Password</Text>
                    </Link>
                </HStack> */}
                <Button
                    outline='none'
                    color='#fff'
                    fontSize='20px'
                    isLoading={loading === 'pending' ? true : false}
                    fontWeight={400}
                    onClick={handleLogin}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight={500}
                    >Don't have an account?</Text>
                    <Link href='/Auth/signup'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight={500}
                        >Sign up</Text>
                    </Link>

                </HStack>
            </VStack>
        </AuthLayout>
    )
}

export default Login