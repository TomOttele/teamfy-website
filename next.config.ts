import nextI18NextConfig from "./next-i18next.config.js";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
};

export default nextConfig;
