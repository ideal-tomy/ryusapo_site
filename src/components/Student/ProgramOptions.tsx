import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Image, VStack, Icon, Button } from '@chakra-ui/react';
import { FaGraduationCap, FaUmbrella, FaHandsHelping } from 'react-icons/fa';
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
            color="white"
            rounded="full"
            bg="brand.accent"
            mr={3}
          >
            {icon}
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
    title: '語学留学',
    description: '世界各国の語学学校で実践的な語学力を身につけるプログラム。初心者から上級者まで、レベルに応じたコースを提供しています。',
    duration: '2週間〜1年',
    icon: <Icon as={FaGraduationCap} w={6} h={6} />
  },
  {
    title: 'サマーキャンプ',
    description: '夏休みに参加できる短期プログラム。語学学習とアクティビティを組み合わせた充実の内容で、楽しみながら国際交流ができます。',
    duration: '1週間〜4週間',
    icon: <Icon as={FaUmbrella} w={6} h={6} />
  },
  {
    title: 'ボランティア',
    description: '海外でボランティア活動を行いながら言語や文化を学ぶプログラム。地域コミュニティに貢献しながら、国際的な視野を身につけます。',
    duration: '1週間〜6ヶ月',
    icon: <Icon as={FaHandsHelping} w={6} h={6} />
  }
];

export const ProgramOptions = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg" mb={3}>
              PROGRAMS
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              あなたに合った留学スタイル
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              目的や期間、予算に合わせて最適なプログラムをご提案します
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </SimpleGrid>

          <Button
            as={RouterLink}
            to="/services"
            size="lg"
            variant="outline"
            colorScheme="blue"
            mt={4}
          >
            すべてのプログラムを見る
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
