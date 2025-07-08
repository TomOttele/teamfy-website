import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Teamfy</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-900 text-white flex flex-col items-center">
        <Header />

        <section className="text-center mt-20">
          <div className="flex justify-center gap-4 mb-8">
            <Image
              src="/placeholder-left.png"
              alt="Left"
              width={180}
              height={360}
            />
            <Image
              src="/placeholder-center.png"
              alt="Center"
              width={220}
              height={440}
            />
            <Image
              src="/placeholder-right.png"
              alt="Right"
              width={180}
              height={360}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("headline")}
          </h1>
          <p className="text-lg mb-6">{t("subheadline")}</p>
          <button className="bg-white text-black rounded-full px-6 py-2 text-lg font-semibold hover:bg-gray-200">
            {t("download")}
          </button>
        </section>

        <Footer />
        <LanguageSwitcher />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
