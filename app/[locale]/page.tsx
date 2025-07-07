"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#05004E] to-[#001BA4] text-white flex flex-col items-center justify-between p-6">
      <div className="w-full flex justify-between items-center mt-6">
        <div className="text-2xl font-bold ml-4">Teamfy.</div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold mr-4">
          {t("download")}
        </button>
      </div>

      <section className="flex flex-col items-center mt-12 text-center">
        <div className="flex justify-center gap-4 mb-8">
          <Image
            src="/placeholder-left.png"
            alt="App Left"
            width={200}
            height={400}
          />
          <Image
            src="/placeholder-center.png"
            alt="App Center"
            width={200}
            height={400}
          />
          <Image
            src="/placeholder-right.png"
            alt="App Right"
            width={200}
            height={400}
          />
        </div>

        <h1 className="text-3xl font-semibold mb-2">{t("headline")}</h1>
        <p className="text-lg text-white/80 mb-6">{t("subtext")}</p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
          {t("download")}
        </button>
      </section>

      <footer className="w-full flex flex-col items-center gap-2 mt-20 text-sm text-white/80">
        <div className="flex gap-6 items-center">
          <p>Teamfy © 2025</p>
          <a href="#" className="underline">
            {t("terms")}
          </a>
          <a href="#" className="underline">
            {t("privacy")}
          </a>
          <a href="#" className="underline">
            {t("contact")}
          </a>
        </div>
        <div className="flex gap-4 mb-4">
          <Image
            src="/icon-facebook.svg"
            width={24}
            height={24}
            alt="Facebook"
          />
          <Image
            src="/icon-instagram.svg"
            width={24}
            height={24}
            alt="Instagram"
          />
          <Image src="/icon-x.svg" width={24} height={24} alt="X" />
        </div>
      </footer>
    </main>
  );
}
