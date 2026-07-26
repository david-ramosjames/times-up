export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://timesuplaw.com";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "5128773244";
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(512) 877-3244";

export const FIRM_ADDRESS = {
  street: "15602 Patrica St",
  street2: "Ste 200",
  city: "Austin",
  state: "TX",
  zip: "78728",
};

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTES = {
  en: {
    home: "/",
    sexualAssault: "/sexual-assault-lawyer",
    sexualAbuse: "/sexual-abuse-lawyer",
    rideshare: "/rideshare-sexual-assault-lawyer",
    hotelAssault: "/hotel-assault-negligent-security-lawyer",
    workplaceAssault: "/workplace-sexual-assault-lawyer",
    schoolAbuse: "/school-campus-sexual-abuse-lawyer",
    areas: "/areas-we-serve",
    houston: "/sexual-assault-lawyer-houston",
    dallas: "/sexual-assault-lawyer-dallas",
    austin: "/sexual-assault-lawyer-austin",
    sanAntonio: "/sexual-assault-lawyer-san-antonio",
    fortWorth: "/sexual-assault-lawyer-fort-worth",
    elPaso: "/sexual-assault-lawyer-el-paso",
    arlington: "/sexual-assault-lawyer-arlington",
    corpusChristi: "/sexual-assault-lawyer-corpus-christi",
    plano: "/sexual-assault-lawyer-plano",
    lubbock: "/sexual-assault-lawyer-lubbock",
    help: "/sexual-assault-help",
    helpDoIHaveACase: "/sexual-assault-help/do-i-have-a-case",
    helpCanISue: "/sexual-assault-help/can-i-sue-my-abuser",
    helpStatuteOfLimitations: "/sexual-assault-help/texas-statute-of-limitations",
    helpSueInstitution: "/sexual-assault-help/can-i-sue-an-institution",
    helpAnonymous: "/sexual-assault-help/can-i-stay-anonymous",
    helpCivilVsCriminal: "/sexual-assault-help/civil-vs-criminal-case",
    helpCaseWorth: "/sexual-assault-help/how-much-is-my-case-worth",
    helpCompensation: "/sexual-assault-help/what-compensation-can-i-recover",
    helpAverageSettlement: "/sexual-assault-help/average-sexual-assault-settlement",
    helpNeverReported: "/sexual-assault-help/what-if-i-never-reported",
    faq: "/faq",
    about: "/about",
    contact: "/contact",
    caseEstimate: "/case-review",
  },
  es: {
    home: "/es",
    sexualAssault: "/es/abogada-agresion-sexual",
    sexualAbuse: "/es/abogada-abuso-sexual",
    rideshare: "/es/abogada-agresion-sexual-uber-lyft",
    hotelAssault: "/es/abogada-agresion-sexual-hotel",
    workplaceAssault: "/es/abogada-agresion-sexual-trabajo",
    schoolAbuse: "/es/abogada-abuso-sexual-escuela",
    areas: "/es/areas-que-servimos",
    houston: "/es/abogada-agresion-sexual-houston",
    dallas: "/es/abogada-agresion-sexual-dallas",
    austin: "/es/abogada-agresion-sexual-austin",
    sanAntonio: "/es/abogada-agresion-sexual-san-antonio",
    fortWorth: "/es/abogada-agresion-sexual-fort-worth",
    elPaso: "/es/abogada-agresion-sexual-el-paso",
    arlington: "/es/abogada-agresion-sexual-arlington",
    corpusChristi: "/es/abogada-agresion-sexual-corpus-christi",
    plano: "/es/abogada-agresion-sexual-plano",
    lubbock: "/es/abogada-agresion-sexual-lubbock",
    help: "/es/ayuda-agresion-sexual",
    helpDoIHaveACase: "/es/ayuda-agresion-sexual/tengo-un-caso",
    helpCanISue: "/es/ayuda-agresion-sexual/puedo-demandar-al-agresor",
    helpStatuteOfLimitations: "/es/ayuda-agresion-sexual/plazo-para-demandar-en-texas",
    helpSueInstitution: "/es/ayuda-agresion-sexual/puedo-demandar-institucion",
    helpAnonymous: "/es/ayuda-agresion-sexual/puedo-permanecer-anonima",
    helpCivilVsCriminal: "/es/ayuda-agresion-sexual/caso-civil-vs-penal",
    helpCaseWorth: "/es/ayuda-agresion-sexual/cuanto-vale-mi-caso",
    helpCompensation: "/es/ayuda-agresion-sexual/que-compensacion-puedo-recibir",
    helpAverageSettlement: "/es/ayuda-agresion-sexual/acuerdo-promedio-agresion-sexual",
    helpNeverReported: "/es/ayuda-agresion-sexual/nunca-lo-denuncie",
    faq: "/es/preguntas-frecuentes",
    about: "/es/sobre-nosotras",
    contact: "/es/contacto",
    caseEstimate: "/es/revision-de-caso",
  },
} as const;

export const CITY_ROUTE_KEYS = [
  "houston", "dallas", "austin", "sanAntonio", "fortWorth",
  "elPaso", "arlington", "corpusChristi", "plano", "lubbock",
] as const;

export type CityRouteKey = (typeof CITY_ROUTE_KEYS)[number];

export const CITY_NAMES: Record<CityRouteKey, string> = {
  houston: "Houston",
  dallas: "Dallas",
  austin: "Austin",
  sanAntonio: "San Antonio",
  fortWorth: "Fort Worth",
  elPaso: "El Paso",
  arlington: "Arlington",
  corpusChristi: "Corpus Christi",
  plano: "Plano",
  lubbock: "Lubbock",
};

export const TEXAS_CITIES = [
  "Houston",
  "Dallas",
  "Austin",
  "San Antonio",
  "Fort Worth",
  "El Paso",
  "Arlington",
  "Corpus Christi",
  "Plano",
  "Lubbock",
] as const;
