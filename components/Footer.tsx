import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="mt-20 text-sm text-gray-300 text-center space-y-1">
      <p>Teamfy © 2025, All rights reserved.</p>

      <div className="flex justify-between items-center flex-wrap gap-4 text-center sm:text-left sm:justify-between">
        <div className="space-x-8">
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
        <LanguageSwitcher /> {/* ✅ Now inline on the same line */}
      </div>
    </footer>
  );
}
