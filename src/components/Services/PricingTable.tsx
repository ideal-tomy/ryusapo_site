import React from 'react';
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, VStack, useBreakpointValue } from '@chakra-ui/react';

interface PriceItem {
  serviceName: string;
  price3Months?: string;
  price2Months?: string;
  price1Month?: string;
  price2Weeks?: string;
  highlight?: boolean;
  planCategory: 'package' | 'spot';
}

const pricingData: PriceItem[] = [
  {
    serviceName: 'フルサポートセット\n・志望校選び・出願サポート\n・入学手続きサポート',
    price3Months: '¥448,000',
    price2Months: '¥498,000',
    price1Month: '¥598,000',
    planCategory: 'package',
  },
  {
    serviceName: '入学準備セット\n・出願サポート\n・入学手続きサポート',
    price3Months: '¥198,000',
    price2Months: '¥248,000',
    price1Month: '¥298,000',
    highlight: true,
    planCategory: 'package',
  },
  {
    serviceName: '志望校選びサポート',
    price3Months: '¥220,000',
    price2Months: '¥265,000',
    price1Month: '¥320,000',
    price2Weeks: '¥398,000',
    planCategory: 'spot',
  },
  {
    serviceName: '出願サポート',
    price3Months: '¥98,000',
    price2Months: '¥128,000',
    price1Month: '¥148,000',
    price2Weeks: '¥198,000',
    planCategory: 'spot',
  },
  {
    serviceName: '入学手続きサポート',
    price3Months: '¥148,000',
    price2Months: '¥178,000',
    price1Month: '¥198,000',
    price2Weeks: '¥298,000',
    planCategory: 'spot',
  },
];

const planCategoryLabels = {
  package: 'パッケージ\nプラン',
  spot: 'スポット\nプラン',
};

