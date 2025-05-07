import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

// コンポーネントのインポート
import { PageHeader } from '../../components/common/PageHeader';
import { MainCTA } from '../../components/common/MainCTA';
import { FaqTabs } from '../../components/Faq/FaqTabs';
import { FaqList } from '../../components/Faq/FaqList';
import { ContactCta } from '../../components/Faq/ContactCta';

// データのインポート
import { faqData, faqCategories } from '../../data/faqData';

export const FaqPage = () => {
  // アクティブなカテゴリを管理するstate
  const [activeCategory, setActiveCategory] = useState(0); // 0: 全て, 1: 本人向け, 2: 親御さん向け
  
  // カテゴリ変更ハンドラー
  const handleCategoryChange = (categoryId: number) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <Box as="main">
      {/* 1. ページヘッダー */}
      <PageHeader 
        title="よくある質問"
        bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070"
        height={{ base: "250px", md: "300px" }}
        textColor="white"
      />
      
      {/* 2. 質問カテゴリ切り替えタブ */}
      <FaqTabs 
        categories={faqCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      {/* 3. 質問リスト */}
      <FaqList 
        faqs={faqData}
        activeCategory={activeCategory}
      />
      
      {/* 4. お問い合わせ誘導セクション */}
      <ContactCta />
      
      {/* 5. CTA */}
      <Box bg="gray.50" py={16}>
        <MainCTA />
      </Box>
    </Box>
  );
};
