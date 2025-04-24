import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Avatar, VStack, Button, Badge } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type StudentVoiceProps = {
  name: string;
  age: string;
  location: string;
  beforeText: string;
  afterText: string;
  imageUrl: string;
};

const StudentVoice: React.FC<StudentVoiceProps> = ({ name, age, location, beforeText, afterText, imageUrl }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box flexShrink={0} width={{ base: '100%', md: '40%' }} height={{ base: '200px', md: 'auto' }}>
          <Box
            bgImage={`url(${imageUrl})`}
            bgSize="cover"
            bgPosition="center"
            height="100%"
            width="100%"
          />
        </Box>
        <VStack align="start" p={6} spacing={4} flex="1">
          <Box>
            <Heading as="h3" size="md" mb={1}>
              {name}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {age} | {location}
            </Text>
          </Box>
          
          <Box w="100%">
            <Badge colorScheme="red" mb={2}>Before</Badge>
            <Text fontSize="sm" fontStyle="italic" color="gray.600" mb={4}>
              "{beforeText}"
            </Text>
            
            <Badge colorScheme="green" mb={2}>After</Badge>
            <Text fontSize="sm" fontStyle="italic" color="gray.600">
              "{afterText}"
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

const studentVoices = [
  {
    name: '山田 祐子',
    age: '高校2年生',
    location: 'カナダ・バンクーバー',
    beforeText: '英語が苦手で、海外に行くなんて考えられませんでした。正直、最初は不安でいっぱいでした。',
    afterText: '現地の人々の温かさに触れて、自信がつきました。英語が話せるようになった喜びは今でも忘れられません！',
    imageUrl: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=1339',
  },
  {
    name: '佐藤 健太',
    age: '大学1年生',
    location: 'オーストラリア・シドニー',
    beforeText: '将来について漠然とした不安があり、何か新しいことに挑戦したいと思っていました。',
    afterText: 'ボランティア活動を通じて異文化理解の大切さを学び、将来の目標が明確になりました。この経験は一生の宝物です。',
    imageUrl: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=1339',
  },
  {
    name: '田中 美咲',
    age: '高校3年生',
    location: 'アメリカ・ボストン',
    beforeText: '親元を離れて生活することに不安がありました。自分でできるか自信がありませんでした。',
    afterText: '一人で問題を解決する力がついて、精神的に強くなりました。今では何でも挑戦できる自信があります！',
    imageUrl: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=1339',
  },
];

export const StudentVoices = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50" className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg" mb={3}>
              STUDENT STORIES
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              先輩たちの体験談
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              留学を経験した先輩たちの声をご紹介します。不安から成長へ、彼らの変化をぜひ参考にしてください。
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} width="full">
            {studentVoices.map((voice, index) => (
              <StudentVoice key={index} {...voice} />
            ))}
          </SimpleGrid>

          <Button
            as={RouterLink}
            to="/voices"
            size="lg"
            variant="outline"
            colorScheme="blue"
            mt={4}
          >
            もっと体験談を見る
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
