import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaArrowRight, FaComments } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

type ContactCtaProps = {
  title?: string;
  description?: string;
};

export const ContactCta: React.FC<ContactCtaProps> = ({
  title = '解決しない質問がありますか？',
  description = '上記で解決しない場合は、お気軽にLINEまたはお問い合わせフォームからご相談ください。専門スタッフが丁寧にお答えします。'
}) => {
  return (
    <Box as="section" py={12} bg="gray.50">
      <Container maxW="container.md">
        <VStack 
          spacing={6} 
          align="center" 
          bg="white" 
          p={{ base: 6, md: 10 }} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Icon as={FaComments} boxSize={12} color="brand.accent" />
          
          <VStack spacing={2} textAlign="center">
            <Heading as="h3" size="lg" color="brand.base">
              {title}
            </Heading>
            <Text color="gray.600">
              {description}
            </Text>
          </VStack>
          
          <HStack spacing={4}>
            <Button 
              as={RouterLink} 
              to="/contact"
              colorScheme="blue" 
              size="lg" 
              rightIcon={<FaArrowRight />}
            >
              お問い合わせ
            </Button>
            <Button 
              as={Link} 
              href="https://lin.ee/yourlineaccount" 
              isExternal
              variant="outline" 
              colorScheme="green" 
              size="lg"
            >
              LINEで相談
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
