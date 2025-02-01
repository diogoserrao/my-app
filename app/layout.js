import Menu from "../components/menu";
import Footer from "../components/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
