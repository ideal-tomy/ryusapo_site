import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  FormErrorMessage,
  Heading,
  Text,
  useToast,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zodスキーマの定義
const contactFormSchema = z.object({
  name: z.string().min(1, '氏名を入力してください'),
  email: z.string().min(1, 'メールアドレスを入力してください').email('有効なメールアドレスを入力してください'),
  tel: z.string().optional(),
  inquiry_type: z.string().min(1, 'お問い合わせ種別を選択してください'),
  user_type: z.string().min(1, '属性を選択してください'),
  message: z.string().min(10, 'メッセージは10文字以上入力してください'),
  privacy_policy: z.boolean().refine(val => val === true, {
    message: 'プライバシーポリシーに同意してください',
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      tel: '',
      inquiry_type: '',
      user_type: '',
      message: '',
      privacy_policy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // ここで実際のAPI送信を行う
      // 本来はAPIエンドポイントにPOSTするコードを入れる
      console.log('送信データ:', data);
      
      // 送信成功の処理（モック）
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'お問い合わせを送信しました',
        description: '担当者より順次ご連絡いたします',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      
      // フォームをリセット
      reset();
    } catch (error) {
      toast({
        title: '送信に失敗しました',
        description: 'お手数ですが時間をおいて再度お試しください',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="section" bg="white" borderRadius="lg" boxShadow="md" p={{ base: 6, md: 8 }} width="full">
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h3" size="lg" mb={2} color="brand.base">
            お問い合わせフォーム
          </Heading>
          <Text color="gray.600">
            留学に関するご質問・ご相談はこちらから
          </Text>
        </Box>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={6} align="start">
            {/* 氏名 */}
            <FormControl isInvalid={!!errors.name} isRequired>
              <FormLabel htmlFor="name">お名前</FormLabel>
              <Input
                id="name"
                placeholder="例：留学 太郎"
                {...register('name')}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            {/* メールアドレス */}
            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="例：example@email.com"
                {...register('email')}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            {/* 電話番号 */}
            <FormControl isInvalid={!!errors.tel}>
              <FormLabel htmlFor="tel">電話番号（任意）</FormLabel>
              <Input
                id="tel"
                placeholder="例：090-1234-5678"
                {...register('tel')}
              />
              <FormErrorMessage>{errors.tel?.message}</FormErrorMessage>
            </FormControl>

            {/* お問い合わせ種別 */}
            <FormControl isInvalid={!!errors.inquiry_type} isRequired>
              <FormLabel htmlFor="inquiry_type">お問い合わせ種別</FormLabel>
              <Select
                id="inquiry_type"
                placeholder="選択してください"
                {...register('inquiry_type')}
              >
                <option value="program_inquiry">留学プログラムについて</option>
                <option value="cost_inquiry">費用について</option>
                <option value="procedure_inquiry">手続きについて</option>
                <option value="request_materials">資料請求</option>
                <option value="other">その他</option>
              </Select>
              <FormErrorMessage>{errors.inquiry_type?.message}</FormErrorMessage>
            </FormControl>

            {/* 属性 */}
            <FormControl isInvalid={!!errors.user_type} isRequired>
              <FormLabel>お客様属性</FormLabel>
              <Controller
                name="user_type"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                      <Radio value="student">留学希望学生本人</Radio>
                      <Radio value="parent">保護者</Radio>
                      <Radio value="teacher">学校教員</Radio>
                      <Radio value="other">その他</Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <FormErrorMessage>{errors.user_type?.message}</FormErrorMessage>
            </FormControl>

            {/* メッセージ */}
            <FormControl isInvalid={!!errors.message} isRequired>
              <FormLabel htmlFor="message">お問い合わせ内容</FormLabel>
              <Textarea
                id="message"
                placeholder="ご質問・ご相談内容を具体的にご記入ください"
                rows={6}
                {...register('message')}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>

            {/* プライバシーポリシー */}
            <FormControl isInvalid={!!errors.privacy_policy} isRequired>
              <Flex align="start">
                <Checkbox
                  id="privacy_policy"
                  mt={1}
                  {...register('privacy_policy')}
                />
                <FormLabel htmlFor="privacy_policy" ml={2} mb={0}>
                  <Text fontSize="sm">
                    プライバシーポリシーに同意する
                    <br />
                    <Text as="span" color="gray.500" fontSize="xs">
                      ※個人情報の取り扱いについては、プライバシーポリシーをご確認ください
                    </Text>
                  </Text>
                </FormLabel>
              </Flex>
              <FormErrorMessage>{errors.privacy_policy?.message}</FormErrorMessage>
            </FormControl>

            {/* 送信ボタン */}
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
              isLoading={isSubmitting}
              loadingText="送信中..."
            >
              送信する
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};
