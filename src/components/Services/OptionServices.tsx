import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Badge, Flex } from '@chakra-ui/react';
import { FaPlane, FaCar, FaUserFriends, FaBook, FaPhoneAlt, FaLock } from 'react-icons/fa';

type OptionServiceProps = {
  title: string;
  description: string;
  price: string;
  icon: React.ElementType;
  popular?: boolean;
};

const OptionService: React.FC<OptionServiceProps> = ({ 
  title, 
  description, 
  price, 
  icon,
  popular = false
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      bg="white"
      boxShadow="md"
      position="relative"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderColor={popular ? 'brand.accent' : 'gray.200'}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      {popular && (
        <Badge
          position="absolute"
          top="-2"
          right="-2"
          colorScheme="yellow"
          borderRadius="full"
          px={3}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
        >
          人気
        </Badge>
      )}
      
      <VStack align="start" spacing={4} flex="1">
        <Flex
          bg={popular ? 'brand.light' : 'gray.100'}
          color="brand.base"
          p={3}
          borderRadius="full"
          mb={2}
        >
          <Icon as={icon} boxSize={5} />
        </Flex>
        
        <Heading as="h3" size="md" color="brand.base">
          {title}
        </Heading>
        
        <Text color="gray.600" flex="1">
          {description}
        </Text>
      </VStack>
      
      <Text fontWeight="bold" fontSize="xl" mt={6} color={popular ? 'brand.accent' : 'gray.800'}>
        {price}
      </Text>
    </Box>
  );
};

export const OptionServices = () => {
  const options = [
    {
      title: '空港送迎サービス',
      description: '空港から宿泊先まで安全に送迎。初めての海外でも安心して到着できます。',
      price: '15,000円〜',
      icon: FaCar,
      popular: false
    },
    {
      title: '親子サポートプラン',
      description: '保護者様も含めた事前説明会や現地視察ツアーなど、ご家族全体をサポートします。',
      price: '30,000円〜',
      icon: FaUserFriends,
      popular: true
    },
    {
      title: '英語事前講座',
      description: '出発前に基礎英会話や現地で使える表現を学習。不安なく海外生活をスタートできます。',
      price: '20,000円〜',
      icon: FaBook,
      popular: false
    },
    {
      title: '24時間サポート強化',
      description: '通常のサポートに加えて専任スタッフによる24時間体制の手厚いサポート。',
      price: '25,000円〜/月',
      icon: FaPhoneAlt,
      popular: true
    },
    {
      title: '海外保険手続き代行',
      description: '最適な海外保険プランの選定と申込手続きをすべて代行します。',
      price: '10,000円〜',
      icon: FaLock,
      popular: false
    },
    {
      title: '緊急帰国サポート',
      description: '予期せぬ事態が起きた際の緊急帰国手配を全面的にサポートします。',
      price: '30,000円〜',
      icon: FaPlane,
      popular: false
    }
  ];
  
  return (
    <Box as="section" py={12}>
      <Container maxW="container.xl">
        <VStack spacing={10} align="start">
          <Box maxW="container.md">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg">
              OPTIONAL SERVICES
            </Text>
            <Heading as="h2" size="xl" color="brand.base" mb={2}>
              オプションサービス
            </Heading>
            <Text fontSize="lg" color="gray.600">
              よりお子様・生徒様に合わせた手厚いサポートをご用意しています
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
            {options.map((option, index) => (
              <OptionService key={index} {...option} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
