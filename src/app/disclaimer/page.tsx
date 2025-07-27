import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "免责声明 - redrosemodels.com",
  description: "redrosemodels.com 免责声明和法律声明",
  robots: "noindex, nofollow",
};

export default function DisclaimerPage() {
  return <LegalPage type="disclaimer" />;
} 