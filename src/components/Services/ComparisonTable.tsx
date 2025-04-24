import React from 'react';
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, VStack, Icon, Flex, Badge } from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';

type ComparisonItemProps = {
  feature: string;
  ryusapo: 'yes' | 'partial' | 'no';
  others: 'yes' | 'partial' | 'no';
  description?: string;
};

const StatusIcon = ({ status }: { status: 'yes' | 'partial' | 'no' }) => {
  switch (status) {
    case 'yes':
      return <Icon as={FaCheckCircle} color="green.500" boxSize={5} />;
    case 'partial':
      return <Icon as={FaQuestionCircle} color="orange.500" boxSize={5} />;
    case 'no':
      return <Icon as={FaTimesCircle} color="red.500" boxSize={5} />;
    default:
      return null;
  }
};

const StatusCell = ({ status, company }: { status: 'yes' | 'partial' | 'no', company: 'ryusapo' | 'others' }) => {
  return (
    <Td textAlign="center" bg={company === 'ryusapo' && status === 'yes' ? 'brand.light' : 'transparent'}>
      <Flex justify="center">
        <StatusIcon status={status} />
      </Flex>
    </Td>
  );
};

export const ComparisonTable = () => {
  const comparisonItems: ComparisonItemProps[] = [
    {
      feature: "24時間サポート体制",
      ryusapo: "yes",
      others: "partial",
      description: "留サポでは24時間いつでも日本語で相談可能な体制を整えています"
    },
    {
      feature: "費用の透明性",
      ryusapo: "yes",
      others: "no",
      description: "追加費用が一切発生しないプラン設計を徹底しています"
    },
    {
      feature: "現地スタッフによる対応",
      ryusapo: "yes",
      others: "yes",
      description: "全拠点に日本語対応可能なスタッフを常駐させています"
    },
    {
      feature: "帰国後のフォローアップ",
      ryusapo: "yes",
      others: "no",
      description: "留学体験を今後に活かすためのサポートを提供しています"
    },
    {
      feature: "プログラムの自由度",
      ryusapo: "yes",
      others: "partial",
      description: "完全オーダーメイドのプログラム設計が可能です"
    },
    {
      feature: "親子サポート体制",
      ryusapo: "yes",
      others: "partial",
      description: "保護者様向けの説明会や相談会を定期的に実施しています"
    }
  ];

  return (
    <Box as="section" py={12} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Box>
            <Text color="brand.accent" fontWeight="bold" fontSize="lg">
              COMPARISON
            </Text>
            <Heading as="h2" size="xl" color="brand.base" mb={2}>
              留サポの強み
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              他社サービスとの比較で見る留サポの特徴
            </Text>
          </Box>
          
          <Box width="full" overflowX="auto">
            <Table variant="simple" size="lg" bg="white" boxShadow="sm" borderRadius="lg" overflow="hidden">
              <Thead bg="brand.base">
                <Tr>
                  <Th color="white" fontSize="md" width="40%">比較項目</Th>
                  <Th color="white" fontSize="md" textAlign="center" width="30%">
                    <Badge colorScheme="yellow" fontSize="md" p={1} borderRadius="md">
                      留サポ
                    </Badge>
                  </Th>
                  <Th color="white" fontSize="md" textAlign="center" width="30%">他社</Th>
                </Tr>
              </Thead>
              <Tbody>
                {comparisonItems.map((item, index) => (
                  <Tr key={index}>
                    <Td fontWeight="bold">
                      <VStack align="start" spacing={1}>
                        <Text>{item.feature}</Text>
                        {item.description && (
                          <Text fontSize="sm" color="gray.600">{item.description}</Text>
                        )}
                      </VStack>
                    </Td>
                    <StatusCell status={item.ryusapo} company="ryusapo" />
                    <StatusCell status={item.others} company="others" />
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
