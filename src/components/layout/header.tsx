import Image from "next/image";

export default function Header() {
  // Render
  return (
    <main className="px-60 py-6">
      <Image
        alt="Diathrive Logo"
        height={60}
        priority
        src="/images/diathrive-logo.png"
        width={217}
      />
    </main>
  );
}