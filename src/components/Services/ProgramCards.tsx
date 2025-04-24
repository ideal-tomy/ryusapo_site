import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Badge, Tag } from '@chakra-ui/react';
import { FaGraduationCap, FaCalendarAlt, FaArrowCircleRight, FaGlobe } from 'react-icons/fa';

type ProgramCardProps = {
  title: string;
  ageRange: string;
  duration: string;
  purpose: string;
  description: string;
  level: string; // 初級, 中級, 上級
};

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  ageRange, 
  duration, 
  purpose, 
  description,
  level
}) => {
  // レベルに応じた色を設定
  const getLevelColor = (level: string) => {
    switch(level) {
      case '初級': return 'green';
      case '中級': return 'blue';
      case '上級': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="md"
      bg="white"
      height="100%"
      display="flex"
      flexDirection="column"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <VStack align="start" spacing={4} flex="1">
        <HStack justify="space-between" width="full">
          <Heading as="h3" size="md" color="brand.base">
            {title}
          </Heading>
          <Tag size="md" colorScheme={getLevelColor(level)} borderRadius="full">
            {level}
          </Tag>
        </HStack>
        
        <VStack align="start" spacing={2} width="full">
          <HStack>
            <Icon as={FaGraduationCap} color="brand.accent" />
            <Text fontWeight="medium">対象: {ageRange}</Text>
          </HStack>
          
          <HStack>
            <Icon as={FaCalendarAlt} color="brand.accent" />
            <Text fontWeight="medium">期間: {duration}</Text>
          </HStack>
          
          <HStack>
            <Icon as={FaGlobe} color="brand.accent" />
            <Text fontWeight="medium">目的: {purpose}</Text>
          </HStack>
        </VStack>
        
        <Text flex="1">{description}</Text>
        
        <HStack color="brand.base" fontWeight="bold">
          <Text>詳細を見る</Text>
          <Icon as={FaArrowCircleRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export const ProgramCards = () => {
  const programs = [
    {
      title: "短期留学プログラム",
      ageRange: "中学生〜大学生",
      duration: "2週間〜3ヶ月",
      purpose: "語学力向上・異文化体験",
      description: "初めての海外滞在にぴったりの短期プログラム。ホームステイと語学学校で基礎的な英語力と異文化体験を得られます。",
      level: "初級"
    },
    {
      title: "長期留学プログラム",
      ageRange: "高校生〜大学生",
      duration: "6ヶ月〜1年",
      purpose: "語学力強化・学業体験",
      description: "現地校への通学とホームステイで、実践的な語学力と国際感覚を身につけるプログラム。",
      level: "中級"
    },
    {
      title: "サマーキャンププログラム",
      ageRange: "中学生〜高校生",
      duration: "2週間〜1ヶ月",
      purpose: "アクティビティ体験・交流",
      description: "夏休み期間限定のキャンププログラム。英語環境でのアウトドアアクティビティを通じて国際交流を深めます。",
      level: "初級"
    },
    {
      title: "大学進学準備プログラム",
      ageRange: "高校生",
      duration: "3ヶ月〜1年",
      purpose: "進学準備・専門英語",
      description: "海外大学への進学を視野に入れた準備プログラム。専門的な英語力とアカデミックスキルを養成します。",
      level: "上級"
    }
  ];

  return (
    <Box as="section" py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Box>
            <Text color="brand.accent" fontWeight="bold" fontSize="lg">
              OUR PROGRAMS
            </Text>
            <Heading as="h2" size="xl" color="brand.base" mb={2}>
              留学プログラム一覧
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              目的や期間に合わせて選べる多様なプログラムをご用意しています
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} width="full">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
