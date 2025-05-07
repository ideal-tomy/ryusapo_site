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
    name: '「塾では見えなかった“成長の芽”が、ハワイで一気に芽吹きました」',
    age: '（中学2年生・私立一貫校 / 保護者さま）',
    text: `子どもは昔から「暗記型」の勉強が苦手でしたが、留サポのキャンプで、自分の意見をまとめて英語で話すプレゼンに初めて「楽しい」と感じたようです。 帰国後も、自発的に海外大学の情報を集めていて、目の輝きが違います。
安全面やサポート体制がしっかりしていたのも、親として非常に安心できました。`,
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
  },
  {
    name: 'UCLA出身のスタッフが同行"と聞いて、即決でした',
    age: '（中学3年生・私立校 / 保護者さま）',
    text: `家庭内では「いずれは英語圏の大学へ」と話していましたが、最初の一歩に何をすれば良いか悩んでいました。
留サポのプログラムは、単なる英語体験ではなく"論理力・表現力・実行力"まで含めた、まさに海外型の教育。
スタッフの方がUCLA卒と聞いて信頼感があり、同行もしてくださると聞いて迷わずお願いしました。実際、本人も「大学はアメリカに行きたい」と言い出し、親子で本気の話ができています。`,
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2069',
  },
  {
    name: '行くだけ"では足りないと実感。Engrowthで準備して正解でした。', // 仮の名前
    age: '（高校1年生・私立一貫校 / 保護者さま）',
    text: `留サポのサマーキャンプに参加後、海外高校へ進学前に、提携しているEngrowth社で英語のエッセイライティングや英会話を強化できるEngrowthのプログラムも受講しました。 英語が苦手なまま現地に行くと、友達もできず孤立してしまう…と聞いていたのでとても心配でしたが、うちの子は現地到着後すぐに友達ができ、毎日楽しそうに過ごしていて、親として本当に安心しました。
特に、名門大学出身のコンサルタント（うちの子の担当はケンブリッチ大学院の方でした）がマンツーマンで教えてくれるので、本人のやる気にも繋がったようです。
「準備してから行く」ことで、海外体験の質が何倍にもなることを、私自身が実感しました。`,
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070', // 仮のアバター
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
          <Text fontSize="lg" fontStyle="italic" color="gray.600" whiteSpace="pre-line">
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

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                name={testimonial.name} 
                age={testimonial.age} 
                text={testimonial.text} 
                avatarUrl={testimonial.avatarUrl} 
              />
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
