import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import App from './App'
import theme from './theme'
import './index.css'

// ページコンポーネントのインポート
import { HomePage } from './pages/Home'
import { StudentPage } from './pages/Student'
import { ParentPage } from './pages/Parent'
import { ServicesPage } from './pages/Services'
import { VoicesPage } from './pages/Voices'
import { FaqPage } from './pages/Faq'
import { ContactPage } from './pages/Contact'
import { AboutPage } from './pages/About'
import ServiceDetailPage from './pages/ServiceDetail'

const routerWithScroll = createBrowserRouter([
  {
    element: (
      <>
        <App />
        <ScrollRestoration />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/student", element: <StudentPage /> },
      { path: "/parent", element: <ParentPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/voices", element: <VoicesPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/service-detail", element: <ServiceDetailPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={routerWithScroll} />
    </ChakraProvider>
  </React.StrictMode>,
)
