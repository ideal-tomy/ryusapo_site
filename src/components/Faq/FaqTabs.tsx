import React from 'react';
import { Tabs, TabList, Tab, Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export type FaqCategory = {
  id: number;
  label: string;
};

type FaqTabsProps = {
  categories: FaqCategory[];
  activeCategory: number;
  onCategoryChange: (categoryId: number) => void;
  title?: string;
  description?: string;
};

export const FaqTabs: React.FC<FaqTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  title,
  description
}) => {
  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="center" mb={8}>
          {title && (
            <Heading as="h2" size="xl" color="brand.base" textAlign="center">
              {title}
            </Heading>
          )}
          {description && (
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
              {description}
            </Text>
          )}
          
          <Tabs 
            variant="soft-rounded" 
            colorScheme="blue" 
            size="lg" 
            isFitted 
            width={{base: "full", md: "auto"}}
            index={categories.findIndex(cat => cat.id === activeCategory)}
            onChange={(index) => onCategoryChange(categories[index].id)}
          >
            <TabList 
              bg="gray.100" 
              p={2} 
              borderRadius="full" 
              width={{base: "full", md: "auto"}}
            >
              {categories.map((category) => (
                <Tab 
                  key={category.id} 
                  _selected={{ bg: 'brand.base', color: 'white' }}
                  borderRadius="full"
                  fontWeight="medium"
                  px={6}
                >
                  {category.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
};
