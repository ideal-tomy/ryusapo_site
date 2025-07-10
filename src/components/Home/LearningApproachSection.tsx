import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Icon, Divider, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCampground, FaSearchLocation, FaUserGraduate, FaGlobeAsia, FaBullseye } from 'react-icons/fa'; // アイコン例

const textOutlineYellow = {
  color: 'brand.base',
  textShadow: `
    1px 1px 0 #f5d547,
    -1px 1px 0 #f5d547,
    1px -1px 0 #f5d547,
    -1px -1px 0 #f5d547,
    0 1px 0 #f5d547,
    0 -1px 0 #f5d547,
    1px 0 0 #f5d547,
    -1px 0 0 #f5d547
  `
};

const textOutlineYellowThin = {
  color: 'brand.base',
  textShadow: `
    0.5px 0.5px 0 #f5d547,
    -0.5px 0.5px 0 #f5d547,
    0.5px -0.5px 0 #f5d547,
    -0.5px -0.5px 0 #f5d547,
    0 0.5px 0 #f5d547,
    0 -0.5px 0 #f5d547,
    0.5px 0 0 #f5d547,
    -0.5px 0 0 #f5d547
  `
};

export const LearningApproachSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="white" className="section">
      <Container maxW="container.lg"> {/* 少し幅を狭めてみる */}
        <VStack spacing={10} align="stretch">
          {/* タイトルと導入文 */}
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4} color="brand.base">
              留サポが提供する、<Text as="span" sx={textOutlineYellow}>未来を拓く学びのかたち</Text>
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="container.md" mx="auto">
              子どもが自ら選び、自ら動き、自ら人生を切り拓いていく——。
              私たち留サポは、モンテッソーリ教育の理念に基づき、
              <Text as="strong" fontWeight="bold">「自己決定力」</Text>と<Text as="strong" fontWeight="bold">「自己表現力」</Text>を育む海外体験を段階的にご提供しています。
              成長のステージに応じた3つのプログラムは、すべてが"単なる留学体験"にとどまらず、
              世界を舞台に活躍するための人間力と進路形成を支える設計となっています。
            </Text>
          </Box>

          <Divider />

          
          {/* 3つのプログラム説明 */}
          <List spacing={8}>
            <ListItem>
              <HStack align="start" spacing={4}>
                <ListIcon as={FaCampground} color="brand.accent" w={8} h={8} mt={1} />
                <Box>
                  <Heading as="h3" size="lg" mb={2}>
                    <Text as="span" color="brand.base">サマーキャンプ</Text>｜自分を表現する第一歩を、ハワイで。
                  </Heading>
                  <Text color="gray.700">
                    ハワイでの5泊7日。午前は自然との対話を通じた心の教育、午後は英語で社会課題に向き合うプレゼン研修。 現地の人々と対話し、考え、伝える——その体験は、内にある表現の芽を育ててくれます。
                    <Text as="strong" fontWeight="bold">「自己選択」</Text>と<Text as="strong" fontWeight="bold">「自己表現」</Text>。子どもが"自分の言葉"を手にするための初めの一歩。
                  </Text>
                </Box>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack align="start" spacing={4}>
                <ListIcon as={FaSearchLocation} color="brand.accent" w={8} h={8} mt={1} />
                <Box>
                  <Heading as="h3" size="lg" mb={2}>
                    <Text as="span" color="brand.base">現地校見学サポート</Text>｜進路選択に、納得という確信を。
                  </Heading>
                  <Text color="gray.700">
                    パンフレットやデータではわからない、"学校の空気"を肌で感じる機会。 複数の候補校を実際に訪問し、自分にとって本当に合う環境を体感します。 引率・通訳は海外大学卒の留学経験者が担当し、ご家庭にも安心を。
                    <Text as="strong" fontWeight="bold">「納得できる選択」</Text>をするために。進学の意思決定に、経験という土台を。
                  </Text>
                </Box>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack align="start" spacing={4}>
                <ListIcon as={FaUserGraduate} color="brand.accent" w={8} h={8} mt={1} />
                <Box>
                  <Heading as="h3" size="lg" mb={2}>
                    <Text as="span" color="brand.base">志望校選び＆出願サポート</Text>｜夢を、確かな進路へ。
                  </Heading>
                  <Text color="gray.700">
                    世界中の高校・大学から、お子さまに本当にふさわしい進学先を一緒に探し、出願までを一貫してサポート。 エッセイ添削や面接対策も含め、個別最適化された進路支援を行います。
                    単なる"合格"ではなく、<Text as="strong" fontWeight="bold">"納得と成長"</Text>のある進学体験へ。
                  </Text>
                </Box>
              </HStack>
            </ListItem>
          </List>

          <Divider />

          {/* 背景色を設定する新しい親Box */}
          <Box bg="gray.100" py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }} borderRadius="lg">
            {/* 新しいタイトルの追加場所 */}
            <Box textAlign="center" pb={8}> {/* 上のpyがあるので、ここはpbのみに調整 */}
              <Heading as="h2" size="xl" color="brand.base">
                {'どんな色にも染まれる'}
                <Text as="span" display="inline" sx={textOutlineYellow}>
                  10代
                </Text>
                {'のうちに、多様性に触れよう'}
              </Heading>
            </Box>

            {/* 2つの理念説明 */}
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading as="h3" size="lg" mb={3} color="brand.base">
                  <Icon as={FaGlobeAsia} mr={2} verticalAlign="middle" />
                  <Text as="span" sx={textOutlineYellow}>真のグローバル人材</Text>を育てる、思春期からの海外経験
                </Heading>
                <Text color="gray.700" pl={10}> {/* アイコン分インデント */}
                  「Multi Cultureな人材」は、思春期・青年期の海外経験からこそ育まれます。
                  アイデンティティが未形成な幼少期ではなく、自我が芽生え始める高校・大学の時期に海外へ出ることで、
                  「日本人としての価値観」と「世界で求められる力」の双方を兼ね備えた人格が育ちます。
                  異文化を理解する柔軟性と、日本らしい調和・礼節を大切にする感性。
                  そこに自己主張と行動力が加わったとき、初めて真にグローバルな人材となり得るのです。
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg" mb={1} color="brand.base">
                  <Icon as={FaBullseye} mr={2} verticalAlign="middle" />
                  留サポが目指すもの
                </Heading>
                <Box textAlign="center" mt={1}>
                  <Heading as="h3" size="lg" display="block">
                    <Text as="span" color="brand.base" display="inline">
                      {"\"周囲との差\"ではなく、"}
                    </Text>
                    <Text as="span" display="inline" sx={textOutlineYellow}>
                      "未来を創る力"
                    </Text>
                    <Text as="span" color="brand.base" display="inline">
                      を。
                    </Text>
                  </Heading>
                </Box>
                <Text color="gray.700" pl={10} mt={3}> {/* アイコン分インデントとマージン調整 */}
                  私たちのサービスは、周囲と一線を画すための"体験型学び"であり、
                  その根底には<Text as="strong" fontWeight="bold">"自分の人生を自分で選ぶ力を育てる"</Text>教育哲学があります。
                  それは、"肩書き"ではなく<Text as="strong" fontWeight="bold">"軸のある生き方"</Text>で選ばれる人間を育てるということ。
                  世界で活躍する次世代のグローバルリーダーを、ここから育てていきます。
                </Text>
              </Box>
            </VStack>
          </Box>{/* 背景色を設定した親Boxの閉じタグ */}

        </VStack>
      </Container>
    </Box>
  );
}; 