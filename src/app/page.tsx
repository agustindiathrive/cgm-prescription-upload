import { redirect } from 'next/navigation';

import constants from '@/lib/constants';

export default function Home() {
  // Render
  return redirect(`/${constants.defaultOrg}`);
}
