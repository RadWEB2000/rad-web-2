import { Fonts } from "layout/Seo";
import "css/Global.scss"
import type { Metadata } from "next";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Fonts/>
      </head>
      <body>{children}</body>
    </html>
  );
}
