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
      <body>{children}</body>
    </html>
  );
}
