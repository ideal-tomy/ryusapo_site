import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack } from '@chakra-ui/react';
import { FaExchangeAlt, FaHandsHelping, FaBrain, FaSeedling } from 'react-icons/fa';

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
        <Heading as="h3" size="md" mb={3} color="brand.base" minHeight="4.5em">
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
      description: '偏差値や管理を重視する画一の教育観から、"体験"や"挑戦"を通じた学びへ。\n子ども自身の内発的な動機を起点とする、新しい教育文化の創出を目指します。',
      icon: FaExchangeAlt
    },
    {
      title: '多文化を自然に受け入れられる"Multi Cultureな人材"',
      description: '異なる価値観や文化背景を持つ人々と、自然体で関わる力。\n思春期・青年期に異文化の中で生活する経験は、柔軟なアイデンティティ形成に寄与します。\n日本人としての芯を持ちつつ、世界を"自分ごと"として理解できる人材へ。',
      icon: FaHandsHelping
    },
    {
      title: '自分で考え、自分で動く"選択力"と"行動力"の育成',
      description: '答えのない問いに向き合い、自分で考え、自分で動く習慣を日常にする。\nモンテッソーリ教育の哲学をベースに、子どもたちが"自分の人生の舵"を取る訓練を重ねていきます。',
      icon: FaBrain
    },
    {
      title: '生きた海外体験を通じた"生き抜く力"の醸成',
      description: 'トラブル、異文化、戸惑い——海外生活は思い通りにいかないことの連続です。\nしかしだからこそ、正解のない環境を自分の力で乗り越える術を身につけられます。\nこの経験は、どんな時代でも通用する"生き抜く力"の源になります。',
      icon: FaSeedling
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
