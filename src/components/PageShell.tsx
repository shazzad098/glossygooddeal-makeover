import { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const PageShell = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main key={pathname} className="animate-fade-up">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;