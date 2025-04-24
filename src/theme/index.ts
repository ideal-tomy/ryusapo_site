import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      base: '#002f5f', // ネイビーブルー（ベースカラー）
      light: '#a6c9e2', // ライトブルー（アクセントカラー）
      accent: '#f5d547', // イエロー（アクセントカラー）
      white: '#ffffff', // ホワイト（補助カラー）
    },
  },
  fonts: {
    heading: "'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        primary: {
          bg: 'brand.accent',
          color: 'gray.800',
          _hover: {
            bg: 'yellow.400',
          },
        },
        secondary: {
          bg: 'brand.light',
          color: 'brand.base',
          _hover: {
            bg: 'blue.100',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
})

export default theme
