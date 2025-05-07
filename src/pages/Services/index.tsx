import React from 'react';
import { Box } from '@chakra-ui/react';

// 共通コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';
import { MainCTA } from '../../components/common/MainCTA';
import { FaqPreview, servicePageFaqs, FaqItem } from '../../components/common/FaqPreview';

// サービス紹介ページ固有のコンポーネントのインポート
// import { ProgramCards } from '../../components/Services/ProgramCards';
// import { SupportList } from '../../components/Services/SupportList';
// import { OptionServices } from '../../components/Services/OptionServices';
import { ComparisonTable } from '../../components/Services/ComparisonTable';

export const ServicesPage = () => {
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="あなたに合った留学プランをご提案します"
        description="一人ひとりの目標や状況に合わせたオーダーメイドの留学サポート"
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2069"
        height={{ base: "300px", md: "400px" }}
        textColor="white"
      />
      
      {/* 2. プログラム一覧（カード形式） */}
      {/* <ProgramCards /> */}
      
      {/* 3. サポート内容一覧 */}
      {/* <SupportList /> */}
      
      {/* 4. オプションサービス紹介 */}
      {/* <OptionServices /> */}
      
      {/* 5. 他社との違い（比較表） */}
      <ComparisonTable />
      
      {/* 6. よくある質問（導線） */}
      <FaqPreview 
        title="サービスに関するよくある質問"
        description="留学サービスについてのよくある質問と回答をご紹介します"
        showTabs={false}
        studentFaqs={servicePageFaqs}
        maxItems={6}
        defaultTab={0}
      />
      
      {/* 7. CTAセクション */}
      <Box bg="gray.50" py={16}>
        <MainCTA />
      </Box>
    </Box>
  );
};
