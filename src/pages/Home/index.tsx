import React from 'react';
import { Box } from '@chakra-ui/react';

// Import all section components
import { HeroSection } from '../../components/Home/HeroSection';
import { WhySection } from '../../components/Home/WhySection';
import { ServiceSection } from '../../components/Home/ServiceSection';
import { SafeSupportSection } from '../../components/Home/SafeSupportSection';
import { TestimonialSection } from '../../components/Home/TestimonialSection';
import { ParentSection } from '../../components/Home/ParentSection';
import { LearningApproachSection } from '../../components/Home/LearningApproachSection';
import { CtaSection } from '../../components/Home/CtaSection';

export const HomePage = () => {
  return (
    <Box as="main">
      {/* 1. ヒーローセクション */}
      <HeroSection />
      
      {/* 2. 留学とは？（Whyセクション） */}
      <WhySection />
      
      {/* 3. サービス概要（Whatセクション） */}
      <ServiceSection />
      
      {/* ★ここに新しいセクションを挿入 */}
      <SafeSupportSection />

      {/* 4. 体験談ピックアップ（信頼セクション） */}
      <TestimonialSection />
      
      {/* 5. 保護者の安心セクション */}
      <ParentSection />
      
      {/* ★ここに新しいセクションを挿入 */}
      <LearningApproachSection />

      {/* 6. CTAセクション（共通導線） */}
      <CtaSection />
    </Box>
  );
};
