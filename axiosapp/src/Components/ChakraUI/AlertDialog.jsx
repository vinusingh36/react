import { DeleteIcon, EmailIcon } from '@chakra-ui/icons'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
    IconButton,
} from '@chakra-ui/react'
import React from 'react'

const ChakraAlertDialog = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <div>
            {/* <Button bg="white" _hover="white" onClick={onOpen} marginTop={10}>
                <DeleteIcon w={10} h={10} color='red' />
            </Button> */}

            <IconButton
                marginTop="20px"
                onClick={onOpen}
                variant='none'
                fontSize="50px"
                colorScheme='red'
                icon={<DeleteIcon />}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Customer
                        </AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} colorScheme='green' onClick={onClose}>
                                Ok
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <br />
            <br />
            <EmailIcon w={100} h={50} color="green" />
        </div>
    )
}


export default ChakraAlertDialog;