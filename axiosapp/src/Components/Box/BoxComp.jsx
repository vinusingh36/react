import { Box, Container } from "@chakra-ui/react";


const BoxComp = () => {
    return (
        <Box bg="coral" h={100} p={10}>
            Chakra UI box Component
            <Container bg="teal">
                Hi
            </Container>
        </Box >
    )
}

export default BoxComp;