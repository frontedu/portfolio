import "styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Box from "components/atoms/Box";
import { useEffect } from "react";
import Header from "components/molecules/Header";
import { Footer } from "components/molecules/Footer";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import SEO from "../next-seo.config";
import styles from "styles/App.module.css";

function MyApp({ Component, pageProps }) {
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
    <>
      <Box className={styles.perspective}>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <Box
            key={router.pathname}
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </Box>
      <Header />
      <Footer />
    </>
  );
}

export default MyApp;
