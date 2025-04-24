import React from 'react';
import { Box } from '@chakra-ui/react';

// 共通コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';
import { MainCTA } from '../../components/common/MainCTA';

// About専用コンポーネントのインポート
import { MissionVision } from '../../components/About/MissionVision';
import { StorySection } from '../../components/About/StorySection';
import { ApproachSection } from '../../components/About/ApproachSection';

export const AboutPage = () => {
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="私たちについて"
        description="この社会課題を、教育の力で変えたい。"
        bgImage="https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=2070"
        height={{ base: "300px", md: "400px" }}
        textColor="white"
      />
      
      {/* 2. 理念と価値観 */}
      <MissionVision />
      
      {/* 3. 創業の背景・社会課題 */}
      <StorySection />
      
      {/* 4. 社会課題へのアプローチ */}
      <ApproachSection />
      
      {/* 5. CTAセクション */}
      <Box bg="gray.50" py={16}>
        <MainCTA />
      </Box>
    </Box>
  );
};
