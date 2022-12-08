import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Lorem,
    Button,
    HStack,
    VStack,
    Text
} from '@chakra-ui/react'
import moment from 'moment'
import { suspendUser, getAllUsers } from '../../public/redux/users/thunkActions'
import { useDispatch, useSelector } from 'react-redux'


const UserModal = ({ user, isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const { isSuspending } = useSelector(state => state.user);

    const handleStatus = async (data) => {
        await dispatch(suspendUser({ ...data, id: user._id })).then(async res => {
            if (res.meta.requestStatus === 'fulfilled') {
                await dispatch(getAllUsers()).then(res => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        setIsOpen(!isOpen)
                    }
                })

            }
        })
    }

    return (
        <Modal size={{ base: 'sm', lg: 'xl', md: 'xl' }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    color='#2A3342'
                    fontWeight={700}
                    fontSize='20px'
                    fontFamily='Poppins'
                >One Seller</ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    color='#556987'
                    fontWeight={500}
                    lineHeight='24px'
                    fontSize='16px'
                    fontFamily='Poppins'
                >
                    <VStack
                        marginBottom='15px'
                        align='flex-start'
                    >
                        <Text>
                            Full Name
                        </Text>
                        <Text
                            fontSize={'20px'}
                            fontWeight={700}
                        >
                            {user.full_name}
                        </Text>
                    </VStack>
                    <VStack
                        marginBottom='15px'
                        align='flex-start'
                    >
                        <Text>
                            Email
                        </Text>
                        <Text
                            fontSize={'20px'}
                            fontWeight={700}
                        >
                            {user.email}
                        </Text>
                    </VStack>
                    <VStack
                        marginBottom='15px'
                        align='flex-start'
                    >
                        <Text>
                            Phone
                        </Text>
                        <Text
                            fontSize={'20px'}
                            fontWeight={700}
                        >
                            {user.phone}
                        </Text>
                    </VStack>
                    <VStack
                        marginBottom='15px'
                        align='flex-start'
                    >
                        <Text>
                            Date Joined
                        </Text>
                        <Text
                            fontSize={'20px'}
                            fontWeight={700}
                        >
                            {moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                        </Text>
                    </VStack>
                    <VStack
                        marginBottom='15px'
                        align='flex-start'
                    >
                        <Text>
                            Status
                        </Text>
                        <Text
                            fontSize={'20px'}
                            fontWeight={700}
                        >
                            {user.status}
                        </Text>
                    </VStack>
                   
                    <VStack
                        marginBottom='15px'
                        align='flex-start'
                    >
                        <Text>
                            Account type
                        </Text>
                        <Text
                            fontSize={'20px'}
                            fontWeight={700}
                        >
                            {user.role}
                        </Text>
                    </VStack>


                </ModalBody>
                <ModalFooter
                    marginTop='15px'
                >
                    <VStack width='100%'>
                        <HStack
                            gap='20px'
                            align='center'
                            justify='center'
                            width='100%'
                        >
                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                background='#fff'
                                color='#333F51'
                                width='100%'
                                fontFamily='Poppins'

                                height='46px'
                                border='1px solid #D5DAE1'
                                colorScheme='blue' mr={3}
                                onClick={() => {
                                    const status = {
                                        status: user["status"] === 'deactivate' ? 'active' : 'deactivate',

                                    }
                                    handleStatus(status)
                                }}
                            >
                                {
                                    user.status === 'deactivate'
                                        ? 'Activate'
                                        : 'Deactivate'
                                }
                            </Button>
                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                background='#fff'
                                color='#333F51'
                                width='100%'
                                fontFamily='Poppins'
                                isLoading={isSuspending === 'pending' ? true : false}
                                height='46px'
                                onClick={() => {
                                    const status = {
                                        status: user["status"] === 'suspended' ? 'active' : 'suspended',

                                    }
                                    handleStatus(status)
                                }}
                                border='1px solid #D5DAE1'
                                colorScheme='blue' mr={3}>
                                {
                                    user.status === 'suspended'
                                        ? 'Activate'
                                        : 'Suspended'
                                }
                            </Button>

                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                background='#fff'
                                color='#333F51'
                                width='100%'
                                fontFamily='Poppins'

                                height='46px'
                                border='1px solid #D5DAE1'
                                colorScheme='blue' mr={3} onClick={() => setIsOpen(!isOpen)}>
                                Delete
                            </Button>
                        </HStack>
                        <Button
                            fontWeight={500}
                            fontSize='16px'
                            fontFamily='Poppins'
                            background='#10B6E8'
                            width='100%'
                            height='46px'
                            color='#fff'
                            colorScheme='blue' mr={3} >
                            Save
                        </Button>
                    </VStack>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default UserModal