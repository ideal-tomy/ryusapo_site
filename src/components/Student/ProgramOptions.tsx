import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Image, VStack, Icon, Button } from '@chakra-ui/react';
import { FaGraduationCap, FaUmbrella, FaHandsHelping, FaCampground, FaSearchLocation, FaUserGraduate } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

type ProgramCardProps = {
  title: string;
  description: string;
  duration: string;
  icon: React.ReactElement;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, duration, icon }) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
      transition="all 0.3s ease"
      height="100%"
    >
      <Flex direction="column" height="100%">
        <Flex align="center" mb={4}>
          <Flex
            w={12}
            h={12}
            align="center"
            justify="center"
            color="#002f5f"
            rounded="full"
            bg="gray.100"
            mr={3}
          >
            {React.cloneElement(icon, { color: "#002f5f" })}
          </Flex>
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </Flex>
        <Text color="gray.600" mb={4} flex="1">
          {description}
        </Text>
        <Text fontWeight="bold" color="brand.base">
          期間: {duration}
        </Text>
      </Flex>
    </Box>
  );
};

const programs = [
  {
    title: 'サマーキャンプ',
    description: 'ハワイで過ごす5泊7日の短期プログラム。午前は自然体験で心を整え、午後は英語で社会課題を探究しプレゼン発表。楽しさと本格的な学びが両立する"自分を変えるきっかけ"になる体験です。',
    duration: '5泊7日',
    icon: <Icon as={FaCampground} w={6} h={6} />
  },
  {
    title: '現地校見学サポート',
    description: '海外進学を本気で考えるなら、まずは現地の学校を自分の目で。複数の候補校を実際に訪問し、学校の雰囲気や文化を肌で感じられる体感型プログラム。スタッフの同行と通訳つきで安心。',
    duration: '1日〜10日（訪問校数に応じて）',
    icon: <Icon as={FaSearchLocation} w={6} h={6} />
  },
  {
    title: '学習塾選び & 出願サポート',
    description: '世界中の高校・大学から、自分に本当に合う学校をリサーチ。学校選びからエッセイ作成、書類提出までをプロが個別にサポート。「いつか留学したい」を「行ける」に変える実現型サポートです。ご希望の出願時期に応じて随時対応',
    duration: '随時',
    icon: <Icon as={FaUserGraduate} w={6} h={6} />
  }
];

export const ProgramOptions = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="gray.400" fontWeight="bold" fontSize="lg" mb={1}>
              PROGRAMS
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              いつかを「いま」に。
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              海外に行ってみたい」を現実に変えるためのサポートです。
              サマーキャンプは体験、現地校見学は発見、出願は実現。
              海外渡航歴の有無にかかわらず、誰もが安心して、自分のペースで海外留学の実現を叶えられる場所です。
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
