import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Flex } from '@chakra-ui/react';

// シンプルなアイコンコンポーネント
// 実際のプロジェクトではreact-iconsなどのライブラリを導入すると良いでしょう
const GrowthIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8L15,11H13V15H11V11H9L12,8Z"
    />
  </Icon>
);

const LanguageIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
    />
  </Icon>
);

const FutureIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5V8H14M14,10V11H20V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z"
    />
  </Icon>
);

export const WhySection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text
              color="brand.accent"
              fontWeight="bold"
              fontSize="lg"
              mb={3}
            >
              WHY STUDY ABROAD?
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              留学とは？
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={8}>
              体験が、人を育てる
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="full">
            {/* 成長ポイント */}
            <Flex
              direction="column"
              align="center"
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="md"
              transition="transform 0.3s ease"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Icon as={GrowthIcon} w={12} h={12} color="brand.accent" mb={5} />
              <Heading as="h3" size="md" mb={4} textAlign="center">
                人間的成長
              </Heading>
              <Text textAlign="center" color="gray.600">
                新しい環境での挑戦が、自信と適応力を育みます。困難を乗り越える力と、多様な価値観への理解が深まります。
              </Text>
            </Flex>

            {/* 語学力ポイント */}
            <Flex
              direction="column"
              align="center"
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="md"
              transition="transform 0.3s ease"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Icon as={LanguageIcon} w={12} h={12} color="brand.accent" mb={5} />
              <Heading as="h3" size="md" mb={4} textAlign="center">
                語学力向上
              </Heading>
              <Text textAlign="center" color="gray.600">
                日常会話から実践的な表現まで、生きた言語環境で学ぶことで、教室では得られない本物の語学力が身につきます。
              </Text>
            </Flex>

            {/* 将来ポイント */}
            <Flex
              direction="column"
              align="center"
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="md"
              transition="transform 0.3s ease"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <Icon as={FutureIcon} w={12} h={12} color="brand.accent" mb={5} />
              <Heading as="h3" size="md" mb={4} textAlign="center">
                将来の可能性
              </Heading>
              <Text textAlign="center" color="gray.600">
                グローバルな視野と経験は、進学や就職で大きなアドバンテージになります。未来の選択肢が広がります。
              </Text>
            </Flex>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
