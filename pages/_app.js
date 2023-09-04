import { globalStyles } from "stitches.config";
import { AnimatePresence } from "framer-motion";
import Box from "components/atoms/Box";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "components/molecules/Header";
import { Footer } from "components/molecules/Footer";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  globalStyles();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleExitComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const router = useRouter();

  const spring = {
    duration: 0.3,
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: "dark",
      }}
    >
      <Box
        css={{
          perspective: "1000px",
          "perspective-origin": "center center",
        }}
      >
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Box
            key={router.pathname}
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            originZ={0}
          >
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </Box>
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
