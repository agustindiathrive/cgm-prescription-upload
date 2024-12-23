import constants from '@/lib/constants';
import Content from '@/components/layout/content';
import Header from '@/components/layout/header';

export default function AvergentPage() {
  // Render
  return (
    <>
      <Header org={constants.organizations['avergent']} />
      <Content org={constants.organizations['avergent']} />
    </>
  );
}