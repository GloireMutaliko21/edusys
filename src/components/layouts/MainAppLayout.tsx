import { FunctionComponent, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import PageLoader from "../global/PageLoader";
import { ThemeProvider } from "../ui/theme-provider";

const AdminPanel = dynamic(() => import("./AdminPanel"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const MainAppLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AdminPanel>{children}</AdminPanel>
    </ThemeProvider>
  );
};

export default MainAppLayout;
