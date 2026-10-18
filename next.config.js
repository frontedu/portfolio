const localizedPaths = ["/", "/sobre", "/projetos/grao"];

const bots =
  "(.*)([Bb]ot|[Cc]rawl|[Ss]pider|[Ss]lurp|facebookexternalhit|[Pp]review)(.*)";

const toEnglish = [
  { has: [{ type: "cookie", key: "NEXT_LOCALE", value: "en" }] },
  {
    has: [{ type: "header", key: "x-vercel-ip-country" }],
    missing: [
      { type: "header", key: "x-vercel-ip-country", value: "BR" },
      { type: "cookie", key: "NEXT_LOCALE" },
      { type: "header", key: "user-agent", value: bots },
    ],
  },
];

module.exports = {
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    localeDetection: false,
  },
  async redirects() {
    return localizedPaths.flatMap((path) =>
      toEnglish.map((condition) => ({
        source: path,
        destination: path === "/" ? "/en" : `/en${path}`,
        permanent: false,
        locale: false,
        ...condition,
      })),
    );
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};
