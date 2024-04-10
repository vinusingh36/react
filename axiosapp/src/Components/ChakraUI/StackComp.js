import { Box, Button, HStack, SimpleGrid, Skeleton, Stack, VStack } from "@chakra-ui/react"
import BoxComp from "../Box/BoxComp"
import { useState } from "react"


const StackComp = () => {
    const [loading, setLoading] = useState(true)
    return (
        <Box>
            <Box padding={10} >
                <Skeleton isLoaded={loading}>
                    <SimpleGrid columns={3} spacing={10} >
                        <Box boxShadow="0 0 10px black" height='80px'></Box>
                        <Box boxShadow="0 0 10px black" height='80px'></Box>
                        <Box boxShadow="0 0 10px black" height='80px'></Box>
                        <Box boxShadow="0 0 10px black" height='80px'></Box>
                        <Box boxShadow="0 0 10px black" height='80px'></Box>
                    </SimpleGrid>
                </Skeleton>
                <br />
                <Button onClick={() => setLoading((loading) => !loading)} >Toggle</Button>
            </Box>

        </Box >



    )
}

export default StackComp;