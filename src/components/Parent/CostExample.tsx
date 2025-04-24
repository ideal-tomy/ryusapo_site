import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Flex, Table, Thead, Tbody, Tr, Th, Td, Badge, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

type ProgramCostProps = {
  title: string;
  duration: string;
  cost: string;
  includes: string[];
};

const ProgramCost: React.FC<ProgramCostProps> = ({ title, duration, cost, includes }) => {
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
      <VStack align="start" spacing={4} height="100%">
        <Heading as="h3" size="md" color="brand.base">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          期間: {duration}
        </Text>
        <Text fontWeight="bold" fontSize="2xl" color="brand.accent">
          {cost}
        </Text>
        <Box width="100%">
          <Text fontWeight="medium" mb={2}>含まれるもの:</Text>
          <List spacing={2}>
            {includes.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <ListIcon as={FaCheckCircle} color="green.500" />
                <Text fontSize="sm">{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

const programs = [
  {
    title: 'サマーキャンプ（短期）',
    duration: '2週間',
    cost: '¥350,000〜',
    includes: [
      '往復航空券',
      '現地宿泊費（ホームステイ）',
      '食事（1日3食）',
      '語学学校授業料',
      'アクティビティ費用',
      '海外旅行保険'
    ]
  },
  {
    title: '語学留学（中期）',
    duration: '3ヶ月',
    cost: '¥980,000〜',
    includes: [
      '往復航空券',
      '現地宿泊費（ホームステイ）',
      '食事（1日2食）',
      '語学学校授業料',
      '教材費',
      '海外旅行保険'
    ]
  },
  {
    title: '長期留学（半年）',
    duration: '6ヶ月',
    cost: '¥1,750,000〜',
    includes: [
      '往復航空券',
      '現地宿泊費（ホームステイ）',
      '食事（1日2食）',
      '語学学校授業料',
      '教材費',
      'アクティビティ費用（一部）',
      '海外旅行保険'
    ]
  }
];

export const CostExample = () => {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg" mb={3}>
              COST & PAYMENT
            </Text>
            <Heading as="h2" size="xl" mb={5} color="brand.base">
              費用の目安と支払い方法
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              プログラムごとの費用目安と含まれるサービス内容をご案内します。
              すべての費用を明示し、追加料金の心配がないよう透明性を保っています。
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="full">
            {programs.map((program, index) => (
              <ProgramCost key={index} {...program} />
            ))}
          </SimpleGrid>

          <Box
            bg="gray.50"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            width="full"
            mt={6}
          >
            <Heading as="h3" size="md" mb={5} color="brand.base">
              お支払いの流れ
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h4" size="sm" mb={3} color="brand.base">
                  支払いスケジュール
                </Heading>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>タイミング</Th>
                      <Th>お支払い内容</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>申込時</Td>
                      <Td>申込金 50,000円</Td>
                    </Tr>
                    <Tr>
                      <Td>出発2ヶ月前</Td>
                      <Td>プログラム費用の50%</Td>
                    </Tr>
                    <Tr>
                      <Td>出発1ヶ月前</Td>
                      <Td>残金のお支払い</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Box>
                <Heading as="h4" size="sm" mb={3} color="brand.base">
                  キャンセルポリシー
                </Heading>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>期間</Th>
                      <Th>返金率</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>出発60日前まで</Td>
                      <Td>プログラム費用の80%（申込金除く）</Td>
                    </Tr>
                    <Tr>
                      <Td>出発30日前まで</Td>
                      <Td>プログラム費用の50%（申込金除く）</Td>
                    </Tr>
                    <Tr>
                      <Td>出発29日前以降</Td>
                      <Td>返金不可</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </SimpleGrid>

            <Box mt={6} p={4} bg="blue.50" borderRadius="md">
              <Flex align="center">
                <Box as={FaInfoCircle} color="blue.500" mr={2} />
                <Text fontWeight="medium" color="blue.700">
                  費用に関する注意事項
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.600" mt={2}>
                表示価格は一般的な目安であり、為替レートや現地状況により変動する場合があります。
                詳細は個別カウンセリングにてご案内いたします。お子様の状況や希望に合わせて、
                最適なプログラムと費用プランをご提案させていただきます。
              </Text>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