export const PricingTable = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });
  
  const commonThProps = {
    py: isMobile ? 3 : 4,
    px: isMobile ? 2 : 3,
    borderColor: "gray.300", 
    borderRightWidth: "1px",
    color: "gray.700",
    fontSize: isMobile ? "xs" : "sm",
    textAlign: "center" as const,
    fontWeight: "bold",
    verticalAlign: "middle",
  };
  const commonTdProps = {
    py: isMobile ? 3 : 4,
    px: isMobile ? 2 : 3,
    borderColor: "gray.300", 
    borderRightWidth: "1px",
    textAlign: "center" as const,
    fontSize: isMobile ? "sm" : "md",
    fontWeight: "bold",
    verticalAlign: "middle",
  };

  const categoryColWidth = isMobile ? "80px" : "15%";
  const serviceNameColWidth = isMobile ? "120px" : "25%";
  const priceColWidth = isMobile ? "auto" : "15%";

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
                  <Th {...commonThProps} rowSpan={2} width={categoryColWidth}>プラン種別</Th>
                  <Th {...commonThProps} rowSpan={2} width={serviceNameColWidth}>サービス内容</Th>
                  <Th {...commonThProps} colSpan={1} width={priceColWidth}>料金</Th>
                  <Th {...commonThProps} colSpan={3} width={isMobile ? "auto" : `calc(${priceColWidth} * 3)`} borderRightWidth="0px"> 
                    Fast Pass (お急ぎプラン)
                  </Th>
                </Tr>
                <Tr>
                  <Th {...commonThProps} width={priceColWidth}>～3ヶ月前</Th>
                  <Th {...commonThProps} width={priceColWidth}>2ヶ月前</Th>
                  <Th {...commonThProps} width={priceColWidth}>1ヶ月前</Th>
                  <Th {...commonThProps} width={priceColWidth} borderRightWidth="0px">2週間前</Th> 
                </Tr>
              </Thead>
              <Tbody>
                {pricingData.map((item, index) => {
                  const isFirstInCategory = index === 0 || pricingData[index - 1].planCategory !== item.planCategory;
                  let categoryRowSpan = 0;
                  if (isFirstInCategory) {
                    categoryRowSpan = 1;
                    for (let i = index + 1; i < pricingData.length; i++) {
                      if (pricingData[i].planCategory === item.planCategory) {
                        categoryRowSpan++;
                      } else {
                        break;
                      }
                    }
                  }

                  return (
                    <Tr key={index} bg={item.highlight ? 'blue.50' : 'white'} _hover={{ bg: item.highlight ? 'blue.100' : 'gray.50' }}>
                      {isFirstInCategory && (
                        <Td
                          rowSpan={categoryRowSpan}
                          borderColor="gray.300"
                          borderRightWidth="1px"
                          bg="blue.50" 
                          textAlign="center"
                          verticalAlign="middle"
                          px={isMobile ? 1 : 2}
                          py={isMobile ? 2 : 4}
                          fontSize={isMobile ? "sm" : "lg"}
                          fontWeight="bold"
                          color="blue.700"
                          whiteSpace="pre-line"
                          width={categoryColWidth}
                        >
                          {planCategoryLabels[item.planCategory]}
                        </Td>
                      )}
                      <Td 
                        py={isMobile ? 3 : 4} 
                        px={isMobile ? 2 : 3} 
                        borderColor="gray.300" 
                        borderRightWidth="1px"
                        fontWeight={item.highlight ? "extrabold" : "medium"} 
                        color={item.highlight ? "blue.700" : "gray.700"}
                        fontSize={isMobile ? (item.highlight ? "sm" : "xs") : (item.highlight ? "lg" : "md")} 
                        width={serviceNameColWidth}
                        textAlign="center"
                        verticalAlign="middle"
                      >
                        {(() => {
                          const serviceNameParts = item.serviceName.split('\n');
                          const serviceTitle = serviceNameParts[0];
                          const serviceDescription = serviceNameParts.slice(1).join('\n');

                          if (item.planCategory === 'package' && serviceDescription) {
                            const titleFontSize = item.highlight ? (isMobile ? "md" : "xl") : (isMobile ? "sm" : "lg");
                            const titleFontWeight = item.highlight ? "extrabold" : "bold";
                            const titleColor = item.highlight ? "blue.700" : "gray.800"; 

                            const descFontSize = item.highlight ? (isMobile ? "sm" : "md") : (isMobile ? "xs" : "sm");
                            const descFontWeight = "normal";
                            const descColor = item.highlight ? "blue.700" : "gray.600";

                            return (
                              <VStack align="center" spacing={0} width="full">
                                <Text fontSize={titleFontSize} fontWeight={titleFontWeight} color={titleColor} lineHeight="shorter" mb={isMobile ? 0.5 : 1}>
                                  {serviceTitle}
                                </Text>
                                <Text fontSize={descFontSize} fontWeight={descFontWeight} color={descColor} whiteSpace="pre-line" lineHeight="tight">
                                  {serviceDescription}
                                </Text>
                              </VStack>
                            );
                          } else {
                            let fontSizeForSpotMobile;
                            if (isMobile && item.planCategory === 'spot') {
                              fontSizeForSpotMobile = "11px";
                            } else {
                              fontSizeForSpotMobile = isMobile ? (item.highlight ? "sm" : "xs") : (item.highlight ? "lg" : "md");
                            }
                            const defaultFontWeight = item.highlight ? "extrabold" : "medium";
                            const defaultColor = item.highlight ? "blue.700" : "gray.700";
                            return (
                              <Text fontSize={fontSizeForSpotMobile} fontWeight={defaultFontWeight} color={defaultColor} whiteSpace="pre-line">
                                {item.serviceName}
                              </Text>
                            );
                          }
                        })()}
                      </Td>
                      <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={priceColWidth}>{item.price3Months || '-'}</Td>
                      <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={priceColWidth}>{item.price2Months || '-'}</Td>
                      <Td {...commonTdProps} fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize} fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight} width={priceColWidth}>{item.price1Month || '-'}</Td>
                      <Td
                        {...commonTdProps}
                        p={0}
                        position="relative"
                        borderRightWidth="0px"
                        fontSize={item.highlight && !isMobile ? "lg" : commonTdProps.fontSize}
                        fontWeight={item.highlight ? "extrabold" : commonTdProps.fontWeight}
                        width={priceColWidth}
                      >
                        {item.price2Weeks ?? (
                          item.planCategory === "package" && (
                            <Box as="span" position="absolute" inset="0">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                style={{ display: "block" }}
                              >
                                <line
                                  x1="0" y1="100"
                                  x2="100" y2="0"
                                  stroke="lightgray"
                                  strokeWidth="2"
                                  strokeLinecap="square"
                                />
                              </svg>
                            </Box>
                          )
                        )}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}; 