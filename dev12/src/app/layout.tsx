import "css/Global.scss"



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="pl">
      <head>
        <link rel="alternate" hrefLang="pl" href="#"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
