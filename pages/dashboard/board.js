import { VStack, Box, HStack, Text, useTheme, Skeleton } from "@chakra-ui/react";
import { AiFillPieChart } from 'react-icons/ai';
import { userDetails } from "../../public/utils/useAxios";
import { useState, useEffect } from "react";
import { getStats } from "../../public/redux/users/thunkActions";
import { useDispatch, useSelector } from "react-redux";
import { ChartComp } from "../../public/components/chart";


const Board = () => {
    const theme = useTheme();
    const { btn } = theme.colors.brand;
    const [ user, setUser ]  = useState({});
    const dispatch = useDispatch();
    const { stats } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getStats())
    }, [])

    useEffect(() => {
        const currentUser = userDetails();
        setUser(currentUser)
    }, [])

    const IconBox = ({type, value}) => (
        <HStack
            align='center'
            height='100px'
            width='23%'
            justify='space-around'
            borderRadius='20px'
            backgroundColor='rgba(30, 176, 217, 0.1)'
        >
            <VStack
                borderRadius='10px'
                align='center'
                justify='center'
                height='40px'
                backgroundColor={btn}
                width='40px'
            >
                <AiFillPieChart size='20px' />
            </VStack>
            <VStack
                spacing='0px'
                align='flex-start'
            >
                <Text
                    color='rgba(0,0,0,0.3)'
                    fontSize='13px'
                >{type}</Text>
                <Text
                    color={btn}
                    fontSize='20px'
                >{value}</Text>
                <Text
                    color='rgba(0,0,0,0.3)'
                    fontSize='13px'
                >+{Math.floor(Math.random() * 100)}%</Text>
            </VStack>
        </HStack>
    )
    return (
        <VStack
            padding='20px'
            align='flex-start'
            backgroundColor={'#fff'}
            width='75%'
        >
            <HStack
                borderRadius='30px'
                height='150px'
                width='90%'
                backgroundColor='rgba(30, 176, 217, 0.1)'
                bgSize='contain'
                backgroundRepeat='no-repeat'
                bgPos='right'
                bgImage={{
                    base: 'url("/images/img/undraw.png")'
                }}
            >
                <VStack
                    align='flex-start'
                    paddingLeft='40px'
                >
                    <Text
                        color={btn}
                        fontWeight={400}
                        fontSize='30px'
                    >Hello, {user?.full_name}</Text>
                    <Text>Overall Information</Text>
                </VStack>
            </HStack>

            <Box height='30px' />
            <VStack
                borderRadius='30px'
                height='350px'
                padding='30px'
                width='90%'
                align='flex-start'
                backgroundColor='rgba(30, 176, 217, 0.1)'

            >
                <HStack>
                    <VStack
                        align='flex-start'
                        spacing='0px'
                    >
                        <Text
                            color={btn}
                            fontWeight={700}
                            fontSize='20px'
                        >Account stats</Text>
                        <Text
                            color={btn}
                            fontWeight={400}
                            fontSize='13px'
                        >Overall Information</Text>
                    </VStack>
                </HStack>
                <ChartComp />
            </VStack>
            <Box height='30px' />


            <HStack
                justify='space-between'
                width='100%'
            >
                <IconBox type={'No of sellers'} value={stats?.no_of_sellers} />
                <IconBox type={'No of users'} value={stats?.no_of_users} />
                <IconBox type={'No of product'} value={stats?.no_of_products} />
                <IconBox type={'New accounts'} value={stats?.new_account} />

            </HStack>
        </VStack>
    )
}

export default Board