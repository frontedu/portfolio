import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const siteUrl = "https://eddu.dev";

const Page = ({ title, description, children }) => {
  const { locale, asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const urlFor = (target) =>
    target === "en"
      ? `${siteUrl}/en${path === "/" ? "" : path}`
      : `${siteUrl}${path}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={urlFor(locale)}
        languageAlternates={[
          { hrefLang: "pt-BR", href: urlFor("pt-BR") },
          { hrefLang: "en", href: urlFor("en") },
          { hrefLang: "x-default", href: urlFor("en") },
        ]}
        openGraph={{
          url: urlFor(locale),
          locale: locale === "en" ? "en_US" : "pt_BR",
        }}
      />
      {children}
    </>
  );
};

export default Page;
