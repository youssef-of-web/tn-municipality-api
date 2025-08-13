import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    // Return default locale instead of throwing notFound
    locale = "en";
  }

  return {
    locale: locale as string,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
