import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minHeight="100vh">
      <Flex direction="column" align="center" justify="center">
        <Image src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MTMzNzE3ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band on stage" borderRadius="lg" objectFit="cover" w="full" h={{ base: "300px", md: "500px" }} mb={4} />
        <Heading as="h1" size="2xl" mt={4}>
          The Rock Legends
        </Heading>
        <Text fontSize="xl" mt={2}>
          Join us on our world tour!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="red" mt={4} size="lg">
          Buy Tickets
        </Button>
        <VStack spacing={3} mt={6}>
          <Text fontSize="lg">Follow us on social media</Text>
          <Flex>
            <Link href="https://instagram.com" isExternal mx={2}>
              <FaInstagram size="28px" />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="28px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebookF size="28px" />
            </Link>
            <Link href="https://spotify.com" isExternal mx={2}>
              <FaSpotify size="28px" />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
