import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

// u5171u901au30b3u30f3u30ddu30fcu30cdu30f3u30c8
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// u30dau30fcu30b8u30b3u30f3u30ddu30fcu30cdu30f3u30c8
// ページコンポーネントのインポートは main.tsx に移管するためコメントアウトまたは削除
// import { HomePage } from './pages/Home';
// import { StudentPage } from './pages/Student';
// import { ParentPage } from './pages/Parent';
// import { ServicesPage } from './pages/Services';
// import { VoicesPage } from './pages/Voices';
// import { FaqPage } from './pages/Faq';
// import { ContactPage } from './pages/Contact';
// import { AboutPage } from './pages/About';

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
