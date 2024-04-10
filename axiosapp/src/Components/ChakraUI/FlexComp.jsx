import { Box, Button, ButtonGroup, Container, Flex, Heading, Spacer } from "@chakra-ui/react";


const FlexComp = () => {
    return (
        <div>
            <Flex direction="row" justifyContent="center" h={400} alignItems="center" bg="blue.100">
                <Box height={100} width={100} bg="green">
                    Box 1
                </Box>
                <Box height={100} width={100} bg="red">
                    Box 2
                </Box>

                <Box height={100} width={100} bg="cyan">
                    Box 3
                </Box>
                <Box height={100} width={100} bg="orangered">
                    Box 4
                </Box>
                <Box height={100} width={100} bg="blue">
                    Box 5
                </Box>
                <br />

            </Flex>
            <Container bg="blue.100" height={100} width={400} margin="20px 200px">
                <Flex minWidth='max-content' alignItems='center' gap='2' marginTop={10}>
                    <Box p='2'>
                        <Heading size='md'>Chakra App</Heading>
                    </Box>
                    <Spacer />
                    <ButtonGroup gap='2'>
                        <Button colorScheme='teal'>Sign Up</Button>
                        <Button colorScheme='teal'>Log in</Button>
                    </ButtonGroup>
                </Flex>
            </Container>
        </div>

    )
}

export default FlexComp;