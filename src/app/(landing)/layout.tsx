import Footer from "./_components/layout/Footer";

import { FOOTER } from "@/@content";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer {...FOOTER} />
    </>
  );
}
