import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
  Flex,
  Divider,
  Grid,
  GridItem,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { FaLine, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

export const ContactMethods = () => {
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)');

  return (
    <Box as="section" py={8}>
      <VStack spacing={8} align="stretch">
        {/* LINEでお問い合わせ */}
        <Box 
          p={6} 
          borderRadius="lg" 
          bg="#06C755" 
          color="white"
          boxShadow={`0 4px 12px ${shadowColor}`}
        >
          <VStack spacing={4} align="center">
            <Icon as={FaLine} boxSize={12} />
            <VStack align="center" spacing={2}>
              <Heading as="h3" size="lg">
                LINEで簡単相談
              </Heading>
              <Text fontSize="lg" textAlign="center">
                ご質問やご相談は、お手軽にLINEでも受け付けております。
                近日中に担当者からご返答いたします。
              </Text>
              <Button 
                size="lg" 
                bg="white" 
                color="#06C755" 
                rightIcon={<FaLine />} 
                _hover={{ bg: 'gray.100' }}
                as={Link}
                href="https://lin.ee/yourlineaccount"
                isExternal
              >
                LINEで相談する
              </Button>
            </VStack>
          </VStack>
        </Box>

        {/* その他のお問い合わせ方法 */}
        <Box 
          p={6} 
          borderRadius="lg" 
          bg={cardBgColor}
          boxShadow={`0 4px 12px ${shadowColor}`}
        >
          <VStack spacing={6} align="stretch">
            <Heading as="h3" size="md" textAlign="center">
              その他のお問い合わせ方法
            </Heading>
            
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>
              {/* 電話 */}
              <GridItem>
                <HStack align="start" spacing={4}>
                  <Icon as={FaPhone} color="brand.base" boxSize={5} mt={1} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">電話でのお問い合わせ</Text>
                    <Text fontSize="xl" fontWeight="bold" color="brand.base">03-1234-5678</Text>
                    <HStack>
                      <Icon as={FaClock} color="gray.500" boxSize={3} />
                      <Text fontSize="sm" color="gray.500">受付時間: 平日 10:00～18:00</Text>
                    </HStack>
                  </VStack>
                </HStack>
              </GridItem>

              {/* メール */}
              <GridItem>
                <HStack align="start" spacing={4}>
                  <Icon as={FaEnvelope} color="brand.base" boxSize={5} mt={1} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">メールでのお問い合わせ</Text>
                    <Text fontSize="lg" fontWeight="bold" color="brand.base">info@ryusapo.com</Text>
                    <Text fontSize="sm" color="gray.500">近日中にご返信いたします</Text>
                  </VStack>
                </HStack>
              </GridItem>
            </Grid>

            <Divider my={4} />

            {/* 来店相談 */}
            <VStack align="start" spacing={3}>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="brand.base" boxSize={5} />
                <Text fontWeight="bold">来店相談（事前予約制）</Text>
              </HStack>
              
              <Box pl={9}>
                <Text mb={2}>東京オフィス</Text>
                <Text color="gray.600" fontSize="sm">東京都渋谷区渋谷1-2-3 渋谷ビル 5階</Text>
                <Text color="gray.600" fontSize="sm" mt={1}>JR渋谷駅から徒歩5分</Text>
              </Box>
              
              <Box pl={9} mt={2}>
                <Text mb={2}>大阪オフィス</Text>
                <Text color="gray.600" fontSize="sm">大阪府大阪市中央区大阪3-4-5 大阪ビル 8階</Text>
                <Text color="gray.600" fontSize="sm" mt={1}>大阪メトロ弥生駅から徒歩3分</Text>
              </Box>
              
              <Button 
                colorScheme="blue" 
                variant="outline" 
                leftIcon={<FaPhone />}
                mt={2}
                as={Link}
                href="tel:03-1234-5678"
              >
                来店相談予約する
              </Button>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
