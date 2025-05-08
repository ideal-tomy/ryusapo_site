import { Box, Container, Heading, Text, SimpleGrid, Flex, Avatar, VStack, Button, Link, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { FaStar } from 'react-icons/fa';

type TestimonialProps = {
  name: string;
  age: string;
  text: string;
  avatarUrl: string;
  rating?: number;
};

const testimonials: TestimonialProps[] = [
  {
    name: 'T.K',
    age: '中学3年生時にサマーキャンプ、その後高校から渡米',
    text: '中学生まで勉強が苦手でスポーツばかりしていましたが、このままではマズイと思い留学を決めました。\n英語が話せるようになったおかげで、大手外資系IT企業にも就職できたので、本当に人生を変える経験となりました。',
    avatarUrl: './images/taiken01.jpg',
    rating: 5,
  },
  {
    name: 'N.F',
    age: 'UCLA卒業',
    text: '高校の頃は英語が苦手で赤点ばかりだった私がUCLAに合格。自力で学費を稼ぎながら必死に学び、気づけばネイティブと間違われるほど英語が上達。留学は大変だったけど、努力は絶対に裏切らない！',
    avatarUrl: './images/S__10854411_0.jpg',
    rating: 5,
  },
  {
    name: 'A.S',
    age: '保護者',
    text: '正解/不正解で成績を決める日本の教育に違和感を感じていましたが、海外留学をしたことで自分の意見や考えを尊重される環境でのびのびと成長し、卒業後は外資系企業で働いています。\n違いを受け入れ合う仲間たちとの出会いにも、本当に感謝しています。',
    avatarUrl: './images/S__10854413.jpg',
    rating: 5,
  },
];

const Testimonial = ({ name, age, text, avatarUrl, rating }: TestimonialProps) => {
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

      <Text fontSize="md" color="gray.700" whiteSpace="pre-line" flex="1">
        {text}
      </Text>
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
                text={testimonial.text} 
                avatarUrl={testimonial.avatarUrl} 
                rating={testimonial.rating}
              />
            ))}
          </SimpleGrid>

          <Button
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
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
