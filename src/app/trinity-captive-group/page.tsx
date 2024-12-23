import constants from '@/lib/constants';
import Content from '@/components/layout/content';
import Header from '@/components/layout/header';

export default function TrinityCaptiveGroupPage() {
  // Render
  return (
    <>
      <Header org={constants.organizations['tcp']} />
      <Content org={constants.organizations['tcp']} />
    </>
  );
}