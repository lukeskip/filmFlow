import "./globals.css";

export const metadata = {
  title: "FilmFlow",
  description: "API movie/series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
