import AuthLayout from '../../public/components/AuthLayout'
import {
    FormLabel,
    FormErrorMessage,
    FormControl,
    Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Checkbox, Image
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible, AiFillInfoCircle } from 'react-icons/ai'
import { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../../styles/Home.module.css'
import * as Yup from 'yup';
import { signup } from '../../public/redux/auth/thunkActions'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("Please, enter your full name"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().required("Please, enter your phone number"),
    password: Yup.string()
        .matches(/\d/, "Password must have a number")
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required("New password is required"),
    confirm_password: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
            return this.parent.password === value;
        }
    ),
});


import Link from 'next/link';



const Signup = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [selected, setSelected] = useState('NG');
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading } = useSelector(state => state.auth )


    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        resetForm,
        
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
        },

        validationSchema,
        onSubmit: async (values) => {
            delete values.confirm_password
            console.log('sending')
            await dispatch(signup({ ...values, role: 'seller' })).then(res => {
                
                if(res.meta.requestStatus === 'fulfilled'){
                    router.push('/Auth/login')
                }
                resetForm({
                    full_name: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirm_password: ""
                })
            })
           
        },
    });

    
    return (
        <AuthLayout>

            <FormLabel
                mt={4}
                fontSize={14}
            >
                {"Label"}:
            </FormLabel>
            <VStack
                width={{
                    base: '90%', md: '60%', lg: '60%'
                }}
                spacing='30px'
                align='center'
                justify='center'
                marginBottom='100px'
                height='fit-content'
            >

                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    fontFamily='Poppins'
                    paddingTop='300px'
                >
                    Create an account, it's free
                </Text>



                <FormControl

                    isInvalid={!!errors.full_name && touched.full_name}
                >
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
                        >Full name</Text>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            name='full_name'
                            fontSize='15px'
                            paddingLeft='20px'
                            placeholder='FirstName LastName'
                            width='100%'
                            height='60px'
                            border='1px solid rgba(0,0,0,0.4)'
                            borderRadius='10px'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            backgroundColor='#F7F8F9'
                        />

                        <FormErrorMessage
                            color={'red'}
                            alignSelf="flex-start" fontSize={14}>
                            {errors.full_name}
                        </FormErrorMessage>

                    </VStack>
                </FormControl>




                <FormControl

                    isInvalid={false}
                >

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
                        >Phone number</Text>
                        <PhoneInput
                            containerStyle={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '10px'
                            }}
                            inputStyle={{
                                color: 'rgba(0,0,0,5)',
                                fontWeight: 500,
                                fontSize: '15px',
                                paddingLeft: '80px',
                                width: '100%',
                                height: '60px',
                                borderRadius: '10px',
                                backgroundColor: '#F7F8F9',
                                border: 'none'
                            }}
                            country={'ng'}
                            value={value}
                            placeholder='8X XXX XXXX'
                            onChange={phone => setFieldValue('phone', phone)}
                            buttonStyle={{
                                width: '70px',
                                border: 'none',
                                paddingLeft: '15px'
                            }}
                        />
                        <FormErrorMessage
                            color={'red'}
                            alignSelf="flex-start" fontSize={14}>
                            {errors.phone}
                        </FormErrorMessage>

                    </VStack>
                </FormControl>

                <FormControl

                    isInvalid={!!errors.email && touched.email}
                >
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
                        >Email Address</Text>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            name='email'
                            paddingLeft='20px'
                            placeholder='youremail@gmail.com'
                            width='100%'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                        />
                        <FormErrorMessage
                            color={'red'}
                            alignSelf="flex-start" fontSize={14}>
                            {errors.email}
                        </FormErrorMessage>

                    </VStack>
                </FormControl>

                <FormControl

                    isInvalid={!!errors.password && touched.password}
                >
                    <VStack
                        spacing='0px'
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
                                fontWeight='bold'
                                fontSize='15px'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                paddingLeft='20px'
                                name='password'
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

                        <FormErrorMessage
                            color={'red'}
                            alignSelf="flex-start" fontSize={14}>
                            {errors.password}
                        </FormErrorMessage>

                    </VStack>
                </FormControl>
                <FormControl

                    isInvalid={!!errors.confirm_password && touched.confirm_password}
                >
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
                        >Confirm Password</Text>
                        <InputGroup>
                            <Input
                                color='rgba(0,0,0,5)'
                                fontWeight='bold'
                                fontSize='15px'
                                name='confirm_password'
                                paddingLeft='20px'
                                type={show ? 'text' : 'password'}
                                placeholder='Confirm password'
                                width='100%'
                                onChange={handleChange}
                                onBlur={handleBlur}
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

                        <FormErrorMessage
                            color={'red'}
                            alignSelf="flex-start" fontSize={14}>
                            {errors.confirm_password}
                        </FormErrorMessage>

                    </VStack>
                </FormControl>

                <Checkbox size='md' defaultChecked padding='20px 0px'>
                    <Text
                        fontSize='14px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >
                        I agree to the <span style={{ color: '#69ACD1', fontWeight: 500 }}>Terms & Conditions</span> and <span style={{ color: '#69ACD1', fontWeight: 500 }}>Privacy Policy </span>
                    </Text>
                </Checkbox>

                <Button
                    outline='none'
                    color='#fff'
                    onClick={() => {
                        handleSubmit()
                       
                        }}
                    isLoading={loading === 'pending' ? true : false}
                    fontSize='20px'
                    fontWeight={400}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight={500}
                    >Already have an account?</Text>
                    <Link href='/Auth/login'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight={500}
                        >Login</Text>
                    </Link>

                </HStack>

            </VStack>


        </AuthLayout >
    )
}

export default Signup