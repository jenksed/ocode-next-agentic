import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ocode-next-agentic",
  description: "Lean Next.js substrate for agent-assisted development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
