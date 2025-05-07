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
    name: '山田 裕子',
    age: '高校2年生',
    text: '「カナダでの夏休み留学は人生を変える経験になりました。最初は不安でしたが、現地の人々の温かさに触れて、自分に自信がつきました。英語が話せるようになった嬉しさは今でも忘れられません！」',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
  },
  {
    name: '佐藤 健太',
    age: '大学1年生',
    text: '「オーストラリアでのボランティア活動を通じて、異文化理解の大切さを学びました。現地の子どもたちと一緒に活動する中で、コミュニケーションの本質を理解できたのが一番の収穫です。」',
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

          <Box mt={10} p={6} bg="gray.100" borderRadius="lg" width="full" textAlign="center">
            <Heading as="h3" size="lg" mb={4} color="brand.base">
              「行くだけでは意味ない」と痛感。
              <br />
              Engrowthで準備して正解でした
            </Heading>
            <Text color="gray.700">
              （ここに詳細なテキストが入ります。mdの画像からは具体的なテキスト内容が読み取れないため、プレースホルダーとしています。）
            </Text>
            <Text color="gray.700" mt={2}>
              （「高校1年生・私立文系／保護者さま」などの情報もここに追加可能です。）
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full" mt={10}>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Heading as="h4" size="md" mb={3} color="brand.base">塾では見えなかった「本物の学び」が、ハワイで一気に花開きました</Heading>
              <Text fontSize="sm" color="gray.500" mb={3}>（中高2年生・私立一貫校／保護者さま）</Text>
              <Text color="gray.700">
                子どもは昔から「暗記型」の勉強が苦手でしたが、留サポのキャンプで、自分の意見をまとめて英語で話すプレゼンに初めて「楽しい」と言ったようです。帰国後も、自発的に海外大学の情報を集めていて、目の輝きが違います。学生サポートや学習サポートがしっかりしていたのも、親として非常に安心できました。
              </Text>
            </Box>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Heading as="h4" size="md" mb={3} color="brand.base">「UCLA出身のスタッフが『同行』と聞いて、即決でした」</Heading>
              <Text fontSize="sm" color="gray.500" mb={3}>（中高3年生・私立校／保護者さま）</Text>
              <Text color="gray.700">
                家庭内では「いずれは英語圏の大学へ」と話していましたが、最初の一歩に何をすれば良いか悩んでいました。留サポのプログラムは、単なる英語体験ではなく"論理力・表現力・実行力"まで含めた、まさに海外型の教育。スタッフの方もUCLA卒と聞いて信頼感があり、同行してくださると聞いて迷わずお願いしました。実際、本人も「大学はアメリカに行きたい」と言い出し、親子で本気の話ができています。
              </Text>
            </Box>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Heading as="h4" size="md" mb={3} color="brand.base">「行くだけでは意味ない」と痛感。Engrowthで準備して正解でした</Heading>
              <Text fontSize="sm" color="gray.500" mb={3}>（高校1年生・私立文系／保護者さま）</Text>
              <Text color="gray.700">
                留サポのサマーキャンプに参加後、海外高校へ進学前に、提携しているEngrowth社で英語のエッセイライティングや英会話を強化できるEngrowthのプログラムも受講しました。英語が苦手なまま現地に行くと、友達もできず孤立してしまう…と聞いていたのでとても心配でしたが、うちの子は現地到着後すぐに友達ができ、毎日楽しそうに過ごしていて、親として本当に安心しました。特に、名門大学出身のコンサルタント（うちの子の担当はケンブリッジ大学卒の方でした）がマンツーマンで教えてくれるので、本人のやる気にも繋がったようです。「準備してから行く」ことで、海外体験の質が何倍にもなることを、私自身が実感しました。
              </Text>
            </Box>
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
