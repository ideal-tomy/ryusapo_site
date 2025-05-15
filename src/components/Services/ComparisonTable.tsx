import React from 'react';
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, VStack, Icon, Flex, Badge, useBreakpointValue, HStack } from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';

type ComparisonItemProps = {
  feature: string;
  ryusapo: 'yes' | 'partial' | 'no';
  companyA: 'yes' | 'partial' | 'no';
  companyB: 'yes' | 'partial' | 'no';
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

const StatusCell = ({ status, company }: { status: 'yes' | 'partial' | 'no', company: 'ryusapo' | 'companyA' | 'companyB' }) => {
  return (
    <Td textAlign="center" bg={company === 'ryusapo' && status === 'yes' ? 'brand.light' : 'transparent'}>
      <Flex justify="center">
        <StatusIcon status={status} />
      </Flex>
    </Td>
  );
};

export const ComparisonTable = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const comparisonItems: ComparisonItemProps[] = [
    {
      feature: "24時間サポート体制",
      ryusapo: "yes",
      companyA: "partial",
      companyB: "no",
      description: "留サポでは、プログラム期間中は24時間体制で現地でのサポート可能な体制を整えています"
    },
    {
      feature: "費用の透明性",
      ryusapo: "yes",
      companyA: "no",
      companyB: "no",
      description: "サービス範囲を明確にし、不当な追加費用が発生しない設計を徹底しています"
    },
    {
      feature: "海外大卒・バイリンガルスタッフが同行",
      ryusapo: "yes",
      companyA: "yes",
      companyB: "partial",
      description: "UCLAをはじめとするスタッフが日本語と英語の両方で、現地でも安心サポート"
    },
    {
      feature: "帰国後のフォローアップ",
      ryusapo: "yes",
      companyA: "no",
      companyB: "no",
      description: "サマーキャンプ・現地校見学後も、次のアクションまで一貫サポート"
    },
    {
      feature: "少人数制での手厚いサポート体制",
      ryusapo: "yes",
      companyA: "partial",
      companyB: "partial",
      description: "サマーキャンプではスタッフ1名につき生徒最大7名、その他サービスラインでは基本的にはマンツーマンでサポートします"
    },
    {
      feature: "最先端の教育論「モンテッソーリ教育」の考え方に基づいたプログラム設計",
      ryusapo: "yes",
      companyA: "partial",
      companyB: "no",
      description: "単なる海外経験に留まらず、「自分で考えて行動する力」を養うプログラム設計となっています"
    },
    {
      feature: "本物の富裕層や一流の親が大切にする「心の教育」",
      ryusapo: "yes",
      companyA: "partial",
      companyB: "no",
      description: "海外の非日常の中で五感で触れる、生きた体験を重点に置いたプログラム設計"
    }
  ];

  return (
    <Box as="section" py={12} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Box textAlign="center" w="full">
            <Text color="brand.accent" fontWeight="bold" fontSize="lg">
              COMPARISON
            </Text>
            <Heading as="h2" size="xl" color="brand.base" mb={2}>
              留サポの強み
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              他社サービスとの比較で見る留サポの特徴
            </Text>
          </Box>
          
          {isMobile ? (
            <VStack spacing={4} align="stretch" width="full">
              {comparisonItems.map((item, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="sm">
                  <VStack align="start" spacing={2}>
                    <Heading as="h4" size="sm" color="brand.base">{item.feature}</Heading>
                    {item.description && (
                      <Text fontSize="xs" color="gray.600" noOfLines={2} whiteSpace="pre-line">
                        {item.description}
                      </Text>
                    )}
                    <HStack spacing={4} pt={3} width="full" justify="space-around">
                      <VStack spacing={1} align="center">
                        <Text fontSize="xs" fontWeight="bold" color="gray.700">留サポ</Text>
                        <StatusIcon status={item.ryusapo} />
                      </VStack>
                      <VStack spacing={1} align="center">
                        <Text fontSize="xs" fontWeight="bold" color="gray.700">A社</Text>
                        <StatusIcon status={item.companyA} />
                      </VStack>
                      <VStack spacing={1} align="center">
                        <Text fontSize="xs" fontWeight="bold" color="gray.700">B社</Text>
                        <StatusIcon status={item.companyB} />
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </VStack>
          ) : (
            <Box width="full" overflowX="auto">
              <Table variant="simple" size="lg" bg="white" boxShadow="sm" borderRadius="lg" overflow="hidden">
                <Thead bg="brand.base">
                  <Tr>
                    <Th color="white" fontSize="md" width="30%">比較項目</Th>
                    <Th color="white" fontSize="md" textAlign="center" width="23%">
                      <Badge colorScheme="cyan" fontSize="md" p={1} borderRadius="md">
                        留サポ
                      </Badge>
                    </Th>
                    <Th color="white" fontSize="md" textAlign="center" width="23%">A社</Th>
                    <Th color="white" fontSize="md" textAlign="center" width="23%">B社</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {comparisonItems.map((item, index) => (
                    <Tr key={index}>
                      <Td fontWeight="bold" verticalAlign="top">
                        <VStack align="start" spacing={1}>
                          <Text>{item.feature}</Text>
                          {item.description && (
                            <Text fontSize="sm" color="gray.600" whiteSpace="pre-line">{item.description}</Text>
                          )}
                        </VStack>
                      </Td>
                      <StatusCell status={item.ryusapo} company="ryusapo" />
                      <StatusCell status={item.companyA} company="companyA" />
                      <StatusCell status={item.companyB} company="companyB" />
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}

          <Box pt={10} textAlign="center" w="full">
            <Heading as="h3" size="lg" color="brand.base" mb={4}>
              留サポが選ばれる理由
            </Heading>
            <Text fontSize="md" color="gray.700" maxW="container.md" mx="auto">
              留学経験のある海外大卒のスタッフ × 少人数体制によって、一人ひとりの挑戦と変化に、丁寧に寄り添えるサポートを実現しています。
            </Text>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};
