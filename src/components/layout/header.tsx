import Image from 'next/image';
import Link from 'next/link';

import Organization from '@/types/organization';

type HeaderProps = {
  org: Organization;
};

export default function Header({ org }: HeaderProps) {
  // Render
  return (
    <main className="flex flex-row items-center justify-evenly h-[100px] w-full">
      <Link href={org.pathname}>
        <Image
          alt="Diathrive Logo"
          height={60}
          priority
          src="/images/diathrive-logo.png"
          width={217}
        />
      </Link>
      <a href={org.websiteURL} target="_blank">
        <Image
          alt={`${org.name} Logo`}
          height={org.imageDimensions.height}
          priority
          src={org.logoURL}
          width={org.imageDimensions.widht}
        />
      </a>
    </main>
  );
}