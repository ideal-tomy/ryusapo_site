import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, List, ListItem, ListIcon, Image, Badge, useBreakpointValue, Divider, Flex, Grid, Table, Thead, Tbody, Tr, Th, Td, TableContainer, UnorderedList, Icon } from '@chakra-ui/react';
import { CheckCircleIcon, ChatIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { MainCTA } from '../../components/common/MainCTA';
import { FaqPreview, servicePageFaqs } from '../../components/common/FaqPreview';
import { SchoolVisitPricingTable } from '../../components/Services/SchoolVisitPricingTable';

const serviceData = [
  {
    key: 'camp',
    title: 'サマーキャンプ',
    catch: '世界が変わるきっかけは、たった一歩の勇気から',
    subtitle: '海外挑戦の最初の一歩。現地校見学・本格留学への土台づくり',
    image: '/images/S__10854415_0.jpg',
    bg: 'linear-gradient(135deg, #f0f4ff 60%, #e3f6fc 100%)',
    description: `「海外に行ってみたいけど、ちょっと不安…」そんなあなたへ。

サマーキャンプは、ただの短期体験ではありません。午前はハワイの大自然で心を解き放ち、午後は英語で自分の考えを伝えるプレゼンに挑戦。夜は仲間と語り合い、明日への自信を育てます。

「自分にもできた！」という小さな成功体験が、次の現地校見学や本格留学への"本気の一歩"につながります。
    `,
    features: [
      '午前：自然体験・感性を育てる心の教育',
      '午後：英語で社会課題に挑むプレゼン研修',
      '夜：振り返りセッション＋スタッフサポート',
      '現地スタッフ同行・健康管理',
      '帰国後の進路相談・現地校見学への橋渡し'
    ]
  },
  {
    key: 'visit',
    title: '現地校見学サポート',
    catch: 'パンフレットでは分からない"本当の学校"を体感',
    subtitle: '「案内人」ではなく"コンシェルジュ"として、学校選びから体験まで一貫サポート',
    image: '/images/summer02.jpg',
    bg: 'linear-gradient(135deg, #f7fafc 60%, #e6f7f1 100%)',
    description: `「どんな学校が自分に合うのか分からない」「現地の雰囲気を肌で感じたい」

留サポの現地校見学サポートは、ただの"案内"ではありません。学校選び・見学アポ・当日の同行・通訳・在校生のリアルな声まで、あなた専属の"コンシェルジュ"が全てをサポート。

見学後は進路相談や出願・入学手続きまで一気通貫。費用も明朗で、保護者の方も安心です。
    `,
    features: [
      { title: '学校選定・見学アポ取得・日程調整', img: '/images/summer02.jpg', description: '希望や適性を丁寧にヒアリングし、最適な学校をリストアップ。見学アポイントや日程調整もすべてお任せください。', blue: '「自分に本当に合う学校」と出会うための一歩を、プロが徹底サポート。' },
      { title: '当日の同行・通訳', img: '/images/summer02.jpg', description: '日本人・バイリンガルスタッフが現地で同行し、通訳や現地生活のリアルな情報もご案内。保護者の方も安心です。', blue: '「パンフレットでは分からない」学校の空気や雰囲気を、肌で体感できます。' },
      { title: '在学生・卒業生ネットワークでリアルな声を提供', img: '/images/summer02.jpg', description: '実際に通っている生徒や卒業生の「生の声」を直接聞ける機会をアレンジ。疑問や不安もその場で解消。', blue: '「本当に自分に合うか」を納得して選べる、唯一無二の体験です。' },
      { title: '見学後のフィードバック・進路相談・出願サポート', img: '/images/summer02.jpg', description: '見学後は、感じたこと・気づきを一緒に整理。進路相談や出願・入学手続き（別プランをご用意）まで一気通貫でサポートします。', blue: '「見て終わり」ではなく、未来につながるアクションまで伴走します。' },
      { title: '安心・快適な環境づくり（移動・滞在・保護者向け）', img: '/images/summer02.jpg', description: '移動や滞在先の手配、保護者向けのサポートも充実。初めての現地訪問でもストレスなく過ごせます。', blue: '「家族みんなが安心できる」現地校見学を実現します。' },
      { title: 'コスパの良さ（料金表で明示）', img: '/images/summer02.jpg', description: 'ここまで手厚いサポートを、明朗な料金体系でご提供。費用面も納得してご利用いただけます。', blue: '「この価格でここまで？」と驚かれるコスパの良さを実感してください。' }
    ],
    priceTable: true
  },
  {
    key: 'apply',
    title: '出願・入学手続きサポート',
    catch: '夢を"現実"に変える、最後の伴走者',
    subtitle: '夢を、確かな進路へ。英語・エッセイ・ビザも全てお任せ',
    image: '/images/sapport03.jpg',
    bg: 'linear-gradient(135deg, #f8f9fa 60%, #f3f0fa 100%)',
    description: `「本当に合格できる？」「英語やエッセイが不安…」

留サポは、志望校選びから出願・入学まで、留学経験者がマンツーマンで伴走。英語力が不安な方も、提携英語指導会社「Engrowth」と連携し、エッセイ添削・面接練習・ビザ取得・現地生活準備まで全て対応可能です。

家庭ごとの事情や希望に寄り添い、最適な進路選択と合格・入学まで一気通貫でサポートします。
    `,
    features: [
      {
        title: '学校選定・エッセイ添削・面接練習',
        text: '生徒様の希望や適性を丁寧にヒアリングし、最適な進学先をご提案。合格に向けたエッセイ添削や面接練習も専門家が徹底サポートします。',
        blue: '「夢への最短ルート」を一緒に見つけ、実現します。',
        img: '/images/sapport03.jpg',
      },
      {
        title: '出願書類作成・推薦状依頼サポート',
        text: '複雑な出願書類も、経験豊富なスタッフが丁寧にサポート。',
        blue: '「書類選考で差をつける」ための戦略を伝授します。',
        img: '/images/sapport03.jpg',
      },
      {
        title: '合格後の入学手続き・ビザ申請サポート',
        text: '合格後も安心。入学手続きやビザ申請など、煩雑な手続きを代行。',
        blue: '「スムーズな渡航準備」で、新生活を応援します。',
        img: '/images/sapport03.jpg',
      },
      {
        title: '渡航前オリエンテーション・現地生活準備サポート',
        text: '渡航前の不安を解消。現地での生活情報や注意事項を丁寧に説明。',
        blue: '「自信を持って出発できる」よう、万全の準備を。',
        img: '/images/sapport03.jpg',
      },
      {
        title: '英語指導パートナーと連携し全て対応',
        text: '提携する専門の英語指導機関と連携し、留学に必要な英語力の向上から、専門分野の英語対策まで幅広くカバーします。',
        blue: '「英語力アップもお任せ」目標達成をサポート。',
        img: '/images/sapport03.jpg',
      },
      {
        title: '留学経験者がマンツーマンで伴走',
        text: '実際に留学を経験したカウンセラーが、生徒様一人ひとりに寄り添い、出願から卒業まで一貫してサポート。実体験に基づくアドバイスが強みです。',
        blue: '「先輩がいるから心強い」あなたの挑戦を全力で応援。',
        img: '/images/sapport03.jpg',
      },
      {
        title: '家庭ごとの事情に寄り添う柔軟な対応',
        text: 'ご家庭の教育方針や経済的な状況、生徒様の個性や目標など、あらゆる事情を考慮し、最適な留学プランをオーダーメイドでご提案します。',
        blue: '「あなただけの留学プラン」を一緒に作り上げます。',
        img: 'https://placehold.jp/160x160.png',
      },
    ]
  }
];

const ServiceDetailPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const showIcon = useBreakpointValue({ base: false, md: true });

  const visitFeaturesContent = (serviceData[1].features as { title: string; img: string; description: string; blue?: string; }[]).map((item, idx, arr) => (
    <Box key={item.title} w="100%">
      {idx === 0 && (
        <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
      )}
      <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={4} fontWeight="bold" textAlign="center">
        {item.title}
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: idx % 2 === 0 ? '160px 1fr' : '1fr 160px' }}
        alignItems="center"
        gap={4}
        maxW="800px"
        mx="auto"
        my={6}
      >
        <Box order={{ base: 1, md: idx % 2 === 0 ? 1 : 2 }} display="flex" justifyContent="center">
          <Image
            src={item.img}
            alt={item.title} // Keep alt simple, or use description if more appropriate
            boxSize={{ base: '120px', md: '160px' }}
            borderRadius="full"
            objectFit="cover"
            boxShadow="lg"
            flexShrink={0}
            mx={{ base: 'auto', md: 0 }}
          />
        </Box>
        <Box order={{ base: 2, md: idx % 2 === 0 ? 2 : 1 }} textAlign="left" p={1}>
          {/* The Heading above already displays the title. This Box is for the description. */}
          <Text fontSize={{ base: 'md', md: '24px' }} color="gray.700" whiteSpace="pre-line">
            {item.description}
          </Text>
        </Box>
      </Grid>
      {item.blue && (
        <Text
          fontSize={{ base: 'lg', md: '28px' }}
          color="blue.500" // Chakra UIの青色スケールを使用。brand.blue等も可
          mt={4}
          textAlign="center"
          w="full"
          fontWeight="semibold"
        >
          {item.blue}
        </Text>
      )}
      {idx !== arr.length - 1 && (
        <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
      )}
    </Box>
  ));
  return (
    <Box as="main" bg="gray.50">
      {/* Hero Section with Background Image and Overlay */}
      <Box
        bgImage="url('/images/test.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
        py={{ base: 20, md: 40 }}
        color="white" // Default text color for hero section
      >
        <Box // Overlay Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)" // Black overlay with 50% opacity
          zIndex="0"
        />
        <Container maxW="container.xl" position="relative" zIndex="1">
          <Heading as="h1" size="2xl" mb={{ base: 4, md: 8 }} textAlign="center" letterSpacing="wide">
            <Box as="span" display="inline-block" bgGradient="linear(to-r, blue.300, cyan.300)" bgClip="text" fontWeight="extrabold">
              サービス紹介
            </Box>
          </Heading>
          <Text fontSize="24px" color="gray.100" mb={{ base: 8, md: 12 }} textAlign="center" fontWeight="bold">
            サマーキャンプから現地校見学、出願・入学手続きまで——<br />
            留サポは「留学までのすべて」を、あなたの"挑戦"に寄り添いながら一気通貫でサポートします。
          </Text>
        </Container>
      </Box>

      {/* Rest of the page content */}
      <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
        <VStack spacing={{ base: 10, md: 20 }} align="stretch">
          <Box borderRadius="2xl" boxShadow="2xl" p={{ base: 4, md: 12 }} bg={serviceData[0].bg}>
            <Box textAlign="center" mb={8}>
              <Badge colorScheme="blue" fontSize={{ base: '22px', md: 'lg' }} mb={2} px={4} py={1} borderRadius="full" fontWeight="bold">
                {serviceData[0].title}
              </Badge>
              <Heading as="h2" size={{ base: 'lg', md: '2xl' }} color="brand.base" mb={2} fontWeight="extrabold" letterSpacing="wide">
                {serviceData[0].catch}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" mb={2} fontWeight="bold">
                {serviceData[0].subtitle}
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} alignItems="start" mb={8}>
              <Box textAlign="center" px={isMobile ? 0 : 8} py={isMobile ? 4 : 0}>
                <Image src={serviceData[0].image} alt={serviceData[0].title} borderRadius="2xl" maxH="340px" mx="auto" objectFit="cover" boxShadow="lg" />
              </Box>
              <Box px={isMobile ? 0 : 8} py={isMobile ? 4 : 0}>
                <Text color="gray.700" whiteSpace="pre-line" fontSize={{ base: 'md', md: '22px' }}>
                  {serviceData[0].description}
                </Text>
              </Box>
            </SimpleGrid>
            <Box textAlign="center" mt={8}>
              <Box my={{ base: 4, md: 12 }}>
                <Box position="relative" mb={8}>
                  <Divider borderColor="gray.300" borderWidth={1} mb={6} w="60%" mx="auto" opacity={0.8} />
                  <Heading
                    as="h2"
                    size={{ base: 'lg', md: '2xl' }}
                    color="blue.700"
                    fontWeight="extrabold"
                    letterSpacing="wide"
                    textAlign="center"
                    mb={6}
                  >
                    サマーキャンプ1日の流れ
                  </Heading>
                  <Divider borderColor="gray.300" borderWidth={1} mt={6} w="60%" mx="auto" opacity={0.8} />
                </Box>
                <VStack spacing={{ base: 2, md: 8 }} align="stretch">
                  {[
                    {
                      time: '9:00',
                      title: '自然体験・心を育てるアクティビティ',
                      desc: 'ハワイの大自然の中で、五感をフルに使ったアクティビティを体験。 ただ「遊ぶ」だけでなく、自然との対話を通じて自分の感性や考える力を育てます。',
                      blue: '自分の"好き"や"得意"を発見し、自己肯定感を高める貴重な時間です。'
                    },
                    {
                      time: '12:00',
                      title: 'ランチ',
                      desc: 'ハワイの名物を仲間と一緒に、楽しい時ハワイならではの名物料理を味わいながら、仲間との会話もはずむ、楽しいランチタイムを過ごします。',
                      blue: ''
                    },
                    {
                      time: '13:00',
                      title: '英語で挑むプレゼン研修',
                      desc: '世界の同世代と一緒に、英語で社会課題について考え、発表するワークショップ。 英語力に自信がなくても、スタッフがしっかりサポート。',
                      blue: '「伝える力」「考える力」「チャレンジ精神」が自然と身につきます。'
                    },
                    {
                      time: '16:30',
                      title: '1日の振り返りとラップアップ',
                      desc: '1日の終わりに、仲間やスタッフと一緒に「今日の気づき」「明日の目標」を共有。 不安や悩みもすぐに相談できる環境で、安心して新しい挑戦を続けられます。',
                      blue: '心の成長と安心感が、次のチャレンジへの原動力になります。'
                    }
                  ].map((item, idx, arr) => (
                    <React.Fragment key={item.time}>
                    <Grid
                      templateColumns={{ base: '1fr', md: '160px 1fr' }}
                      alignItems="baseline"
                      gap={{ base: 3, md: 6 }}
                      w="100%"
                      maxW="800px"
                  mx="auto"
                    >
                      <Box
                        color="blue.700"
                        fontWeight="bold"
                        fontSize={{ base: 'lg', md: '36px' }}
                        textAlign='center'
                        w="100%"
                        mb={{ base: 1, md: 0 }}
                      >
                        {item.time}
                      </Box>
                      <Box>
                        <Text fontWeight="bold" fontSize={{ base: 'lg', md: '36px' }} mb={{ base: 0.5, md: 1 }} color="brand.base">{item.title}</Text>
                        <Text color="gray.700" mb={{ base: 1, md: 2 }} fontSize={{ base: 'md', md: '24px' }}>{item.desc}</Text>
                        {item.blue && (
                          <Text color="blue.600" fontWeight="bold" fontSize={{ base: 'lg', md: '28px' }}>
                            {item.blue}
                          </Text>
                        )}
                      </Box>
                    </Grid>
                    {idx !== arr.length - 1 && (
                        <Divider borderColor="gray.300" borderWidth={1} my={{ base: 4, md: 8 }} w="80%" mx="auto" />
                      )}
                    </React.Fragment>
                  ))}
                </VStack>
              </Box>
              <Box my={{ base: 4, md: 12 }}>
                <VStack spacing={{ base: 4, md: 12 }} align="stretch" w="100%">
                  {[
                    {
                      title: '現地スタッフ同行・健康管理',
                      desc: '海外大卒・留学経験豊富な日本人スタッフが常に同行。 体調や安全面もきめ細かくサポートし、初めての海外でも安心して過ごせます。',
                      blue: '「もしもの時」もすぐに頼れる安心感が、思い切り挑戦できる理由です。',
                      img: 'https://placehold.jp/160x160.png'
                    },
                    {
                      title: '帰国後の進路相談・現地校見学への橋渡し',
                      desc: '帰国後も「やりっぱなし」ではなく、次のステップ（現地校見学や本格留学）へしっかりサポート。 一人ひとりの成長や夢に合わせて、最適な進路を一緒に考えます。',
                      blue: '「体験で終わらせない」——未来につながるサポートです。',
                      img: 'https://placehold.jp/160x160.png'
                    }
                  ].map((item, idx, arr) => (
                    <Box key={item.title} w="100%">
                      {idx === 0 && (
                        <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
                      )}
                      <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={4} fontWeight="bold" textAlign="center">
                        {item.title}
                    </Heading>
                      <Grid
                        templateColumns={{ base: '1fr', md: idx % 2 === 0 ? '160px 1fr' : '1fr 160px' }}
                        alignItems="center"
                        gap={4}
                        maxW="800px"
                        mx="auto"
                        my={6}
                      >
                        <Box order={{ base: 1, md: idx % 2 === 0 ? 1 : 2 }} display="flex" justifyContent="center">
                          <Image
                            src={item.img}
                            alt={item.title}
                            boxSize={{ base: '120px', md: '160px' }}
                            borderRadius="full"
                            objectFit="cover"
                            boxShadow="lg"
                            flexShrink={0}
                            mx={{ base: 'auto', md: 0 }}
                          />
                  </Box>
                        <Box order={{ base: 2, md: idx % 2 === 0 ? 2 : 1 }} textAlign="left">
                          <Text mt={2} fontSize='24px'>{item.desc}</Text>
                </Box>
                      </Grid>
                      <Text color="blue.600" fontWeight="bold" fontSize='28px' mt={4} mb={2} textAlign="center">
                        {item.blue}
                    </Text>
                      {idx !== arr.length - 1 && (
                        <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
                      )}
                    </Box>
                  ))}
                </VStack>
                </Box>
            </Box>
          </Box>
          <Box borderRadius="2xl" boxShadow="2xl" p={{ base: 4, md: 12 }} bg={serviceData[1].bg}>
            <Box textAlign="center" mb={8}>
              <Badge colorScheme="blue" fontSize={{ base: '22px', md: 'lg' }} mb={2} px={4} py={1} borderRadius="full" fontWeight="bold">
                {serviceData[1].title}
              </Badge>
              <Heading as="h2" size={{ base: 'lg', md: '2xl' }} color="brand.base" mb={2} fontWeight="extrabold" letterSpacing="wide">
                {serviceData[1].catch}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" mb={2} fontWeight="bold">
                「案内人」ではなく
                <Text as="span" fontSize="1.2em" color="#002f5f" fontWeight="extrabold" textDecoration="underline" textDecorationColor="#002f5f" textDecorationThickness="2px" textUnderlineOffset="3px">
                  "コンシェルジュ"
                </Text>
                として、学校選びから体験まで一貫サポート
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} alignItems="start" mb={8}>
              <Box textAlign="center" px={isMobile ? 0 : 8} py={isMobile ? 4 : 0}>
                <Image src={serviceData[1].image} alt={serviceData[1].title} borderRadius="2xl" maxH="340px" mx="auto" objectFit="cover" boxShadow="lg" />
              </Box>
              <Box px={isMobile ? 0 : 8} py={isMobile ? 4 : 0}>
                <Text color="gray.700" whiteSpace="pre-line" fontSize={{ base: 'md', md: '22px' }}>
                  {serviceData[1].description}
                </Text>
              </Box>
            </SimpleGrid>
            <Box textAlign="center" mt={8}>
              <Box my={{ base: 4, md: 12 }} position="relative">
                <Divider 
                  borderColor="gray.300" 
                  borderWidth={1} 
                  mb={6} 
                  w="60%" 
                  mx="auto"
                  opacity={0.8}
                />
                <Heading
                  as="h2"
                  size={{ base: 'lg', md: '2xl' }}
                  color="blue.700"
                  fontWeight="extrabold"
                  letterSpacing="wide"
                  textAlign="center"
                  mb={6}
                >
                  私たちが提供すること
                </Heading>
                <Divider 
                  borderColor="gray.300" 
                  borderWidth={1} 
                  mt={6} 
                  w="60%" 
                  mx="auto"
                  opacity={0.8}
                />
              </Box>
              <VStack spacing={{ base: 4, md: 12 }} align="stretch" w="100%">
{visitFeaturesContent}
              </VStack>
              <Box mt={8}>{serviceData[1].priceTable && <SchoolVisitPricingTable />}</Box>
            </Box>
          </Box>
          <Box borderRadius="2xl" boxShadow="2xl" p={{ base: 4, md: 12 }} bg={serviceData[2].bg}>
            <Box textAlign="center" mb={8}>
              <Badge colorScheme="blue" fontSize={{ base: '22px', md: 'lg' }} mb={2} px={4} py={1} borderRadius="full" fontWeight="bold">
                {serviceData[2].title}
              </Badge>
              <Heading as="h2" size={{ base: 'lg', md: '2xl' }} color="brand.base" mb={2} fontWeight="extrabold" letterSpacing="wide">
                {serviceData[2].catch}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" mb={2} fontWeight="bold">
                {serviceData[2].subtitle}
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} alignItems="start" mb={8}>
              <Box textAlign="center" px={isMobile ? 0 : 8} py={isMobile ? 4 : 0}>
                <Image src={serviceData[2].image} alt={serviceData[2].title} borderRadius="2xl" maxH="340px" mx="auto" objectFit="cover" boxShadow="lg" />
              </Box>
              <Box px={isMobile ? 0 : 8} py={isMobile ? 4 : 0}>
                <Text color="gray.700" whiteSpace="pre-line" fontSize={{ base: 'md', md: '22px' }}>
                  {serviceData[2].description}
                </Text>
              </Box>
            </SimpleGrid>
            <Box textAlign="center" mt={8}>
              <Box my={{ base: 4, md: 12 }} position="relative">
                <Divider 
                  borderColor="gray.300" 
                  borderWidth={1} 
                  mb={6} 
                  w="60%" 
                  mx="auto"
                  opacity={0.8}
                />
                <Heading
                  as="h2"
                  size={{ base: 'lg', md: '2xl' }}
                  color="blue.700"
                  fontWeight="extrabold"
                  letterSpacing="wide"
                  textAlign="center"
                  mb={6}
                >
                  私たちが提供すること
                </Heading>
                <Divider 
                  borderColor="gray.300" 
                  borderWidth={1} 
                  mt={6} 
                  w="60%" 
                  mx="auto"
                  opacity={0.8}
                />
              </Box>
              <VStack spacing={{ base: 4, md: 12 }} align="stretch" w="100%">
                {(serviceData[2].features as { title: string; text: string; blue: string; img: string; }[]).map((item, idx, arr) => (
                  <Box key={item.title} w="100%">
                    {idx === 0 && (
                      <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
                    )}
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={4} fontWeight="bold" textAlign="center">
                      {item.title}
                    </Heading>
                    <Grid
                      templateColumns={{ base: '1fr', md: idx % 2 === 0 ? '160px 1fr' : '1fr 160px' }}
                      alignItems="center"
                      gap={4}
                      maxW="800px"
                      mx="auto"
                      my={6}
                    >
                      <Box order={{ base: 1, md: idx % 2 === 0 ? 1 : 2 }} display="flex" justifyContent="center">
                        <Image
                          src={item.img}
                          alt={item.title}
                          boxSize={{ base: '120px', md: '160px' }}
                          borderRadius="full"
                          objectFit="cover"
                          boxShadow="lg"
                          flexShrink={0}
                          mx={{ base: 'auto', md: 0 }}
                        />
                      </Box>
                      <Box order={{ base: 2, md: idx % 2 === 0 ? 2 : 1 }} textAlign="left">
                        <Text mt={2} color="gray.700" fontSize={{ base: 'md', md: '24px' }}>{item.text}</Text>
                      </Box>
                    </Grid>
                    {item.blue && (
                      <Text color="blue.600" fontWeight="bold" fontSize={{ base: 'lg', md: '28px' }} mt={4} mb={2} textAlign="center">
                        {item.blue}
                      </Text>
                    )}
                    {idx !== arr.length - 1 && (
                      <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>
          <Box bg="gray.50" py={{ base: 8, md: 16 }}>
            <Container maxW="container.lg">
              <VStack spacing={{ base: 6, md: 8 }} align="stretch">
                <Heading as="h2" size={{ base: 'lg', md: 'xl' }} color="blue.700" textAlign="center" fontWeight="extrabold" letterSpacing="wide">
                  留学って、いつから検討すればいいの？
                </Heading>

                <Box bg="white" p={{ base: 4, md: 6 }} borderRadius="lg" boxShadow="base">
                  <Flex align="center" mb={3}>
                    <Icon as={ChatIcon} w={6} h={6} color="blue.500" mr={3} />
                    <Heading as="h3" size="md" color="blue.600" fontWeight="bold" fontSize={{ base: "lg", md: "28px" }}>
                      こんな悩み、ありませんか？
                    </Heading>
                  </Flex>
                  <Text color="gray.600" mb={2} fontSize={{ base: 'md', md: '24px' }}>
                    「高校2年になってから、なんとなく"このままでいいのか？"と感じるようになった」
                  </Text>
                  <Text color="gray.600" fontSize={{ base: 'md', md: '24px' }}>
                    「留学もありかもしれないけど、どう調べて、どう判断すればいいのか分からない」
                  </Text>
                  <Text color="gray.700" mt={3} fontWeight="medium" fontSize={{ base: 'sm', md: '24px' }}>
                    ——そんな声を、私たちはたくさん聞いています。
                  </Text>
                </Box>

                <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="blue.600" fontWeight="bold" mb={4}>
                  実は、留学は"間に合わなくなる"のが早い。
                </Heading>
                <Text fontSize={{ base: 'md', md: '24px' }} color="gray.700" mb={4}>
                  特に正規留学（高校・大学）を検討する場合、<br />
                  <b>出願の1年前には志望校を決めて準備を始める必要がある</b>ため、<br />
                  「2年生の終わり頃」には大まかな方向性を持っているのが理想です。
                </Text>
                <Text fontSize={{ base: 'md', md: '24px' }} color="gray.700" mb={4}>
                  出願直前で焦るより、<br />
                  <b>時間をかけて"納得できる選択"をする方が、将来の満足度は圧倒的に高い。</b>
                </Text>

                <Divider borderColor="gray.200" borderWidth={1} my={8} />
                <Box bg="blue.50" borderRadius="2xl" boxShadow="lg" px={{ base: 4, md: 10 }} py={{ base: 6, md: 10 }} mb={12} borderLeft="8px solid #3182ce">
                  <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="blue.700" fontWeight="extrabold" mb={4}>
                    だからこそ、私たちは"相談だけでも早めに"をおすすめします。
                  </Heading>
                  <List spacing={2} mb={4} color="blue.800" fontWeight="semibold" fontSize={{ base: 'md', md: '28px' }}>
                    <ListItem>・まだ何も決まっていない段階でもOK</ListItem>
                    <ListItem>・英語が苦手でもOK</ListItem>
                    <ListItem>・留学するかどうか迷っている段階からでOK</ListItem>
                  </List>
                  <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" mb={4}>
                    まずは今の状況を聞かせてください。<br />
                    <b>必要な情報と、考えるヒントを"先回り"して提供するのが、私たちの役割です。</b>
                  </Text>
                  <Box textAlign="center" mt={4}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Box as="span" bg="green.400" color="white" px={6} py={3} borderRadius="full" fontWeight="bold" fontSize="lg" boxShadow="md" _hover={{ bg: 'green.500' }} transition="all 0.2s">
                        LINEで相談する
                      </Box>
                    </a>
                  </Box>
                </Box>
                <Divider borderColor="gray.200" borderWidth={1} my={8} />
                <Box textAlign="center" mt={8}>
                  <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="bold">
                    ご相談はこちら ▶️ <a href="#" style={{ color: '#38A169', textDecoration: 'underline' }}>LINEで相談する</a>
                  </Text>
                </Box>

              </VStack>
            </Container>
          </Box>
          <Box mt={20}>
            <FaqPreview 
              title="サービスに関するよくある質問"
              description="留学サービスについてのよくある質問と回答をご紹介します"
              showTabs={false}
              studentFaqs={servicePageFaqs}
              maxItems={6}
              defaultTab={0}
            />
          </Box>
          <Box bg="gray.100" py={16} mt={12}>
            <MainCTA />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServiceDetailPage; 