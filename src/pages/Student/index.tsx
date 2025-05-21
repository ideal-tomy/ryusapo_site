import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

// 共通コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';
import { MainCTA } from '../../components/common/MainCTA';
import { FaqPreview } from '../../components/common/FaqPreview';

// 本人向けページ固有コンポーネントのインポート
import { ProgramOptions } from '../../components/Student/ProgramOptions';
import { SupportTimeline } from '../../components/Student/SupportTimeline';
import { StudentVoices } from '../../components/Student/StudentVoices';
import { StepFlow } from '../../components/Student/StepFlow';
import { StudentThoughtsSection } from '../../components/Student/StudentThoughtsSection';

export const StudentPage = () => {
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="英語が話せるって、ちょっとカッコいい。"
        description="英語ができると、話せる世界が増える。会える人が増える。将来の夢？今わからなくてもいい。留学に行くことで、何かがきっと動き出す。"
        bgImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
        height={{ base: "auto", md: "400px" }}
        textColor="white"
      />
      
      <Container maxW="container.md" py={{ base: 8, md: 10 }} textAlign="center">
        <Text fontSize="lg" color="gray.700">
          いま目の前にある世界は、全体のほんの一部。
          海外の空気を吸って、文化の違いに触れて、自分の言葉で思いを伝えてみる。
          その体験が、きっとあなたの「これから」を変えていきます。
          世界は、思ったより広くて、近い。
          留サポは、あなたのはじめの一歩を、全力でサポートします。
        </Text>
      </Container>
      
      {/* 2. 留学の選択肢紹介 */}
      <ProgramOptions />
      
      {/* 3. サポート体制紹介 */}
      <SupportTimeline />
      
      {/* 新しいセクションの挿入 */}
      <StudentThoughtsSection />
      
      {/* 4. 体験談・声 */}
      <StudentVoices />
      
      {/* 5. 留学までの流れ */}
      <StepFlow />
      
      {/* 6. よくある質問（抜粋） */}
      <FaqPreview 
        title="よくある質問（学生向け）"
        description="留学に関する不安や疑問にお答えします。"
        showTabs={false}
        maxItems={5}
        defaultTab={0}
      />
      
      {/* 7. CTAセクション */}
      <Box bg="gray.50" py={16}>
        <MainCTA />
      </Box>
    </Box>
  );
};
