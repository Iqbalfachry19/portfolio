export const metadata = {
  title: "Iqbal's Portfolio",
};
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Iqbal's Portfolio" />
        <meta
          name="keywords"
          content="Iqbal, Portfolio, Web Development, React, Next.js, Sanity, Tailwind CSS, TypeScript"
        />
        <meta name="author" content="Iqbal Fachry" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
