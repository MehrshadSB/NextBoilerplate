export const fallbackLanguage = {en:"en", fa:"fa"} as const;
export const languages = [fallbackLanguage.en as string, fallbackLanguage.fa as string] as const;
export const defaultNamespace = "common";
export const cookieName = "i18next";

export function getOptions(language?: string, namespace = defaultNamespace) {
  return {
    debug: process.env.NODE_ENV === "development",
    supportedLngs: languages,
    fallbackLng: fallbackLanguage.fa,
    lng: language, // undefined is OK!
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns: namespace,
  };
}
