import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext"; // Import our custom ThemeProvider

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export const metadata = {
  title: "CRED Garage Inspired Dashboard",
  description: "A responsive dashboard inspired by CRED Garage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the Inter font to the body */}
      <body className={inter.className}>
        {/* Wrap the entire application content with ThemeProvider
            This makes theme state and toggle function available to all child components. */}
        <ThemeProvider>
          {children} {/* Render the rest of your application */}
        </ThemeProvider>
      </body>
    </html>
  );
}
