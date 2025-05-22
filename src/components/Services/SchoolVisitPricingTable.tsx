import React from 'react';
import { Box, Container, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, VStack, useBreakpointValue } from '@chakra-ui/react';

const schoolVisitData = [
  {
    label: '〜3校',
    price: '988,000円',
    perSchool: '約330,000円',
  },
  {
    label: '〜5校',
    price: '1,489,000円',
    perSchool: '約298,000円',
  },
];

export const SchoolVisitPricingTable = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });

  const commonThProps = {
    py: isMobile ? 3 : 4,
    px: isMobile ? 2 : 3,
    borderColor: 'gray.300',
    borderRightWidth: '1px',
    color: 'gray.700',
    fontSize: isMobile ? 'xs' : 'sm',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    verticalAlign: 'middle',
  };
  const commonTdProps = {
    py: isMobile ? 3 : 4,
    px: isMobile ? 2 : 3,
    borderColor: 'gray.300',
    borderRightWidth: '1px',
    textAlign: 'center' as const,
    fontSize: isMobile ? 'sm' : 'md',
    fontWeight: 'bold',
    verticalAlign: 'middle',
  };

  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <Box textAlign="center">
            <Heading as="h3" size="lg" color="brand.base" mb={2}>
              現地校見学料金表
            </Heading>
            <Text fontSize="md" color="gray.600">
              現地校見学の料金は下記の通りです。
            </Text>
          </Box>
          <Box width="full" overflowX="auto">
            <Table variant="simple" size={tableSize} borderWidth="1px" borderColor="gray.300" borderRadius="lg" boxShadow="md">
              <Thead bg="gray.100">
                <Tr>
                  <Th {...commonThProps} width="30%">校数</Th>
                  <Th {...commonThProps} width="35%">料金</Th>
                  <Th {...commonThProps} width="35%" borderRightWidth="0px">1校あたり</Th>
                </Tr>
              </Thead>
              <Tbody>
                {schoolVisitData.map((row, idx) => (
                  <Tr key={idx} bg={idx % 2 === 0 ? 'blue.50' : 'white'}>
                    <Td {...commonTdProps}>{row.label}</Td>
                    <Td {...commonTdProps}>{row.price}</Td>
                    <Td {...commonTdProps} borderRightWidth="0px">{row.perSchool}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Text fontSize="xs" color="gray.500" mt={2} textAlign="right">
              ※1 6校以上の場合、1校の料金を加算
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}; 