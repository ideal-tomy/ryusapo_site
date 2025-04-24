import React from 'react';
import { Box } from '@chakra-ui/react';

// 共通コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';
import { MainCTA } from '../../components/common/MainCTA';
import { FaqPreview } from '../../components/common/FaqPreview';

// 本人向けページ固有コンポーネントのインポート
import { ProgramOptions } from '../../components/Student/ProgramOptions';
import { SupportTimeline } from '../../components/Student/SupportTimeline';
import { StudentVoices } from '../../components/Student/StudentVoices';
import { StepFlow } from '../../components/Student/StepFlow';

export const StudentPage = () => {
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="本気で挑戦するなら、世界を見に行こう。"
        description="留学は難しくない。第一歩をサポートします。"
        bgImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
        height={{ base: "300px", md: "400px" }}
        textColor="white"
      />
      
      {/* 2. 留学の選択肢紹介 */}
      <ProgramOptions />
      
      {/* 3. サポート体制紹介 */}
      <SupportTimeline />
      
      {/* 4. 体験談・声 */}
      <StudentVoices />
      
      {/* 5. 留学までの流れ */}
      <StepFlow />
      
      {/* 6. よくある質問（抜粋） */}
      <FaqPreview 
        title="よくある質問（学生向け）"
        description="留学に関する不安や疑問にお答えします。カジュアルな言葉で不安を取り除きます。"
        showTabs={false}
        maxItems={3}
        defaultTab={0}
      />
      
      {/* 7. CTAセクション */}
      <Box bg="gray.50" py={16}>
        <MainCTA />
      </Box>
    </Box>
  );
};
