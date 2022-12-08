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
    VStack
} from '@chakra-ui/react'


const ConfirmModal = ({ isOpen, setIsOpen, name, time, action, loading }) => {
    return (
        <>
            <Modal size={{ base: 'sm', lg: 'xl', md: 'xl' }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        color='#2A3342'
                        fontWeight={700}
                        fontSize='20px'
                        fontFamily='Poppins'
                    >Confirm product delete</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody
                        color='#556987'
                        fontWeight={500}
                        lineHeight='24px'
                        fontSize='16px'
                        fontFamily='Poppins'
                    >
                        Are you sure you want to delete {name} added {time}?

                    </ModalBody>
                    <ModalFooter
                        marginTop='15px'
                    >
                        <VStack width='100%'>
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
                                Cancel
                            </Button>
                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                fontFamily='Poppins'
                                isLoading={loading === 'pending' ? true : false}
                                background='#10B6E8'
                                width='100%'
                                height='46px'
                                color='#fff'
                                colorScheme='blue' mr={3} onClick={action}>
                                Delete
                            </Button>
                        </VStack>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ConfirmModal