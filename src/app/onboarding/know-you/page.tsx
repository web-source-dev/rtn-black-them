import { UserInfoSection } from '@/components/Sections/OnboardingSections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Full Stack Web Development Classes | Application Form",
  description: "Apply for our free full stack web development classes! No prior coding experience required - share your interests and availability to start your coding journey.",
};

export default function KnowYouPage() {
  return <UserInfoSection />;
} 