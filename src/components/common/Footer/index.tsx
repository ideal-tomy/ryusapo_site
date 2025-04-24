import { Box, Container, Stack, SimpleGrid, Text, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const LOGO_PATH = '/src/assets/logo.png';

// u30d5u30c3u30bfu30fcu306bu8868u793au3059u308bu30eau30f3u30afu30abu30c6u30b4u30eau30fc
export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="brand.base"
      color="white"
      py={{ base: 8, md: 12 }}
      mt="auto"
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
          <Stack spacing={6} align={{ base: 'center', md: 'flex-start' }}>
            <Box>
              <Image
                src={LOGO_PATH}
                alt="u7559u30b5u30dd"
                height="50px"
                fallbackSrc="https://via.placeholder.com/150x50?text=u7559u30b5u30dd"
                filter="brightness(0) invert(1)"
              />
            </Box>
            <Text fontSize="sm">
              u82e5u8005u306eu4fa1u5024u89b3u8ee2u63dbu3068u4fddu8b77u8005u306eu5b89u5fc3u611fu3092u4e21u7acbu3059u308bu6559u80b2u7684u306au7559u5b66u30b5u30fcu30d3u30b9
            </Text>
          </Stack>

          <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              u30b5u30a4u30c8u30deu30c3u30d7
            </Text>
            <Link as={RouterLink} to="/" _hover={{ color: 'brand.light' }}>
              u30c8u30c3u30d7u30dau30fcu30b8
            </Link>
            <Link as={RouterLink} to="/student" _hover={{ color: 'brand.light' }}>
              u672cu4ebau5411u3051u30dau30fcu30b8
            </Link>
            <Link as={RouterLink} to="/parent" _hover={{ color: 'brand.light' }}>
              u89aau5fa1u3055u3093u5411u3051u30dau30fcu30b8
            </Link>
            <Link as={RouterLink} to="/services" _hover={{ color: 'brand.light' }}>
              u30b5u30fcu30d3u30b9u7d39u4ecb
            </Link>
            <Link as={RouterLink} to="/voices" _hover={{ color: 'brand.light' }}>
              u4f53u9a13u8ac7
            </Link>
          </Stack>

          <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              u30b5u30ddu30fcu30c8
            </Text>
            <Link as={RouterLink} to="/faq" _hover={{ color: 'brand.light' }}>
              u3088u304fu3042u308bu8ceau554f
            </Link>
            <Link as={RouterLink} to="/contact" _hover={{ color: 'brand.light' }}>
              u304au554fu3044u5408u308fu305b
            </Link>
            <Link as={RouterLink} to="/about" _hover={{ color: 'brand.light' }}>
              u4f1au793eu6982u8981
            </Link>
            <Link 
              href="https://line.me/R/ti/p/@123abc"
              isExternal
              _hover={{ color: 'brand.light' }}
            >
              LINEu3067u76f8u8ac7
            </Link>
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderStyle={'solid'} borderColor="gray.600" pt={4}>
          <Text textAlign="center" fontSize="sm">
            &copy; {new Date().getFullYear()} u7559u30b5u30dd. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
