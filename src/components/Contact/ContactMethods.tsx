import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { FaLine } from 'react-icons/fa';

export const ContactMethods = () => {
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
      </VStack>
    </Box>
  );
};
