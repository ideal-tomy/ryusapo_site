import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, List, ListItem, ListIcon, Image, Badge, useBreakpointValue, Divider, Flex, Grid } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
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
      '学校選定・見学アポ取得・日程調整',
      '当日の同行・通訳・現地スタッフ紹介',
      '在学生・卒業生ネットワークでリアルな声を提供',
      '見学後のフィードバック・進路相談・出願サポート',
      '案内人ではなく"コンシェルジュ"型サポート',
      '安心・快適な環境づくり（移動・滞在・保護者向け）',
      'コスパの良さ（料金表で明示）'
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
      '学校選定・エッセイ添削・面接練習',
      'ビザ取得・現地生活準備',
      '入学後の初期サポート',
      '留学経験者がマンツーマンで伴走',
      '英語指導パートナーと連携し全て対応',
      '家庭ごとの事情に寄り添う柔軟な対応'
    ]
  }
];

const ServiceDetailPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const showIcon = useBreakpointValue({ base: false, md: true });
  return (
    <Box as="main" bg="gray.50">
      <Container maxW="container.xl" py={12}>
        <Heading as="h1" size="2xl" mb={8} color="brand.base" textAlign="center" letterSpacing="wide">
          <Box as="span" display="inline-block" bgGradient="linear(to-r, brand.base, blue.400)" bgClip="text" fontWeight="extrabold">
            サービス紹介
          </Box>
        </Heading>
        <Text fontSize="xl" color="gray.700" mb={12} textAlign="center" fontWeight="bold">
          サマーキャンプから現地校見学、出願・入学手続きまで——<br />
          留サポは「留学までのすべて」を、あなたの"挑戦"に寄り添いながら一気通貫でサポートします。
        </Text>
        <VStack spacing={20} align="stretch">
          <Box borderRadius="2xl" boxShadow="2xl" p={{ base: 4, md: 12 }} bg={serviceData[0].bg}>
            <Box textAlign="center" mb={8}>
              <Badge colorScheme="blue" fontSize={{ base: 'md', md: 'lg' }} mb={2} px={4} py={1} borderRadius="full" fontWeight="bold">
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
              <Box my={12}>
                <Heading as="h2" size={{ base: 'md', md: 'xl' }} color="blue.700" fontWeight="extrabold" textAlign="center" mb={8}>
                  サマーキャンプ1日の流れ
                </Heading>
                <VStack spacing={8} align="stretch">
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
                  ].map(item => (
                    <Grid
                      key={item.time}
                      templateColumns={{ base: '120px 1fr', md: '160px 1fr' }}
                      alignItems="center"
                      gap={6}
                      w="100%"
                    >
                      <Box
                        color="blue.700"
                        fontWeight="bold"
                        fontSize="36px"
                        textAlign="right"
                        pt={1}
                        w="100%"
                      >
                        {item.time}
                      </Box>
                      <Box>
                        <Text fontWeight="bold" fontSize="36px" mb={1} color="brand.base">{item.title}</Text>
                        <Text color="gray.700" mb={2} fontSize={{ base: 'md', md: '22px' }}>{item.desc}</Text>
                        {item.blue && (
                          <Text color="blue.600" fontWeight="bold" fontSize={{ base: 'md', md: '24px' }}>
                            {item.blue}
                          </Text>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </VStack>
              </Box>
              <Box my={12}>
                <VStack spacing={12} align="stretch" w="100%">
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
                          <Text fontSize="lg" fontWeight="semibold">{item.title}</Text>
                          <Text mt={2}>{item.desc}</Text>
                        </Box>
                      </Grid>
                      <Text color="blue.600" fontWeight="bold" fontSize={{ base: 'md', md: '24px' }} mt={4} mb={2} textAlign="center">
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
              <Badge colorScheme="blue" fontSize={{ base: 'md', md: 'lg' }} mb={2} px={4} py={1} borderRadius="full" fontWeight="bold">
                {serviceData[1].title}
              </Badge>
              <Heading as="h2" size={{ base: 'lg', md: '2xl' }} color="brand.base" mb={2} fontWeight="extrabold" letterSpacing="wide">
                {serviceData[1].catch}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.700" mb={2} fontWeight="bold">
                {serviceData[1].subtitle}
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
              <Box my={12} position="relative">
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
              <VStack spacing={12} align="stretch" w="100%">
                {[
                  {
                    title: '学校選定・見学アポ取得・日程調整',
                    text: '希望や適性を丁寧にヒアリングし、最適な学校をリストアップ。見学アポイントや日程調整もすべてお任せください。',
                    blue: '「自分に本当に合う学校」と出会うための第一歩を、プロが徹底サポート。',
                    img: 'https://placehold.jp/160x160.png',
                  },
                  {
                    title: '当日の同行・通訳・現地スタッフ紹介',
                    text: '日本人・バイリンガルスタッフが現地で同行し、通訳や現地生活のリアルな情報もご案内。保護者の方も安心です。',
                    blue: '「パンフレットでは分からない」学校の空気や雰囲気を、肌で体感できます。',
                    img: 'https://placehold.jp/160x160.png',
                  },
                  {
                    title: '在学生・卒業生ネットワークでリアルな声を提供',
                    text: '実際に通っている生徒や卒業生の「生の声」を直接聞ける機会をアレンジ。疑問や不安もその場で解消。',
                    blue: '「本当に自分に合うか」を納得して選べる、唯一無二の体験です。',
                    img: 'https://placehold.jp/160x160.png',
                  },
                  {
                    title: '見学後のフィードバック・進路相談・出願サポート',
                    text: '見学後は、感じたこと・気づきを一緒に整理。進路相談や出願・入学手続きまで一気通貫でサポートします。',
                    blue: '「見て終わり」ではなく、未来につながるアクションまで伴走します。',
                    img: 'https://placehold.jp/160x160.png',
                  },
                  {
                    title: '安心・快適な環境づくり（移動・滞在・保護者向け）',
                    text: '移動や滞在先の手配、保護者向けのサポートも充実。初めての現地訪問でもストレスなく過ごせます。',
                    blue: '「家族みんなが安心できる」現地校見学を実現します。',
                    img: 'https://placehold.jp/160x160.png',
                  },
                  {
                    title: 'コスパの良さ（料金表で明示）',
                    text: 'ここまで手厚いサポートを、明朗な料金体系でご提供。費用面も納得してご利用いただけます。',
                    blue: '「この価格でここまで？」と驚かれるコスパの良さを実感してください。',
                    img: 'https://placehold.jp/160x160.png',
                  },
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
                        <Text fontSize="lg" fontWeight="semibold">{item.title}</Text>
                        <Text mt={2}>{item.text}</Text>
                      </Box>
                    </Grid>
                    <Text color="blue.600" fontWeight="bold" fontSize={{ base: 'md', md: '24px' }} mt={4} mb={2} textAlign="center">
                      {item.blue}
                    </Text>
                    {idx !== arr.length - 1 && (
                      <Divider borderColor="gray.300" borderWidth={1} my={8} w="80%" mx="auto" />
                    )}
                  </Box>
                ))}
              </VStack>
              <Box mt={8}>{serviceData[1].priceTable && <SchoolVisitPricingTable />}</Box>
            </Box>
          </Box>
          <Box borderRadius="2xl" boxShadow="2xl" p={{ base: 4, md: 12 }} bg={serviceData[2].bg}>
            <Box textAlign="center" mb={8}>
              <Badge colorScheme="blue" fontSize={{ base: 'md', md: 'lg' }} mb={2} px={4} py={1} borderRadius="full" fontWeight="bold">
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
              <Box my={12} position="relative">
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
              <VStack spacing={10} align="center">
                <Box display="flex" alignItems="flex-start" gap={6} w="100%">
                  {showIcon && (
                    <Box fontSize={{ base: '3xl', md: '4xl' }} color="blue.600" opacity={0.9} mt={1}>
                      🎯
                    </Box>
                  )}
                  <Box flex={1}>
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={2} fontWeight="bold">
                      学校選定・エッセイ添削・面接練習
                    </Heading>
                    <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="semibold">
                      希望や適性を丁寧にヒアリングし、世界中の高校・大学から最適な進学先をリサーチ。エッセイ添削や面接練習もプロが徹底サポート。
                    </Text>
                    <Box h={4} />
                    <Text fontSize={{ base: 'md', md: '28px' }} color="blue.600" fontWeight="bold">
                      「合格」だけでなく、「納得と成長」のある進学体験を実現します。
                    </Text>
                  </Box>
                </Box>
                <Divider borderColor="gray.200" borderWidth={1} my={2} w="80%" />
                <Box display="flex" alignItems="flex-start" gap={6} w="100%">
                  {showIcon && (
                    <Box fontSize={{ base: '3xl', md: '4xl' }} color="blue.600" opacity={0.9} mt={1}>
                      📄
                    </Box>
                  )}
                  <Box flex={1}>
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={2} fontWeight="bold">
                      ビザ取得・現地生活準備
                    </Heading>
                    <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="semibold">
                      ビザ申請や現地での生活準備も、経験豊富なスタッフが一貫サポート。住まいや生活面の不安もまるごと解消。
                    </Text>
                    <Box h={4} />
                    <Text fontSize={{ base: 'md', md: '28px' }} color="blue.600" fontWeight="bold">
                      「海外生活のスタート」を安心して迎えられます。
                    </Text>
                  </Box>
                </Box>
                <Divider borderColor="gray.200" borderWidth={1} my={2} w="80%" />
                <Box display="flex" alignItems="flex-start" gap={6} w="100%">
                  {showIcon && (
                    <Box fontSize={{ base: '3xl', md: '4xl' }} color="blue.600" opacity={0.9} mt={1}>
                      🎓
                    </Box>
                  )}
                  <Box flex={1}>
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={2} fontWeight="bold">
                      入学後の初期サポート
                    </Heading>
                    <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="semibold">
                      入学後も「やりっぱなし」ではなく、現地での生活や学習の悩みも継続サポート。困った時はいつでも相談OK。
                    </Text>
                    <Box h={4} />
                    <Text fontSize={{ base: 'md', md: '28px' }} color="blue.600" fontWeight="bold">
                      「留学して終わり」ではなく、成長と安心をずっと支えます。
                    </Text>
                  </Box>
                </Box>
                <Divider borderColor="gray.200" borderWidth={1} my={2} w="80%" />
                <Box display="flex" alignItems="flex-start" gap={6} w="100%">
                  {showIcon && (
                    <Box fontSize={{ base: '3xl', md: '4xl' }} color="blue.600" opacity={0.9} mt={1}>
                      👨‍🏫
                    </Box>
                  )}
                  <Box flex={1}>
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={2} fontWeight="bold">
                      留学経験者がマンツーマンで伴走
                    </Heading>
                    <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="semibold">
                      自身も留学を経験したスタッフが、あなたの悩みや不安に寄り添いながら、合格・入学まで一緒に伴走します。
                    </Text>
                    <Box h={4} />
                    <Text fontSize={{ base: 'md', md: '28px' }} color="blue.600" fontWeight="bold">
                      「一人じゃない」から、最後までやり抜ける安心感。
                    </Text>
                  </Box>
                </Box>
                <Divider borderColor="gray.200" borderWidth={1} my={2} w="80%" />
                <Box display="flex" alignItems="flex-start" gap={6} w="100%">
                  {showIcon && (
                    <Box fontSize={{ base: '3xl', md: '4xl' }} color="blue.600" opacity={0.9} mt={1}>
                      🌐
                    </Box>
                  )}
                  <Box flex={1}>
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={2} fontWeight="bold">
                      英語指導パートナーと連携し全て対応
                    </Heading>
                    <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="semibold">
                      提携英語指導会社「Engrowth」と連携し、英語力やエッセイ添削も万全。どんなレベルからでも安心して挑戦できます。
                    </Text>
                    <Box h={4} />
                    <Text fontSize={{ base: 'md', md: '28px' }} color="blue.600" fontWeight="bold">
                      「英語が不安」でも、プロのサポートで夢を叶えられます。
                    </Text>
                  </Box>
                </Box>
                <Divider borderColor="gray.200" borderWidth={1} my={2} w="80%" />
                <Box display="flex" alignItems="flex-start" gap={6} w="100%">
                  {showIcon && (
                    <Box fontSize={{ base: '3xl', md: '4xl' }} color="blue.600" opacity={0.9} mt={1}>
                      💝
                    </Box>
                  )}
                  <Box flex={1}>
                    <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="brand.base" mb={2} fontWeight="bold">
                      家庭ごとの事情に寄り添う柔軟な対応
                    </Heading>
                    <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="semibold">
                      ご家庭ごとの事情や希望に合わせて、最適な進路・サポートプランをご提案。どんなご相談もお気軽にどうぞ。
                    </Text>
                    <Box h={4} />
                    <Text fontSize={{ base: 'md', md: '28px' }} color="blue.600" fontWeight="bold">
                      「あなたに合った留学」を一緒に実現します。
                    </Text>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Box>
        </VStack>
        <Box mt={24} mb={16}>
          <Heading as="h2" size={{ base: 'lg', md: '2xl' }} color="blue.700" textAlign="center" fontWeight="extrabold" mb={8} letterSpacing="wide">
            留学って、いつから検討すればいいの？
          </Heading>
          <Box mb={8}>
            <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" mb={4}>
              「高校2年になってから、なんとなく"このままでいいのか？"と感じるようになった」<br />
              「留学もありかもしれないけど、どう調べて、どう判断すればいいのか分からない」
            </Text>
            <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" mb={4}>
              そんな声をたくさん聞きます。
            </Text>
            <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="blue.600" fontWeight="bold" mb={4}>
              実は、留学は"間に合わなくなる"のが早い。
            </Heading>
            <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" mb={4}>
              特に正規留学（高校・大学）を検討する場合、<br />
              <b>出願の1年前には志望校を決めて準備を始める必要がある</b>ため、<br />
              「2年生の終わり頃」には大まかな方向性を持っているのが理想です。
            </Text>
            <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" mb={4}>
              出願直前で焦るより、<br />
              <b>時間をかけて"納得できる選択"をする方が、将来の満足度は圧倒的に高い。</b>
            </Text>
          </Box>
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
          <Box mb={8}>
            <Heading as="h3" size={{ base: 'md', md: 'xl' }} color="blue.700" fontWeight="bold" mb={6} textAlign="center">
              世界はすぐそこにある！
            </Heading>
            <Box overflowX="auto">
              <Box bg="white" borderRadius="2xl" boxShadow="2xl" overflow="hidden" border="1px solid #e3e8f0" w="100%">
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                  <thead style={{ background: '#f0f4fa' }}>
                    <tr>
                      <th style={{ padding: '24px', fontWeight: 'bold', color: '#2D3748', fontSize: '28px', textAlign: 'left' }}>プラン</th>
                      <th style={{ padding: '24px', fontWeight: 'bold', color: '#2D3748', fontSize: '28px', textAlign: 'left' }}>おすすめな人</th>
                      <th style={{ padding: '24px', fontWeight: 'bold', color: '#2D3748', fontSize: '28px', textAlign: 'left' }}>目的</th>
                      <th style={{ padding: '24px', fontWeight: 'bold', color: '#2D3748', fontSize: '28px', textAlign: 'left' }}>費用感</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ transition: 'all 0.2s' }}>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>サマーキャンプ</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>初めての海外、試してみたい人</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>挑戦と体験</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>約39万円〜</td>
                    </tr>
                    <tr style={{ transition: 'all 0.2s' }}>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>現地校見学</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>進路を迷っていて、見て決めたい人</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>納得感ある進学選び</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>$4980〜</td>
                    </tr>
                    <tr style={{ transition: 'all 0.2s' }}>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>出願・入学サポ</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>すでに留学を決めている人</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>合格・入学準備</td>
                      <td style={{ padding: '24px', borderTop: '1px solid #e2e8f0', fontSize: '28px' }}>応相談（セットプランあり）</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
          </Box>
          <Box textAlign="center" mt={8}>
            <Text fontSize={{ base: 'md', md: '28px' }} color="gray.700" fontWeight="bold">
              ご相談はこちら ▶️ <a href="#" style={{ color: '#38A169', textDecoration: 'underline' }}>LINEで相談する</a>
            </Text>
          </Box>
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
      </Container>
    </Box>
  );
};

export default ServiceDetailPage; 