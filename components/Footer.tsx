import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="mt-20 text-sm text-gray-300 px-4">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center flex-wrap gap-4">
        {/* Left: Copyright */}
        <p className="whitespace-nowrap">Teamfy © 2025, All rights reserved.</p>

        {/* Center: Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#" className="underline">
            Terms of Use
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Contact us
          </a>
        </div>

        {/* Right: Language Switcher */}
        <div className="shrink-0">
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
