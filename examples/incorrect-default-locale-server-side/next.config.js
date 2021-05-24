module.exports = {
  env: "development",
  i18n: {
    localeDetection: false,
    locales: ["en", "ar"],
    defaultLocale: "en",
    domains: [
      {
        domain: "ae.example.com",
        defaultLocale: "en",
      },
      {
        domain: "sa.example.com",
        defaultLocale: "ar",
      },
      {
        domain: "sg.example.com",
        defaultLocale: "ar",
      },
    ],
  },
};
