import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

// LINE公式アカウントのURLを修正
const LINE_URL = 'https://lin.ee/0iQNlSK';

// ナビゲーションリンクの定義
const NAV_ITEMS = [
  { name: 'トップ', to: '/' },
  { name: '中高生の方へ', to: '/student' },
  { name: '保護者の方へ', to: '/parent' },
  { name: 'サービスディテール', to: '/service-detail' },
  { name: 'サポート・料金', to: '/services' },
  { name: '会社紹介', to: '/about' },
  { name: 'よくある質問', to: '/faq' },
  { name: 'お問い合わせ', to: '/contact' },
];

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール検知の設定
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg={isScrolled ? 'white' : 'transparent'}
      boxShadow={isScrolled ? 'sm' : 'none'}
      transition="all 0.3s ease"
    >
      <Flex
        h={20}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Flex alignItems="center">
            {/* ロゴ画像。実際の画像を用意して差し替えが必要 */}
            <Box display="flex" alignItems="center">
              <Image
                alt="留サポ"
                height="50px"
                src="/images/footerlogo02.jpg"
              />
            </Box>
          </Flex>
        </Link>

        {/* デスクトップナビゲーション */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {NAV_ITEMS.map((navItem) => (
            <Link
              key={navItem.name}
              as={RouterLink}
              to={navItem.to}
              px={2}
              py={1}
              rounded="md"
              fontWeight="medium"
              color="gray.700"
              _hover={{
                textDecoration: 'none',
                bg: 'brand.light',
                color: 'brand.base',
              }}
            >
              {navItem.name}
            </Link>
          ))}
          <Button
            as="a"
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            bg="#06C755"
            color="white"
            _hover={{ bg: "#05A948" }}
            size="sm"
          >
            LINEで相談
          </Button>
        </HStack>

        {/* モバイルメニュー */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          aria-label="メニューを開く"
          icon={<HamburgerIcon />}
        />
      </Flex>

      {/* モバイルドロワー */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">メニュー</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <Link
                  key={navItem.name}
                  as={RouterLink}
                  to={navItem.to}
                  py={2}
                  onClick={onClose}
                  fontWeight="medium"
                >
                  {navItem.name}
                </Link>
              ))}
              <Button
                as="a"
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                bg="#06C755"
                color="white"
                _hover={{ bg: "#05A948" }}
                w="full"
              >
                LINEで相談
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

// ハンバーガーアイコンのシンプルな実装
const HamburgerIcon = () => (
  <Box>
    <Box as="span" h="2px" w="18px" bg="gray.700" display="block" mb="3px" />
    <Box as="span" h="2px" w="18px" bg="gray.700" display="block" mb="3px" />
    <Box as="span" h="2px" w="18px" bg="gray.700" display="block" />
  </Box>
);
