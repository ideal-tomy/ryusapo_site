import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';

type MainCTAProps = {
  // LINEu30dcu30bfu30f3u306eURLu3092u5909u66f4u3059u308bu305fu3081u306eu30d7u30edu30d1u30c6u30a3
  lineUrl?: string;
  // u30dcu30bfu30f3u306eu30c6u30adu30b9u30c8u3092u5909u66f4u3059u308bu305fu3081u306eu30d7u30edu30d1u30c6u30a3
  buttonText?: string;
  // u30b5u30d6u30c6u30adu30b9u30c8u3092u5909u66f4u3059u308bu305fu3081u306eu30d7u30edu30d1u30c6u30a3
  subText?: string;
};

// u30c7u30d5u30a9u30ebu30c8u5024u3092u8a2du5b9a
export const MainCTA = ({
  lineUrl = 'https://line.me/R/ti/p/@123abc',
  buttonText = 'LINEu3067u7121u6599u76f8u8ac7u3059u308b',
  subText = 'u307eu305au306fu6c17u8efdu306bu8a71u3057u3066u307fu307eu305bu3093u304buff1f',
}: MainCTAProps) => {
  return (
    <Box
      as="section"
      bg="brand.light"
      py={{ base: 12, md: 16 }}
      className="section"
    >
      <Container maxW="container.md" textAlign="center">
        <VStack spacing={6}>
          <Heading as="h2" size="xl" color="brand.base">
            u7559u5b66u3092u8003u3048u3066u3044u308bu65b9u3078
          </Heading>
          
          <Text fontSize="lg" color="gray.700">
            {subText}
          </Text>
          
          <Button
            as="a"
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            px={10}
            py={6}
            bg="brand.accent"
            color="gray.800"
            fontWeight="bold"
            _hover={{ bg: 'yellow.400', transform: 'translateY(-2px)' }}
            _active={{ bg: 'yellow.500' }}
            transition="all 0.3s ease"
            boxShadow="md"
          >
            {buttonText}
          </Button>
          
          <Text fontSize="sm" color="gray.600" mt={4}>
            u2605 u7121u6599u76f8u8ac7u3067u3059u3002u304au6c17u8efdu306bu304au554fu3044u5408u308fu305bu304fu3060u3055u3044u3002
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
