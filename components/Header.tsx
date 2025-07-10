// Header.tsx
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation("common");

  return (
    <header className="w-[200px] mb-8">
      <div className="w-[200px] mb-8">
        <div className="flex flex-col items-center gap-2 bg-white text-black px-4 py-3 rounded-xl font-bold w-full">
          <span>Teamfy.</span>
          <button className="bg-red-600 text-black rounded-full px-4 py-1 text-sm font-semibold hover:bg-gray-200">
            {t("download")}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
