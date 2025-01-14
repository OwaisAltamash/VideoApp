import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
        <Stack direction={["column", "row"]}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size="md" textTransform={"uppercase"} textAlign={["center", "left"]}>
                STAY INFORMED 
                </Heading>

                <HStack
                borderBottom={"2px solid white"}
                py="2"
                >

                  <Input
                    placeholder="Enter Email Here..."
                    border={"none"} borderRadius="none"
                    outline={"none"}
                    focusBorderColor="none"
                  />

                    <Button
                     p={"0"}
                     colorScheme={"purple"}
                     borderRadius={"0 20px 20px 0"}
                    >
                        <AiOutlineSend />
                    </Button>
                </HStack>
            </VStack>
            <VStack 
                w={"full"}
                borderLeft={["none", "1px solid white"]}
                borderRight={["none", "1px solid white"]}
            >

            <Heading textTransform={"uppercase"} textAlign={"center"}>
                VIDEO HUB 
                <Text>All rights received</Text>
            </Heading>
            </VStack>

            <VStack w={"full"}>
                <Heading size={"md"} textTransform={"uppercase"}>
                    Social Media
                </Heading>
                <Button variant={"link"} colorScheme={"white"}>
                  <a target={"blank"} href="https://github.com/OwaisAltamash">GitHub</a>
                </Button>

                <Button variant={"link"} colorScheme={"white"}>
                  <a target={"blank"} href="https://instagram.com/_altaf.exe_?igshid=NTc4MTIwNjQ2YQ==">Instagram</a>
                </Button>

                <Button variant={"link"} colorScheme={"white"}>
                  <a target={"blank"} href="https://www.linkedin.com/in/owais-altamash-06a22b239" >LinkedIn</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}
  
export default Footer;