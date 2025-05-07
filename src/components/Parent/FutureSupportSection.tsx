import React from 'react';
import { Box, Container, Heading, Text, VStack, StackDivider } from '@chakra-ui/react';

export const FutureSupportSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch" divider={<StackDivider borderColor="gray.200" />}>

          <Box>
            <Heading as="h2" size="lg" mb={6} textAlign="center" color="brand.base">
              留サポが提供する、未来を拓く学びのかたち
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              子どもが自ら選び、自ら動き、自ら人生を切り拓いていく——。
              私たち留サポは、モンテッソーリ教育の理念に基づき、
              「自己決定力」と「自己表現力」を育む海外体験を段階的にご提供しています。
            </Text>
            <Text fontSize="lg" color="gray.700">
              成長のステージに応じた3つのプログラムは、すべてが"単なる留学体験"にとどまらず、
              世界を舞台に活躍するための人間力と進路形成を支える設計となっています。
            </Text>
          </Box>

          <VStack spacing={6} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={3} color="brand.secondary">
                ■ サマーキャンプ｜自分を表現する第一歩を、ハワイで。
              </Heading>
              <Text color="gray.600">
                ハワイでの5泊7日。午前は自然との対話を通じた心の教育、午後は英語で社会課題に向き合うプレゼン研修。 現地の人々と対話し、考え、伝える——その体験は、内にある表現の芽を育ててくれます。
                「自己選択」と「自己表現」。子どもが"自分の言葉"を手にするための初めの一歩。
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={3} color="brand.secondary">
                ■ 現地校見学サポート｜進路選択に、納得という確信を。
              </Heading>
              <Text color="gray.600">
                パンフレットやデータではわからない、"学校の空気"を肌で感じる機会。 複数の候補校を実際に訪問し、自分にとって本当に合う環境を体感します。 引率・通訳は海外大学卒の留学経験者が担当し、ご家庭にも安心を。
                「納得できる選択」をするために。進学の意思決定に、経験という土台を。
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={3} color="brand.secondary">
                ■ 志望校選び＆出願サポート｜夢を、確かな進路へ。
              </Heading>
              <Text color="gray.600">
                世界中の高校・大学から、お子さまに本当にふさわしい進学先を一緒に探し、出願までを一貫してサポート。 エッセイ添削や面接対策も含め、個別最適化された進路支援を行います。
                単なる"合格"ではなく、"納得と成長"のある進学体験へ。
              </Text>
            </Box>
          </VStack>

          <Box>
            <Heading as="h2" size="lg" mt={8} mb={6} textAlign="center" color="brand.base">
              真のグローバル人材を育てる、思春期からの海外経験
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              「Multi Cultureな人材」は、思春期・青年期の海外経験からこそ育まれます。
              アイデンティティが未形成な幼少期ではなく、自我が芽生え始める高校・大学の時期に海外へ出ることで、
              「日本人としての価値観」と「世界で求められる力」の双方を兼ね備えた人格が育ちます。
            </Text>
            <Text fontSize="lg" color="gray.700">
              異文化を理解する柔軟性と、日本らしい調和・礼節を大切にする感性。
              そこに自己主張と行動力が加わったとき、初めて真にグローバルな人材となり得るのです。
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mt={8} mb={6} textAlign="center" color="brand.base">
              留サポが目指すもの｜"周囲との差"ではなく、"未来を創る力"を。
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              私たちのサービスは、周囲と一線を画すための"体験型学び"であり、
              その根底には「自分の人生を自分で選ぶ力を育てる」教育哲学があります。
            </Text>
            <Text fontSize="lg" color="gray.700">
              それは、"肩書き"ではなく"軸のある生き方"で選ばれる人間を育てるということ。
              世界で活躍する次世代のグローバルリーダーを、ここから育てていきます。
            </Text>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
}; 