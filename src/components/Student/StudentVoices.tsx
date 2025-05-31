import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, VStack, Button, Badge } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type StudentVoiceProps = {
  name: string;
  age: string;
  location: string;
  beforeText: string;
  afterText: string;
};

const StudentVoice: React.FC<StudentVoiceProps> = ({ name, age, location, beforeText, afterText }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
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
    </Box>
  );
};

const studentVoices: StudentVoiceProps[] = [
  {
    name: 'K.A',
    age: '外資系IT企業勤務',
    location: 'ボストン',
    beforeText: '勉強が苦手でスポーツばかりしていましたが、このままではマズイと思い留学を決めました。',
    afterText: '英語が話せるようになったおかげで、大手外資系IT企業にも就職できたので、本当に人生を変える経験となりました。',
  },
  {
    name: 'N.F',
    age: '外資系企業に勤務',
    location: 'ロサンゼルス',
    beforeText: '高校の頃は英語が苦手で赤点ばかりだった私が米国大学に合格。',
    afterText: '気づけばネイティブと間違われるほど英語が上達。留学は大変だったけど、努力は絶対に裏切らない！',
  },
  {
    name: 'M.K',
    age: '高校生',
    location: 'ニューヨーク',
    beforeText: '中学までは周りの目を気にしすぎて人前で話すのが苦手でしたが、留学先でのプレゼンやディスカッションを体験して自分の意見を持つことの大切さを学びました。',
    afterText: '慣れるまでは辛いこともありましたが、友達のコミュニケーションが取れるようになった頃から、自分に自信が持てるようになりました。あの時、勇気を出して留学して本当によかったです！',
  },
  {
    name: 'S.R',
    age: '大学生',
    location: 'イギリス',
    beforeText: 'もともとは日本の大学に進学して交換留学で海外に行きたいなと思っていましたが、参加したサマーキャンプがきっかけで、海外の大学への進学を決意しました。',
    afterText: '異なる価値観を持つ友達と一緒に学ぶことで、自分自身の視野が大きく広がりました。就職活動でも、大企業の方がこちらの学校に来て説明会をしてくれたり、その場で面接・内定をいただけて沢山の機会があることを実感しています。英語が話せると就職してからも即戦力になれるとのことなので、今からとっても楽しみです！',
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

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="full">
            {studentVoices.map((voice, index) => (
              <StudentVoice key={index} {...voice} />
            ))}
          </SimpleGrid>

          {/* <Button
            as={RouterLink}
            to="/voices"
            size="lg"
            variant="outline"
            colorScheme="blue"
            mt={4}
          >
            もっと体験談を見る
          </Button> */}
        </VStack>
      </Container>
    </Box>
  );
};
