import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Button, Circle, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaSearch, FaComments, FaPaperPlane, FaPlane, FaGlobeAsia } from 'react-icons/fa';

type ProcessStepProps = {
  step: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  isLast?: boolean;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon, isLast = false }) => {
  return (
    <Flex mb={!isLast ? 12 : 0} position="relative" width="100%">
      <Flex direction="column" align="center" mr={6}>
        <Circle size="50px" bg="brand.base" color="white" fontWeight="bold">
          {step}
        </Circle>
        {!isLast && (
          <Box
            height="100%"
            width="2px"
            bg="brand.light"
            mt={2}
            position="absolute"
            top="50px"
            left="24px"
          />
        )}
      </Flex>
      <Box pt={1}>
        <HStack mb={1} align="center">
          <Icon as={icon.type as any} color="brand.accent" w={5} h={5} />
          <Heading as="h3" size="md" color="brand.base">
            {title}
          </Heading>
        </HStack>
        <Text color="gray.600">{description}</Text>
      </Box>
    </Flex>
  );
};

const steps = [
  {
    step: 1,
    title: 'お問い合わせ・カウンセリング予約',
    description: '留学についての疑問や不安なことは、まずはお気軽にLINEやお問い合わせフォームからご連絡ください。無料カウンセリングの予約も承ります。',
    icon: <Icon as={FaSearch} />
  },
  {
    step: 2,
    title: '無料カウンセリング',
    description: 'あなたの希望や状況に合わせて最適なプログラムをご提案します。目的、期間、予算などお気軽にご相談ください。原則、オンラインでの実施。一部、提携学習塾にて対面も可。',
    icon: <Icon as={FaComments} />
  },
  {
    step: 3,
    title: 'お申し込み・契約',
    description: 'プログラムが決まったら正式にお申し込み。必要書類の提出と申込金のお支払いをお願いします。この段階からサポートが始まります。',
    icon: <Icon as={FaPaperPlane} />
  },
  {
    step: 4,
    title: '出発前準備・オリエンテーション',
    description: 'スタッフの少人数制で、一人一人に合わせたサポートを行います',
    icon: <Icon as={FaPlane} />
  },
  {
    step: 5,
    title: '留学スタート！',
    description: '素晴らしい留学体験をお祈りしています！',
    icon: <Icon as={FaGlobeAsia} />
  }
];

export const StepFlow = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50" className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box 
            textAlign="center" 
            maxW={{ base: "full", md: "container.md" }}
            mx="auto" 
            px={isMobile ? 4 : 0}
          >
            <Text color="gray.400" fontWeight="bold" fontSize="lg" mb={3}>
              APPLICATION PROCESS
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              留学までの流れ
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              留学の相談から出発までの流れをご紹介します。一人ひとりに合わせたサポートで、あなたの挑戦を応援します。
            </Text>

            <HStack spacing={4} mb={10} justify="center">
              <Button colorScheme="blue" variant="solid" borderRadius="md" px={{ base: 4, md: 6 }} bg="#2b6cb0" _hover={{ bg: "#2b6cb0" }} color="white" fontSize={{ base: 'xs', md: 'md' }}>
                サマーキャンプ
              </Button>
              <Button colorScheme="blue" variant="solid" borderRadius="md" px={{ base: 4, md: 6 }} bg="#2b6cb0" _hover={{ bg: "#2b6cb0" }} color="white" fontSize={{ base: 'xs', md: 'md' }}>
                現地校見学サポート
              </Button>
              <Button colorScheme="blue" variant="solid" borderRadius="md" px={{ base: 4, md: 6 }} bg="#2b6cb0" _hover={{ bg: "#2b6cb0" }} color="white" fontSize={{ base: 'xs', md: 'md' }}>
                志望校選び＆出願サポート
              </Button>
            </HStack>
          </Box>

          <Box width="100%" maxW="container.md" mx="auto" px={isMobile ? 4 : 0}>
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            ))}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
