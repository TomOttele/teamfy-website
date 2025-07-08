import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Teamfy</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-900 text-white px-4">
        <Header />

        <div className="w-full max-w-screen-xl mx-auto text-center">
          <section className="mt-20">
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Image
                src="/images/front_left.png"
                alt="Left"
                width={180}
                height={360}
              />
              <Image
                src="/images/app_front.png"
                alt="Center"
                width={220}
                height={440}
              />
              <Image
                src="/images/front_right.png"
                alt="Right"
                width={180}
                height={360}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("headline")}
            </h1>
            <p className="text-lg mb-6">{t("subheadline")}</p>
            <button className="bg-red-600 text-black rounded-full px-6 py-2 text-lg font-semibold hover:bg-gray-200">
              {t("download")}
            </button>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
