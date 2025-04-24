import React from 'react';
import { Box } from '@chakra-ui/react';

// 共通コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';
import { MainCTA } from '../../components/common/MainCTA';
import { FaqPreview } from '../../components/common/FaqPreview';

// 親御さん向けページ固有コンポーネントのインポート
import { WorryList } from '../../components/Parent/WorryList';
import { SupportSystem } from '../../components/Parent/SupportSystem';
import { CostExample } from '../../components/Parent/CostExample';
import { ParentVoices } from '../../components/Parent/ParentVoices';

export const ParentPage = () => {
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="安心して送り出せる留学サポート"
        description="大切なお子さまの『初めて』を、プロの手で支えます"
        bgImage="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1469"
        height={{ base: "300px", md: "400px" }}
        textColor="white"
      />
      
      {/* 2. 不安に共感するセクション */}
      <WorryList />
      
      {/* 3. サポート体制詳細 */}
      <SupportSystem />
      
      {/* 4. 費用の目安と支払いの仕組み */}
      <CostExample />
      
      {/* 5. 保護者の声・インタビュー */}
      <ParentVoices />
      
      {/* 6. よくある質問（抜粋） */}
      <FaqPreview 
        title="よくある質問（保護者向け）"
        description="お子さまの留学に関するよくあるご質問にお答えします。"
        showTabs={false}
        maxItems={3}
        defaultTab={1}
      />
      
      {/* 7. CTAセクション */}
      <Box bg="gray.50" py={16}>
        <MainCTA />
      </Box>
    </Box>
  );
};
