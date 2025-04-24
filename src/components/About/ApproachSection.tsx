import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack } from '@chakra-ui/react';
import { FaUsers, FaGlobeAmericas, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';

interface ApproachCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ title, description, icon }) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={6}
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'md' }}
    >
      <Flex direction="column" align="center" textAlign="center">
        <Flex
          align="center"
          justify="center"
          bg="brand.light"
          w={16}
          h={16}
          borderRadius="full"
          mb={4}
        >
          <Icon as={icon} w={8} h={8} color="brand.base" />
        </Flex>
        <Heading as="h3" size="md" mb={3} color="brand.base">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </Flex>
    </Box>
  );
};

export const ApproachSection = () => {
  const approaches = [
    {
      title: '日本の教育観の転換',
      description: '閉塞的な教育観や世間体主義から、体験や挑戦を重視する教育文化を創出します。',
      icon: FaGraduationCap
    },
    {
      title: '再出発を肯定する文化',
      description: '若者の「やり直し」や「再出発」を肯定する文化の創出に貢献します。',
      icon: FaUsers
    },
    {
      title: 'グローバルな文脈での自己定義',
      description: '英語を通じて、自分を"グローバルな文脈"で位置づけられる力を育成します。',
      icon: FaGlobeAmericas
    },
    {
      title: '機会の平等化',
      description: '海外体験を"選ばれた一部"のものではなく、"全ての若者に開かれた選択肢"にします。',
      icon: FaHandHoldingHeart
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
              社会課題へのアプローチ
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              教育を通じた社会変革
            </Heading>
            <Text fontSize="xl" color="gray.700" maxW="container.md" mx="auto" mb={8}>
              留サポは単なる留学サービスを超え、日本社会が直面するいくつかの課題にもアプローチします。
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="full">
            {approaches.map((approach, index) => (
              <ApproachCard 
                key={index}
                title={approach.title}
                description={approach.description}
                icon={approach.icon}
              />
            ))}
          </SimpleGrid>
          
          <Box maxW="container.md" mx="auto" textAlign="center" mt={10}>
            <Text fontSize="lg" color="gray.700" fontStyle="italic">
              「日本人の高い道徳心 × グローバルマインド = 最強の武器」
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
