import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaLightbulb, FaGlobeAsia, FaUserGraduate } from 'react-icons/fa';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="lg" 
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Flex direction="column" align="center" textAlign="center">
        <Icon as={icon} w={12} h={12} color="brand.accent" mb={4} />
        <Heading as="h3" size="md" mb={3} color="brand.base">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </Flex>
    </Box>
  );
};

export const MissionVision = () => {
  const values = [
    {
      title: '若者の可能性を解き放つ',
      description: '国内教育の枠組みを超え、体験を通じて若者本来の能力と自信を引き出します。',
      icon: FaLightbulb
    },
    {
      title: 'グローバルな環境と視野',
      description: '異文化体験を通して、多様な価値観や考え方に触れ、世界で活躍できる人材を育てます。',
      icon: FaGlobeAsia
    },
    {
      title: '教育を通じた社会変革',
      description: '日本の閉塞的な教育観・世間体主義からの転換を、教育を通じて実現します。',
      icon: FaUserGraduate
    }
  ];

  return (
    <Box as="section" py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text
              as="span"
              color="brand.accent"
              fontWeight="bold"
              fontSize="lg"
              textTransform="uppercase"
              mb={3}
              display="block"
            >
              私たちの理念
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              留学を、もっと身近に。
            </Heading>
            <Text fontSize="xl" color="gray.700" maxW="container.md" mx="auto" lineHeight="tall">
              私たちは「体験型留学」を通じて若者の価値観転換と保護者の安心感を両立する教育支援を提供します。
              日本人が持つ素晴らしい資質にグローバルマインドを掛け合わせることで、真に世界で活躍できる人材を育てます。
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
