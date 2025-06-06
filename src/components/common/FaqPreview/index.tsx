import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqPreviewProps = {
  studentFaqs?: FaqItem[];
  parentFaqs?: FaqItem[];
  title?: string;
  description?: string;
  showTabs?: boolean;
  defaultTab?: number;
  maxItems?: number;
};

// 学生向けFAQ
const defaultStudentFaqs: FaqItem[] = [
  {
    question: '英語が苦手でも留学できますか？',
    answer: '英語力に自信がなくても大丈夫です。初心者向けのサマーキャンプも多数ご用意しています。現地では実践的な英語力が自然と身につき、多くの学生が「思っていたより話せた」と実感しています。授業は自分のレベルに合わせて受けられるので安心してください。'
  },
  {
    question: '友達がいなくても参加できますか？',
    answer: '一人での参加者がほとんどです。留サポでは欧米の学校の入学時期（秋）になる前に、サマーキャンプを実施しており、本番の中学前に海外生活に慣れる目的での利用も可能です。ですので同じ時期に留学する仲間と事前に知り合うこともできます。一人だからこそ新しい出会いや経験が待っていますよ。'
  },
  {
    question: '留学費用はどのくらいかかりますか？',
    answer: 'プログラムの種類や期間によって異なりますが、弊社のサマーキャンプは39万円台～（他社平均50万円～）でご提供しております。世紀留学では高校/大学・公立/私立かによって年間50万円～1000万円など、幅が広いため、ご予算や希望する留学先の環境に応じて詳細は個別カウンセリングにてご案内させていただきます。詳細は個別カウンセリングでご案内します。'
  },
  {
    question: '滞在先はどのような所ですか？',
    answer: 'ホームステイが一般的ですが、学生寮やシェアハウスなど目的に応じて選択可能です。ホームステイでは現地の家庭で生活しながら文化や習慣を学べる貴重な経験ができます。どの滞在先も安全性を最優先に厳選しています。'
  },
  {
    question: 'サマーキャンプ中、スマホは持っていけますか？現地から連絡できますか？',
    answer: 'はい、スマホは携帯いただいて大丈夫です。プログラム中はなるべく英語を使えるよう、スマホの使用は控えていただきますが、緊急用に所持いただく分には問題ございません。'
  },
  {
    question: '同行するスタッフは英語が話せますか？',
    answer: '弊社のスタッフは海外大卒なので日本語、英語どちらでの言語でも対応が可能です。'
  }
];

// 保護者向けFAQ
const defaultParentFaqs: FaqItem[] = [
  {
    question: '子どもが海外で生活することが不安です',
    answer: 'お子さんを大切に想われる親御さんのお気持ちに寄り添えるよう、現地でのリスクが最小限となるよう、寮生活をオススメしております。\nモンテッソーリ教育の考え方に基づき、海外留学によって「今あえて離れることがお子さんの未来のために必要な時間」を確保することがお子さんの成長に繋がります。\nグローバルで活躍するお子さんを持つ親御さんは皆さん、海外に住む我が子と離れて暮らす寂しさや心配を乗り越えていらっしゃいます。お子さんも遠い地で一人、日々挑戦されていますので、親子二人三脚で乗り越えられるよう弊社もサポートします。'
  },
  {
    question: '英語ができない子どもでも大丈夫ですか？',
    answer: '英語力に自信がなくても大丈夫です。初心者向けのサマーキャンプも多数ご用意しています。現地では実践的な英語力が自然と身につき、多くの学生が「思っていたより話せた」と実感しています。授業は自分のレベルに合わせて受けられるので安心してください。'
  },
  {
    question: '学校はどのように選ばれてますか？',
    answer: 'お子様、保護者様のご要望を元に数万校以上の学校の中から、安全性、教育環境、生活環境などを総合的に確認し、最適な道をご提案します。'
  },
  {
    question: '緊急時の対応はどうなっていますか？',
    answer: '24時間対応の緊急連絡先を用意し、現地スタッフが迅速に対応します。医療機関との連携体制も整備し、病気や怪我の際にも適切な対応が可能です。また保険加入のサポートも行い、万が一の場合もカバーできる体制を整えています。'
  },
  {
    question: '子どもの様子はどのように知ることができますか？',
    answer: '定期的な状況報告を行い、お子様の学習状況や生活の様子をお伝えします。必要に応じて写真や動画も共有し、成長の様子を感じていただけるようにしています。また、ご希望があれば現地スタッフとのオンライン面談も設定可能です。'
  },
];

