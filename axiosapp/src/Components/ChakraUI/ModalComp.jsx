import { Button, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


const ModalComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <Button marginTop={10} onClick={onOpen}>Open Modal</Button>

            <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size="md" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur natus non enim totam perspiciatis, consequuntur blanditiis quod alias possimus necessitatibus ea quas, provident tempore ullam. Nam, rerum, officia aliquid similique quos sint consequuntur magnam nesciunt fuga soluta rem doloribus. Laboriosam repudiandae hic, eaque harum quisquam blanditiis at modi a recusandae.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="green" variant='outline'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalComp;