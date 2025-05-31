import { Box, Container, Heading, Text, SimpleGrid, Flex, Avatar, VStack, Button, Link, Icon, Badge } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { FaStar } from 'react-icons/fa';

type TestimonialProps = {
  name: string;
  age: string;
  beforeText: string;
  afterText: string;
  avatarUrl: string;
  rating?: number;
};

const testimonials: TestimonialProps[] = [
  {
    name: 'K.A',
    age: '中学3年生時にサマーキャンプ、その後高校から渡米',
    beforeText: '中学生まで勉強が苦手でスポーツばかりしていましたが、このままではマズイと思い留学を決めました。',
    afterText: '英語が話せるようになったおかげで、大手外資系IT企業にも就職できたので、本当に人生を変える経験となりました。',
    avatarUrl: './images/taiken01.jpg',
    rating: 5,
  },
  {
    name: 'N.F',
    age: 'UCLA卒業',
    beforeText: '高校の頃は英語が苦手で赤点ばかりだった私がUCLAに合格。',
    afterText: '自力で学費を稼ぎながら必死に学び、気づけばネイティブと間違われるほど英語が上達。留学は大変だったけど、努力は絶対に裏切らない！',
    avatarUrl: './images/S__10854411_0.jpg',
    rating: 5,
  },
  {
    name: 'A.S',
    age: '保護者',
    beforeText: '正解/不正解で成績を決める日本の教育に違和感を感じていましたが、海外留学をしたことで自分の意見や考えを尊重される環境でのびのびと成長し、卒業後は外資系企業で働いています。',
    afterText: '違いを受け入れ合う仲間たちとの出会いにも、本当に感謝しています。',
    avatarUrl: './images/S__10854413.jpg',
    rating: 5,
  },
  {
    name: 'M.K',
    age: '学生',
    beforeText: '中学までは周りの目を気にしすぎて人前で話すのが苦手でしたが、現地校でのプレゼンやディスカッションを通して自分の意見を持つことの大切さを学びました。',
    afterText: '慣れるまでは辛いこともありましたが、友達のコミュニケーションが取れるようになった頃から、自分に自信が持てるようになりました。',
    avatarUrl: './images/new_student01.jpg', // 仮の画像パス
    rating: 5,
  },
  {
    name: 'S.R',
    age: '学生',
    beforeText: 'もともとは日本の大学に進学して交換留学で海外に行きたいなと思っていましたが、参加したサマーキャンプがきっかけで、海外の大学への進学を決意しました。',
    afterText: '異なる価値観を持つ友達と一緒に学ぶことで、自分自身の視野が大きく広がりました。',
    avatarUrl: './images/new_student02.jpg', // 仮の画像パス
    rating: 5,
  },
  {
    name: 'Y.H',
    age: '保護者',
    beforeText: '得意・不得意の教科の差が激しく、日本の学校の定期テストや模試の成績はまちまちでした。しかし海外ではある領域がずば抜けて得意な方が評価されるため、留学へ行ってからは本人も楽しそうでした。',
    afterText: '一人娘なので心配でしたが、「離れている時間が子どもを成長させる」というモンテッソーリ教育の考え方を自分に言い聞かせていました。',
    avatarUrl: './images/new_parent01.jpg', // 仮の画像パス
    rating: 5,
  },
];

const Testimonial = ({ name, age, beforeText, afterText, avatarUrl, rating }: TestimonialProps) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
      transition="all 0.3s ease"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Flex align="center" mb={4}>
        <Avatar src={avatarUrl} name={name} size="lg" mr={4} />
        <Box>
          <Text fontWeight="bold" fontSize="xl" color="brand.base">{name}</Text>
          <Text fontSize="sm" color="gray.600">{age}</Text>
        </Box>
      </Flex>

      {rating && (
        <Flex mb={3}>
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Icon key={i} as={FaStar} color="orange.400" w={5} h={5} />
            ))}
        </Flex>
      )}

      <Box w="100%" flex="1">
        <Badge colorScheme="red" mb={2}>Before</Badge>
        <Text fontSize="sm" fontStyle="italic" color="gray.600" mb={4} whiteSpace="pre-line">
          "{beforeText}"
        </Text>
        
        <Badge colorScheme="green" mb={2}>After</Badge>
        <Text fontSize="sm" fontStyle="italic" color="gray.600" whiteSpace="pre-line">
          "{afterText}"
        </Text>
      </Box>
    </Box>
  );
};

export const TestimonialSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading as="h2" size="2xl" mb={4} color="brand.base">
              留学経験者からのメッセージ
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={10}>
              海外体験や留学を経験した人たちのメッセージを紹介します。
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                name={testimonial.name} 
                age={testimonial.age} 
                beforeText={testimonial.beforeText}
                afterText={testimonial.afterText}
                avatarUrl={testimonial.avatarUrl} 
                rating={testimonial.rating}
              />
            ))}
          </SimpleGrid>

          {/* <Button
            as={RouterLink}
            to="/voices"
            size="lg"
            variant="outline"
            colorScheme="blue"
            mt={8}
            _hover={{ bg: 'brand.light', transform: 'translateY(-2px)' }}
            transition="all 0.3s ease"
          >
            もっと体験談を見る
          </Button> */}
        </VStack>
      </Container>
    </Box>
  );
};
