import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "structure-call-ar: the structure call before your contador",
  description:
    "A folder-based structure advisor for the Argentine freelancer billing in USD. It computes the monotributo trigger from your real numbers, commits to the verdict, and names the exact line where the decision becomes your contador's.",
  openGraph: {
    title: "structure-call-ar: the trigger is deterministic, the complex choice is your contador's",
    description:
      "Which monotributo category am I really in? Is this the year a US contract forces me into RI? structure-call-ar reads your rolling-12, does the arithmetic, and hands you a brief for your contador.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
