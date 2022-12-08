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
    Input,
    Text,
    Select
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'


const EditModal = ({ product, action, isOpen, setIsOpen, loading, details, setDetails }) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails({
            ...details,
            [name]: value
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
                >Edit Product</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody
                    color='#556987'
                    fontWeight={500}
                    lineHeight='24px'
                    fontSize='16px'
                    fontFamily='Poppins'
                >
                    <VStack
                        marginBottom='30px'
                        align='flex-start'
                    >
                        <Text>
                            Product name
                        </Text>
                        <Input
                            height='40px'
                            width='100%'
                            name='name'
                            value={details.name}
                            onChange={handleChange}

                        />
                    </VStack>

                    <VStack
                        marginBottom='30px'
                        align='flex-start'
                    >
                        <Text>
                            Product price
                        </Text>
                        <Input
                            height='40px'
                            width='100%'
                            name='price'
                            value={details.price}
                            onChange={handleChange}

                        />
                    </VStack>

                    <VStack
                        marginBottom='30px'
                        align='flex-start'
                    >
                        <Text>
                            Product category
                        </Text>
                        <Input
                            height='40px'
                            width='100%'
                            name='category'
                            value={details.category}
                            onChange={handleChange}

                        />
                    </VStack>

                    <VStack
                        marginBottom='30px'
                        align='flex-start'
                    >
                        <Text>
                            Product type
                        </Text>
                        <Select
                            height='40px'
                            width='100%'
                            name='category'
                            onChange={handleChange}

                        >
                            <option value='retail buy'>Retail Buy</option>
                            <option value='bulk buy'>Bulk Buy</option>
                        </Select>
                    </VStack>

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
                            Save
                        </Button>
                    </VStack>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditModal