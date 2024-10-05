import { onest } from "./utils/fonts/fonts";
import { ThemeProvider } from "@/components/ui/darkmode/theme-provider";
import "./globals.css";
import LeftSidebar from "@/components/leftSidebar/leftSidebar";
import RightSidebar from "@/components/rightSidebar/rightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <div className="grid grid-cols-5 grid-rows-5 gap-4 h-dvh">
                  <div className="row-span-5 rounded-tr-xl rounded-br-xl bg-neutral-300 dark:bg-neutral-800/70 pt-4 px-2">
                    <LeftSidebar />
                  </div>
                  <div className="col-span-3 rounded-xl row-span-5 pt-4 px-2">
                    {children}
                  </div>
                  <div className="row-span-5 rounded-tl-xl rounded-bl-xl col-start-5 bg-neutral-300 dark:bg-neutral-800/70 pt-4 px-2">
                    <RightSidebar />
                  </div>
              </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
