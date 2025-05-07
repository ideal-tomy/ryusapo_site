import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Button, VStack, HStack, StackDivider } from '@chakra-ui/react';
import { FaShieldAlt, FaCreditCard, FaPhone, FaHeadset, FaUserFriends, FaRegLightbulb, FaBookReader } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

type SecurityFeatureProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ icon, title, description }) => {
  return (
    <VStack
      align="flex-start"
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Flex
        w={12}
        h={12}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="brand.base"
        mb={4}
      >
        {icon}
      </Flex>
      <Heading as="h3" fontSize="xl" mb={2} color="brand.base">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

const securityFeatures = [
  {
    icon: <Icon as={FaShieldAlt} w={6} h={6} />,
    title: '安全体制の確立',
    description: '現地スタッフとの24時間連絡体制、緊急時対応プロトコル、保険サポートなど、お子様の安全を最優先に考えたシステムを整備しています。',
  },
  {
    icon: <Icon as={FaCreditCard} w={6} h={6} />,
    title: '費用の透明性',
    description: '留学にかかる費用をすべて明示。追加料金や隠れたコストがなく、安心して計画を立てられます。',
  },
  {
    icon: <Icon as={FaPhone} w={6} h={6} />,
    title: '定期的な状況報告',
    description: '留学中もお子様の様子を定期的にご報告。写真や動画も交えて、成長の様子をお伝えします。',
  },
];

const anxieties = [
  {
    icon: <Icon as={FaCreditCard} w={6} h={6} />,
    title: '費用が明確ではないので、ちゃんと総額で話できるか心配…',
    description: '必要な費用をすべて事前にご提示。透明性の高い料金体系で、後から追加費用が発生することはありません。',
  },
  {
    icon: <Icon as={FaBookReader} w={6} h={6} />,
    title: '海外の語学に興味はあるけど、最初のテーマが読み出せない',
    description: 'サマーキャンプや現地校見学から始め、徐々に本人の意思と志望校を固めていける"分かりやすい導線"があります。',
  },
  {
    icon: <Icon as={FaHeadset} w={6} h={6} />,
    title: '親である私が英語を話せず手続きや準備ができるか不安',
    description: '出願や入学にかかる複雑な手続きも弊社にてサポートいたします。親御さんにご対応いただくのはサインなど最低限のみなので、忙しい方でも安心です。',
  },
];

export const ParentSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50" className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={3} textAlign="center" color="brand.base">
              安心のサポート体制
            </Heading>
            <Text textAlign="center" color="gray.600" mb={6} fontSize="lg">
              一番大切なスタッフは全員、海外大学出身者または留学経験者。プログラムはすべて、安全・信頼・実績を重視した体制で運営されています。
            </Text>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={6}>
              <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
                <Icon as={FaUserFriends} w={10} h={10} color="brand.accent" />
                <Heading as="h4" size="md" color="brand.base">出発前オリエンテーション</Heading>
                <Text fontSize="sm" color="gray.500">現地の情報や準備について詳しく説明します</Text>
              </VStack>
              <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
                <Icon as={FaHeadset} w={10} h={10} color="brand.accent" />
                <Heading as="h4" size="md" color="brand.base">現地サポートスタッフ</Heading>
                <Text fontSize="sm" color="gray.500">絶えず日本語対応可能なスタッフが待機</Text>
              </VStack>
              <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
                <Icon as={FaPhone} w={10} h={10} color="brand.accent" />
                <Heading as="h4" size="md" color="brand.base">24時間緊急サポート</Heading>
                <Text fontSize="sm" color="gray.500">万が一の場合も安心して相談できる体制を整えています</Text>
              </VStack>
              <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
                <Icon as={FaShieldAlt} w={10} h={10} color="brand.accent" />
                <Heading as="h4" size="md" color="brand.base">24時間緊急サポート</Heading>
                <Text fontSize="sm" color="gray.500">万が一の場合も安心して相談できる体制を整えています</Text>
              </VStack>
            </SimpleGrid>
            <Text textAlign="center" color="gray.700" fontWeight="medium" mb={10} fontSize="lg">
              お子様の将来を真剣に考えるご家庭に、本物の海外教育体験を。
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4}} spacing={6}>
              <Box>
                <Heading as="h5" size="sm" color="brand.base" mb={2}>1スタッフにつき生徒7名！</Heading>
                <Text fontSize="sm" color="gray.600">小規模人数制で目が届く体制</Text>
              </Box>
              <Box pl={6} borderLeftWidth={{ md: "1px" }} borderColor="gray.200">
                <Heading as="h5" size="sm" color="brand.base" mb={2}>全員が、海外大卒業の日本人スタッフ！</Heading>
                <Text fontSize="sm" color="gray.600">海外留学経験者だからこそわかる視点で、お子様に最適なプログラムをご提供</Text>
              </Box>
              <Box pl={6} borderLeftWidth={{ md: "1px", lg: "1px" }} borderColor="gray.200">
                <Heading as="h5" size="sm" color="brand.base" mb={2}>手厚なサービス</Heading>
                <Text fontSize="sm" color="gray.600">海外留学を初めて経験したい方〜本気で海外の学校に進学したい方まで、幅広く対応！</Text>
              </Box>
              <Box pl={6} borderLeftWidth={{ md: "1px", lg: "1px" }} borderColor="gray.200">
                <Heading as="h5" size="sm" color="brand.base" mb={2}>英会話特化のコンサルティング会社と提携</Heading>
                <Text fontSize="sm" color="gray.600">教師コンサルタント全員が名門海外大出身のEngrowth社と提携。アッパー層のビジネスマンを主に顧客として抱え指導実績は折り紙付きだが、特別に留サポ価格帯をいただき、優先受講可能に！</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box textAlign="center" maxW="container.lg" mx="auto">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg" mb={3}>
              FOR PARENTS
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              こんな不安はありませんか？
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={8}>
              お子様の留学に関する不安を解消するためのサポート体制を整えています
            </Text>
          </Box>

          <Box width="full" mb={8}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {anxieties.map((feature, index) => (
                <SecurityFeature key={index} {...feature} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
