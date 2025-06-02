import { Box, Container, Heading, Text } from '@chakra-ui/react';

type PageHeaderProps = {
  title: string;
  description?: string;
  bgColor?: string;
  bgImage?: string;
  textColor?: string;
  height?: string | { base: string; md: string };
  titleFontSize?: string | { base: string; md: string };
  descriptionFontSize?: string | { base: string; md: string };
};

export const PageHeader = ({
  title,
  description,
  bgColor = 'brand.light',
  bgImage,
  textColor = 'gray.800',
  height = { base: '200px', md: '300px' },
  titleFontSize = { base: '2xl', md: '3xl' },
  descriptionFontSize = { base: 'lg', md: 'xl' },
}: PageHeaderProps) => {
  return (
    <Box
      as="section"
      bg={bgColor}
      bgImage={bgImage ? `url(${bgImage})` : undefined}
      bgSize="cover"
      bgPosition="center"
      color={textColor}
      height={height}
      display="flex"
      alignItems="center"
      position="relative"
    >
      {/* オーバーレイ（背景画像がある場合） */}
      {bgImage && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={0}
        />
      )}

      <Container
        maxW="container.xl"
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <Heading as="h1" fontSize={titleFontSize} mb={4}>
          {title}
        </Heading>
        {description && (
          <Text fontSize={descriptionFontSize} maxW="container.md" mx="auto">
            {description}
          </Text>
        )}
      </Container>
    </Box>
  );
};
