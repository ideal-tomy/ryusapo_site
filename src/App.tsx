import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

// u5171u901au30b3u30f3u30ddu30fcu30cdu30f3u30c8
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// u30dau30fcu30b8u30b3u30f3u30ddu30fcu30cdu30f3u30c8
import { HomePage } from './pages/Home';
import { StudentPage } from './pages/Student';
import { ParentPage } from './pages/Parent';
import { ServicesPage } from './pages/Services';
import { VoicesPage } from './pages/Voices';
import { FaqPage } from './pages/Faq';
import { ContactPage } from './pages/Contact';
import { AboutPage } from './pages/About';

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/voices" element={<VoicesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
