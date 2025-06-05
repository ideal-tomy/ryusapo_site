import React from 'react';
import { Box, Container, Heading, Text, Flex, Image, VStack, Grid, GridItem } from '@chakra-ui/react';

export const StorySection = () => {
  return (
    <Box as="section" py={16} bg="white">
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={10} alignItems="center">
          <GridItem>
            <VStack spacing={6} align="flex-start">
              <Text
                as="span"
                color="brand.accent"
                fontWeight="bold"
                fontSize="lg"
                textTransform="uppercase"
              >
                創業の背景
              </Text>
              <Heading as="h2" size="xl" color="brand.base">
                留サポのはじまりに込めた想い
              </Heading>
              
              <Text fontSize={{ base: '16px', md: 'lg' }} color="gray.700" lineHeight="taller" whiteSpace="pre-line">
              子どもが自分の人生を、自分の意思で歩みはじめる。 その瞬間を後押しする場所をつくりたい── それが、私たちが留サポを立ち上げた原点です。

語学だけではない、偏差値でもない。 
世界を見て、自分で考え、行動し、選び取る力。
それこそが、これからの時代を生き抜く「本当の力」だと、私たちは信じています。


それは、私たち留サポメンバー自身が高校・大学からの海外留学を経験し、
「留学のおかげで人生が変わった」と実感しているから。

日本では成績が良くないとされていても海外では活躍するケースはたくさんあります。
教育スタイルに合っていないだけで、子供たちの可能性が狭まってしまうこの現状を、なんとかしたい。

お子さんの才能を開花させるお手伝いを一緒にさせていただけたら、嬉しいです。

              </Text>
            </VStack>
          </GridItem>
          
          <GridItem>
            <Image 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
              alt="若者たちが国際的な環境で学ぶ様子" 
              borderRadius="lg"
              boxShadow="lg"
              objectFit="cover"
              height="500px"
              width="100%"
            />
          </GridItem>
        </Grid>

        <VStack spacing={8} align="flex-start" mt={16}>
          <Box>
            <Heading as="h3" size="lg" color="brand.base" mb={4}>
              ビジョン｜次世代のグローバルリーダーを輩出する
            </Heading>
            <Text fontSize="md" color="gray.700" lineHeight="tall" whiteSpace="pre-line">
              AI・グローバル・多様性が前提となるこれからの時代において、 必要とされるのは、与えられた枠の中で成果を出す人材ではなく、 自ら考え、自ら選び、自ら動くことのできる"自律した個"です。
              そのために私たちは、単なる「語学力の強化」ではなく、 子どもたちが自分自身の軸を育てられる機会こそ、今の教育に必要だと考えました。

              留サポの根幹にあるのは、モンテッソーリ教育の理念です。

              大人が先回りせず、子ども自身が「やってみたい」「こうしてみよう」と 内側から湧き上がる意思で動ける環境を大切にしています。

              そのひとつの象徴が、"意図的な親子分離"。
                離れることで初めて芽生える自立心や、外の世界とつながる感覚。 それは子どもにとっての、大きな成長のきっかけになります。
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="lg" color="brand.base" mb={4}>
              ミッション｜Own Your Journey
            </Heading>
            <Text fontSize="md" color="gray.700" lineHeight="tall" whiteSpace="pre-line">
              私たちが掲げるミッション、「Own Your Journey」。 それは、子どもたち一人ひとりが"自分の人生の旅路"を、 自分の手で選び、歩いていく力を育むという意味を込めています。
              正解のない時代だからこそ、 「自分で決める」「自分で動く」「自分で責任を持つ」。 そのプロセス自体を、子ども自身が引き受けられるように。
              その第一歩を支える存在でありたい。
              それが、私たち留サポの原点です。
            </Text>
          </Box>
        </VStack>

      </Container>
    </Box>
  );
};
