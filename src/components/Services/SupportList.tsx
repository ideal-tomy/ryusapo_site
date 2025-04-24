import React from 'react';
import { Box, Container, Heading, Text, Flex, SimpleGrid, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaPlane, FaGlobeAsia, FaHome, FaCheck, FaPhoneAlt, FaPassport, FaUserFriends, FaHeartbeat, FaSuitcase } from 'react-icons/fa';

type SupportItemProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const SupportItem: React.FC<SupportItemProps> = ({ title, description, icon }) => {
  return (
    <HStack align="start" spacing={4} p={4} borderRadius="md" bg="white" boxShadow="sm">      
      <Box 
        bg="brand.light" 
        p={3} 
        borderRadius="full" 
        color="brand.base"
      >
        <Icon as={icon} boxSize={5} />
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={1}>
          {title}
        </Text>
        <Text color="gray.600">
          {description}
        </Text>
      </Box>
    </HStack>
  );
};

type SupportSectionProps = {
  title: string;
  icon: React.ElementType;
  items: Array<{ title: string; description: string; icon: React.ElementType }>;
};

const SupportSection: React.FC<SupportSectionProps> = ({ title, icon, items }) => {
  return (
    <Box width="full">
      <HStack mb={4}>
        <Icon as={icon} color="brand.base" boxSize={6} />
        <Heading as="h3" size="md" color="brand.base">
          {title}
        </Heading>
      </HStack>
      
      <VStack spacing={4} align="start">
        {items.map((item, index) => (
          <SupportItem key={index} {...item} />
        ))}
      </VStack>
    </Box>
  );
};

export const SupportList = () => {
  const preDepartureSupports = [
    {
      title: '個別カウンセリング',
      description: '留学の目的や希望に合わせたプログラム選びをプロがサポートします',
      icon: FaUserFriends
    },
    {
      title: '学校手続きサポート',
      description: '必要書類の記入から提出までワンストップでサポートします',
      icon: FaCheck
    },
    {
      title: 'ビザ・渡航準備サポート',
      description: 'ビザ申請や渡航前の準備を完全サポートします',
      icon: FaPassport
    }
  ];
  
  const duringStaySupports = [
    {
      title: '24時間LINEサポート',
      description: '現地滞在中はいつでも日本語で相談可能です',
      icon: FaPhoneAlt
    },
    {
      title: '健康管理サポート',
      description: '体調不良や疗養が必要な場合のサポート体制を整えています',
      icon: FaHeartbeat
    },
    {
      title: '緊急時対応',
      description: '現地スタッフと連携した緊急時のサポート体制を整えています',
      icon: FaPhoneAlt
    }
  ];
  
  const postReturnSupports = [
    {
      title: '帰国後振り返りサポート',
      description: '体験を今後の人生に活かすためのコーチングを行います',
      icon: FaHome
    },
    {
      title: 'キャリアサポート',
      description: '留学体験を就職や次のステップに活かすアドバイスを提供します',
      icon: FaSuitcase
    }
  ];

  return (
    <Box as="section" py={12} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12} align="start">
          <Box maxW="container.md">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg">
              SUPPORT SYSTEM
            </Text>
            <Heading as="h2" size="xl" color="brand.base" mb={2}>
              サポート内容一覧
            </Heading>
            <Text fontSize="lg" color="gray.600">
              出発前から帰国後まで、留学の全プロセスをサポートします
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} width="full">
            <SupportSection 
              title="u51fau767au524du30b5u30ddu30fcu30c8" 
              icon={FaPlane} 
              items={preDepartureSupports} 
            />
            
            <SupportSection 
              title="u6edeu5728u4e2du30b5u30ddu30fcu30c8" 
              icon={FaGlobeAsia} 
              items={duringStaySupports} 
            />
            
            <SupportSection 
              title="u5e30u56fdu5f8cu30b5u30ddu30fcu30c8" 
              icon={FaHome} 
              items={postReturnSupports} 
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
