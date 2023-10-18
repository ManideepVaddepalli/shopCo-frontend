import "./globals.css";
import { AuthContextProvider } from "../context/AuthContext";

export const metadata = {
  title: " Home | Shop.CO",
  description: "Shop.CO --- Manideep Vaddepalli Clone. ---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
