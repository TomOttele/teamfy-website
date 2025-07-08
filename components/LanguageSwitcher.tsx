import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  return (
    <div className="flex gap-2 mt-6">
      {locales?.map((loc) => (
        <button
          key={loc}
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: loc })
          }
          className={`px-3 py-1 rounded ${
            loc === locale ? "bg-white text-black" : "bg-gray-600"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
