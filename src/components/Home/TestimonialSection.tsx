import { Box, Container, Heading, Text, SimpleGrid, Flex, Avatar, VStack, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

type TestimonialProps = {
  name: string;
  age: string;
  text: string;
  avatarUrl: string;
};

// 仮の体験談データ（後で実際のデータに置き換える予定）
const testimonials: TestimonialProps[] = [
  {
    name: '山田 祐子',
    age: '高校2年生',
    text: 'カナダでの夏休み留学は人生を変える経験になりました。最初は不安でしたが、現地の人々の温かさに触れて、自分に自信がつきました。英語が話せるようになった嬉しさは今でも忘れられません！',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
  },
  {
    name: '佐藤 健太',
    age: '大学1年生',
    text: 'オーストラリアでのボランティア活動を通じて、異文化理解の大切さを学びました。現地の子どもたちと一緒に活動する中で、コミュニケーションの本質を理解できたのが一番の収穫です。',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2069',
  },
];

const Testimonial = ({ name, age, text, avatarUrl }: TestimonialProps) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
      transition="all 0.3s ease"
      height="100%"
    >
      <Flex direction="column" height="100%">
        <Box mb={4}>
          <Text fontSize="lg" fontStyle="italic" color="gray.600">
            "{text}"
          </Text>
        </Box>
        <Flex mt="auto" align="center">
          <Avatar src={avatarUrl} size="md" mr={4} />
          <Box>
            <Text fontWeight="bold">{name}</Text>
            <Text fontSize="sm" color="gray.500">{age}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export const TestimonialSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text
              color="brand.accent"
              fontWeight="bold"
              fontSize="lg"
              mb={3}
            >
              STUDENT STORIES
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              体験談ピックアップ
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={8}>
              留学を経験した学生たちの声をご紹介します
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="full">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </SimpleGrid>

          <Button
            as={RouterLink}
            to="/voices"
            size="lg"
            variant="outline"
            colorScheme="blue"
            mt={6}
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
