"use client";
import AntdLayout from "@/components/layouts/AntdLayout";
import ModalManager from "@/components/modals";
import ToastMessageManager from "@/components/modals/index.toast";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ReduxProvider from "@/redux/Provider";
import { HSThemeAppearance } from "@/utils/theme";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
const Container = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    import("preline");
    HSThemeAppearance.init();
  }, []);
  return (
    <>
      <ReduxProvider>
        <NextTopLoader
          color="#1F6FEB"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <AntdLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <ModalManager />
          <ToastMessageManager />
        </AntdLayout>
      </ReduxProvider>
    </>
  );
};
export default Container;
