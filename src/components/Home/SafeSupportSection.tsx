import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, StackDivider } from '@chakra-ui/react';
import { FaShieldAlt, FaPhone, FaHeadset, FaUserFriends } from 'react-icons/fa';

export const SafeSupportSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.100" className="section"> {/* 背景色を少し変更して区別 */}
      <Container maxW="container.xl">
        <Box>
          <Heading as="h2" size="xl" mb={3} textAlign="center" color="brand.base">
            安心のサポート体制
          </Heading>
          <Text textAlign="center" color="gray.600" mb={6} fontSize="lg">
            一番大切なスタッフは全員、海外大学出身者または留学経験者。プログラムはすべて、安全・信頼・実績を重視した体制で運営されています。
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={6}>
            <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
              <Icon as={FaHeadset} w={10} h={10} color="brand.accent" />
              <Heading as="h4" size="md" color="brand.base">全員が、海外大卒業の日本人スタッフ！
              </Heading>
              <Text fontSize="sm" color="gray.500">海外留学経験者だからこそわかる視点で、お子様に最適なプログラムをご提供
</Text>
            </VStack>
            <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
              <Icon as={FaPhone} w={10} h={10} color="brand.accent" />
              <Heading as="h4" size="md" color="brand.base">豊富なサービス
              </Heading>
              <Text fontSize="sm" color="gray.500">海外留学を短期で経験したい方〜本気で海外の学校に進学したい方まで、幅広く対応！
              </Text>
            </VStack>
            <VStack bg="white" p={5} borderRadius="md" boxShadow="sm" textAlign="center">
              <Icon as={FaShieldAlt} w={10} h={10} color="brand.accent" />
              <Heading as="h4" size="md" color="brand.base">英会話特化のコンサルティング会社と提携
              </Heading>
              <Text fontSize="sm" color="gray.500">英語コンサルタント全員が名門海外大出身のEngrowth社と提携。アッパー層のビジネスマンを主に顧客として抱え受講希望者は空き次第の案内だが、特別に留サポ優待枠をいただき、優先受講可能に！
              </Text>
            </VStack>
          </SimpleGrid>
          <Text textAlign="center" color="gray.700" fontWeight="medium" mb={10} fontSize="lg">
            お子様の将来を真剣に考えるご家庭に、本物の海外教育体験を。
          </Text>    
        </Box>
      </Container>
    </Box>
  );
}; 