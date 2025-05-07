import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Flex, Icon, Circle } from '@chakra-ui/react';
import { FaQuestionCircle, FaShieldAlt, FaCreditCard, FaPhone, FaComments } from 'react-icons/fa';

type WorryItemProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
};

const WorryItem: React.FC<WorryItemProps> = ({ title, description, icon }) => {
  return (
    <Box
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
      transition="all 0.3s ease"
      height="100%"
    >
      <VStack align="flex-start" spacing={4}>
        <Circle size="50px" bg="red.50" color="red.500">
          {icon}
        </Circle>
        <Heading as="h3" size="md" color="gray.700">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
    </Box>
  );
};

const worries = [
  {
    title: '言語の壁が心配',
    description: '自分の子どもは英語が得意ではないので、現地でコミュニケーションが取れるか心配です。',
    icon: <Icon as={FaComments} w={6} h={6} />
  },
  {
    title: '安全面が心配',
    description: '初めての海外で、万が一の事故や病気が発生した場合の対応が不安です。',
    icon: <Icon as={FaShieldAlt} w={6} h={6} />
  },
  {
    title: '費用が心配',
    description: '留学にかかる費用が不透明で、思わぬ出費や追加料金があるのではないかと懸念しています。',
    icon: <Icon as={FaCreditCard} w={6} h={6} />
  },
  {
    title: '現地サポートが心配',
    description: '日本人スタッフが現地にいない場合、子どもの相談相手がいないのではないかと不安です。',
    icon: <Icon as={FaPhone} w={6} h={6} />
  }
];

export const WorryList = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50" className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="red.500" fontWeight="bold" fontSize="lg" mb={3}>
              WORRIES & SOLUTIONS
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              こんな不安ありませんか？
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              お子さまの留学に関するよくある不安と、私たちがどのように解消するかをご紹介します
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="full">
            {worries.map((worry, index) => (
              <WorryItem key={index} {...worry} />
            ))}
          </SimpleGrid>

          <Box 
            bg="white" 
            p={8} 
            borderRadius="lg" 
            boxShadow="md" 
            borderLeft="4px solid" 
            borderColor="brand.base"
            width="full"
            mt={6}
          >
            <Flex align="center" mb={4}>
              <Icon as={FaQuestionCircle} w={6} h={6} color="brand.base" mr={3} />
              <Heading as="h3" size="md">
                留学は不安がつきもの…
              </Heading>
            </Flex>
            <Text fontSize="lg">
              このような不安は多くの保護者の方が持たれます。留サポでは、これらの不安を一つひとつ解消するためのサポート体制を整えています。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
