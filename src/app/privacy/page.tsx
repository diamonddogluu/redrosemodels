import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "隐私政策 - redrosemodels.com",
  description: "redrosemodels.com 隐私政策和个人信息保护",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  return <LegalPage type="privacy" />;
} 