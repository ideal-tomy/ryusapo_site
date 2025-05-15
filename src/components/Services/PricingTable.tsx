import React from 'react';
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, VStack, useBreakpointValue } from '@chakra-ui/react';

interface PriceItem {
  serviceName: string;
  price3Months?: string;
  price2Months?: string;
  price1Month?: string;
  price2Weeks?: string;
  highlight?: boolean;
}

const pricingData: PriceItem[] = [
  {
    serviceName: '志望校選び＋出願サポート\n＋入学手続きフルサポートセット',
    price3Months: '¥4,480',
    price2Months: '¥4,980',
    price1Month: '¥5,980',
  },
  {
    serviceName: '出願サポート\n＋入学手続きサポートセット',
    price3Months: '¥1,980',
    price2Months: '¥2,480',
    price1Month: '¥2,980',
    highlight: true,
  },
  {
    serviceName: '志望校選びサポート',
    price3Months: '¥2,200',
    price2Months: '¥2,650',
    price1Month: '¥3,200',
    price2Weeks: '¥3,980',
  },
  {
    serviceName: '出願サポート',
    price3Months: '¥980',
    price2Months: '¥1,280',
    price1Month: '¥1,480',
    price2Weeks: '¥1,980',
  },
  {
    serviceName: '入学手続きサポート',
    price3Months: '¥1,480',
    price2Months: '¥1,780',
    price1Month: '¥1,980',
    price2Weeks: '¥2,980',
  },
];

export const PricingTable = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const commonThProps = {
    py: isMobile ? 3 : 4,
    px: isMobile ? 2 : 4,
    borderColor: "gray.300",
    borderRightWidth: "1px",
    color: "gray.700",
    fontSize: isMobile ? "xs" : "sm",
    textAlign: "center" as const,
    fontWeight: "bold",
  };
  const commonTdProps = {
    py: isMobile ? 3 : 4,
    px: isMobile ? 2 : 4,
    borderColor: "gray.300",
    borderRightWidth: "1px",
    textAlign: "center" as const,
    fontSize: isMobile ? "sm" : "md",
    fontWeight: "bold",
  };

  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <Box textAlign="center">
            <Heading as="h2" size="xl" color="brand.base" mb={2}>
              料金一覧
            </Heading>
            <Text fontSize="lg" color="gray.600">
              ご希望のサポート内容と準備期間に合わせてプランをお選びいただけます。
            </Text>
          </Box>

          <Box width="full" overflowX="auto">
            <Table variant="simple" size={tableSize} borderWidth="1px" borderColor="gray.300" borderRadius="lg" boxShadow="md">
              <Thead bg="gray.100">
                <Tr>
                  <Th {...commonThProps} rowSpan={2} width={isMobile ? "120px" : "30%"} verticalAlign="middle" borderRightWidth="1px">サービス内容</Th>
                  <Th {...commonThProps} colSpan={1} width={isMobile ? "auto" : "17.5%"} borderRightWidth="1px">料金</Th>
                  <Th {...commonThProps} colSpan={3} width={isMobile ? "auto" : "52.5%"} borderRightWidth="0px">
                    Fast Pass (お急ぎプラン)
                  </Th>
                </Tr>
                <Tr>
                  <Th {...commonThProps} width={isMobile ? "auto" : "17.5%"} borderRightWidth="1px">3ヶ月前〜</Th>
                  <Th {...commonThProps} width={isMobile ? "auto" : "17.5%"} borderRightWidth="1px">2ヶ月前</Th>
                  <Th {...commonThProps} width={isMobile ? "auto" : "17.5%"} borderRightWidth="1px">1ヶ月前</Th>
                  <Th {...commonThProps} width={isMobile ? "auto" : "17.5%"} borderRightWidth="0px">2週間前</Th>
                </Tr>
              </Thead>
              <Tbody>
                {pricingData.map((item, index) => (
                  <Tr key={index} bg={item.highlight ? 'blue.50' : 'white'} _hover={{ bg: item.highlight ? 'blue.100' : 'gray.50' }}>
                    <Td 
                      py={isMobile ? 3 : 4} 
                      px={isMobile ? 2 : 4} 
                      borderColor="gray.300" 
                      borderRightWidth="1px"
                      fontWeight={item.highlight ? "extrabold" : "medium"} 
                      color={item.highlight ? "blue.700" : "gray.700"}
                      fontSize={isMobile ? (item.highlight ? "sm" : "xs") : (item.highlight ? "lg" : "md")}
                      whiteSpace="pre-line"
                      width={isMobile ? "120px" : "30%"}
                      textAlign="left"
                      lineHeight={isMobile ? "short" : "base"}
                    >
                      {item.serviceName}
                    </Td>
                    <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={isMobile ? "auto" : "17.5%"}>{item.price3Months || '-'}</Td>
                    <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={isMobile ? "auto" : "17.5%"}>{item.price2Months || '-'}</Td>
                    <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={isMobile ? "auto" : "17.5%"}>{item.price1Month || '-'}</Td>
                    <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={isMobile ? "auto" : "17.5%"} borderRightWidth="0px">
                      {item.price2Weeks ? item.price2Weeks : (item.serviceName.includes('フルサポート') || item.serviceName.includes('＋入学手続きサポートセット')) && index < 2 ? 
                        <Box w="full" h="full" display="flex" alignItems="center" justifyContent="center">
                          <svg width="80%" height="30px" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ display: 'block', margin: 'auto' }}>
                            <line x1="0" y1="50" x2="100" y2="0" stroke="lightgray" strokeWidth="2" />
                          </svg>
                        </Box>
                        : '-'}
                    </Td>
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