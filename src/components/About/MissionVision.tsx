import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaLightbulb, FaGlobeAsia, FaUserGraduate } from 'react-icons/fa';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="lg" 
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Flex direction="column" align="center" textAlign="center">
        <Icon as={icon} w={12} h={12} color="brand.accent" mb={4} />
        <Heading as="h3" size="md" mb={3} color="brand.base">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </Flex>
    </Box>
  );
};

export const MissionVision = () => {
  const values = [
    {
      title: '学生の可能性を開花させる',
      description: '机の上でする丸暗記ではなく、現地で自分の語感を使った体験を大切にし、感性と創造力を引き出します。',
      icon: FaLightbulb
    },
    {
      title: '多文化の中で育つ思考と行動力',
      description: '異なる価値観に触れる海外での生活は、\n「多様性の中で思考し、行動する力」を自然と育てます。\n世界を"自分ごと"としてとらえる感性を養います。',
      icon: FaGlobeAsia
    },
    {
      title: '留学を、当たり前の選択肢に',
      description: '日本社会に根づく偏差値主義や画一的な教育観からの脱却。\n先生や大人が思う「正解」ではなく、自らの意思で人生を選び取る力を育み、\n未来を自分自身の手で切り拓ける人材を育てていきます。',
      icon: FaUserGraduate
    }
  ];

  return (
    <Box as="section" py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text
              as="span"
              color="brand.accent"
              fontWeight="bold"
              fontSize="lg"
              textTransform="uppercase"
              mb={3}
              display="block"
            >
              私たちの理念
            </Text>
            <Heading as="h2" size="2xl" mb={5} color="brand.base">
              世界は、思ったより近い。
            </Heading>
            <Text fontSize={{ base: '16px', md: 'xl' }} color="gray.700" maxW="container.md" mx="auto" lineHeight="tall">
            知識や偏差値だけに頼らず、自ら考え、選び、行動する力を育むこと。
そして、世界に身を置くリアルな体験を通じて、
他者と違うことを恐れず、自分の価値を自分の言葉で伝えられる人物の育成を目指しています。
日本人が大切にしてきた誠実さや調和の感性に、
国境を越えて対話する力と、世界を自分ごととしてとらえる視点を重ね合わせ、
しなやかに世界を生き抜く次世代のグローバル人材を輩出していきます。
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