// 新しいFAQデータセットを定義・エクスポート
export const servicePageFaqs: FaqItem[] = [
  {
    question: '現地校見学は、子どもと親、一緒に行ってもいいですか？',
    answer: 'はい。原則、保護者様もご一緒にご同行いただくようお願いいたします。お子さんだけの場合は別途個別にご相談ください。'
  },
  {
    question: '志望する学校側からの説明や授業見学はできますか？',
    answer: '学校によって対応方針が異なりますので、事前準備の段階でご相談ください。ご要望に応じて個別に学校にこちらから確認いたします。'
  },
  {
    question: '見学できる学校の数に上限はありますか？',
    answer: '見学する学校数によってサービス料金が異なります。詳しくはサポート・料金ページをご覧ください。'
  },
  {
    question: 'どんな基準で志望校を選ぶのですか？',
    answer: 'カリキュラム、部活動、地域、主な進学先など、ご要望に応じて様々な角度からお子様にとって最適な進路を一緒に考えます。'
  },
  {
    question: '英語のエッセイは書いたことがないのですが、大丈夫ですか？',
    answer: '海外の大学を卒業した弊社サポートメンバーが出願時のエッセイの添削もいたしますのでご安心ください。'
  },
  {
    question: '初めての海外渡航なので不安です。何から始めればいいですか？',
    answer: 'まずはサマーキャンプへのご参加をオススメしております！百聞は一見にしかず、海外生活がご自身に合っているかどうかを確認するためにも、ご自身で海外の空気を体験してみてください。後悔のない留学生活を送るためにも、全力でサポートさせていただきます！'
  }
];

export const FaqPreview: React.FC<FaqPreviewProps> = ({
  studentFaqs = defaultStudentFaqs,
  parentFaqs = defaultParentFaqs,
  title = 'よくある質問',
  description = '留学に関するよくある質問をまとめました。その他のご質問はお気軽にお問い合わせください。',
  showTabs = true,
  defaultTab = 0,
  maxItems = 3
}) => {
  const [tabIndex, setTabIndex] = useState(defaultTab);

  const displayFaqs = tabIndex === 0 
    ? studentFaqs.slice(0, maxItems) 
    : parentFaqs.slice(0, maxItems);

  return (
    <Box as="section" py={{ base: 12, md: 16 }} className="section">
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <Box textAlign="center" maxW="container.md" mx="auto">
            <Heading as="h2" size="xl" mb={4} color="brand.base">
              {title}
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              {description}
            </Text>
          </Box>

          {showTabs && (
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              index={tabIndex}
              onChange={setTabIndex}
              width="100%"
              maxW="container.lg"
              mx="auto"
            >
              <TabList justifyContent="center" mb={8}>
                <Tab _selected={{ color: 'white', bg: 'brand.base' }}>
                  学生の方向け
                </Tab>
                <Tab _selected={{ color: 'white', bg: 'brand.base' }}>
                  保護者の方向け
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={0}>
                  <Accordion allowToggle width="100%">
                    {studentFaqs.slice(0, maxItems).map((faq, index) => (
                      <AccordionItem key={index} borderWidth="1px" borderRadius="md" mb={4} borderColor="gray.200">
                        <h3>
                          <AccordionButton py={4} _expanded={{ bg: 'brand.light', color: 'brand.base' }}>
                            <Box flex="1" textAlign="left" fontWeight="medium">
                              {faq.question}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h3>
                        <AccordionPanel pb={4} bg="gray.50">
                          {faq.answer}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabPanel>
                <TabPanel px={0}>
                  <Accordion allowToggle width="100%">
                    {parentFaqs.slice(0, maxItems).map((faq, index) => (
                      <AccordionItem key={index} borderWidth="1px" borderRadius="md" mb={4} borderColor="gray.200">
                        <h3>
                          <AccordionButton py={4} _expanded={{ bg: 'brand.light', color: 'brand.base' }}>
                            <Box flex="1" textAlign="left" fontWeight="medium">
                              {faq.question}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h3>
                        <AccordionPanel pb={4} bg="gray.50">
                          {faq.answer}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}

          {!showTabs && (
            <Accordion allowToggle width="100%" maxW="container.lg">
              {displayFaqs.map((faq, index) => (
                <AccordionItem key={index} borderWidth="1px" borderRadius="md" mb={4} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} _expanded={{ bg: 'brand.light', color: 'brand.base' }}>
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} bg="gray.50">
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          <Flex justify="center" mt={6}>
            <Button
              as={RouterLink}
              to="/about"
              size="lg"
              variant="outline"
              colorScheme="brand"
            >
              会社概要を見る
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};
