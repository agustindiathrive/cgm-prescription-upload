import Image from "next/image";

import CGMForm from "@/components/cgm-form";

export default function Home() {
  return (
    <main className="absolute bg-[#242578] bg-opacity-70 w-full">
      <Image
        alt="CGM Background"
        className="absolute bg-fixed object-fill -z-10"
        height={1000}
        src="/images/cgm-bg.webp"
        width={1920}
      />
      <section className="flex flex-row py-12">
        <div className="pl-80 pr-24 w-7/12">
          <h2 className="font-light pb-6 text-5xl text-white"><strong className="font-medium">FREE</strong> Diathrive Health Benefits Membership</h2>
          <article className="flex flex-col font-light gap-4 text-xl text-white">
            <p>As part of your employee benefits package, you and your family qualify for a <strong className="font-medium">FREE</strong> Diathrive Health membership through <strong className="font-medium">Trinity Care Patient Navigator</strong> at <strong className="font-medium">no cost to you</strong>!</p>
            <p>Please fill out the form to activate your membership today for unlimited access to diabetes testing supplies, insulin pen needles, and clinical support from our Health Advisors.</p>
          </article>
        </div>
        <div className="w-5/12">
          <CGMForm />
        </div>
      </section>
    </main>
  );
}
