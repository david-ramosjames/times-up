import { type Locale } from "./constants";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/es") ? "es" : "en";
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  if (targetLocale === "es") {
    if (currentPath === "/") return "/es";
    // Map EN paths to ES paths
    const pathMap: Record<string, string> = {
      "/sexual-assault-lawyer": "/es/abogada-agresion-sexual",
      "/sexual-abuse-lawyer": "/es/abogada-abuso-sexual",
      "/rideshare-sexual-assault-lawyer": "/es/abogada-agresion-sexual-uber-lyft",
      "/hotel-assault-negligent-security-lawyer": "/es/abogada-agresion-sexual-hotel",
      "/workplace-sexual-assault-lawyer": "/es/abogada-agresion-sexual-trabajo",
      "/school-campus-sexual-abuse-lawyer": "/es/abogada-abuso-sexual-escuela",
      "/areas-we-serve": "/es/areas-que-servimos",
      "/sexual-assault-lawyer-houston": "/es/abogada-agresion-sexual-houston",
      "/sexual-assault-lawyer-dallas": "/es/abogada-agresion-sexual-dallas",
      "/sexual-assault-lawyer-austin": "/es/abogada-agresion-sexual-austin",
      "/sexual-assault-lawyer-san-antonio": "/es/abogada-agresion-sexual-san-antonio",
      "/sexual-assault-lawyer-fort-worth": "/es/abogada-agresion-sexual-fort-worth",
      "/sexual-assault-lawyer-el-paso": "/es/abogada-agresion-sexual-el-paso",
      "/sexual-assault-lawyer-arlington": "/es/abogada-agresion-sexual-arlington",
      "/sexual-assault-lawyer-corpus-christi": "/es/abogada-agresion-sexual-corpus-christi",
      "/sexual-assault-lawyer-plano": "/es/abogada-agresion-sexual-plano",
      "/sexual-assault-lawyer-lubbock": "/es/abogada-agresion-sexual-lubbock",
      "/sexual-assault-help": "/es/ayuda-agresion-sexual",
      "/faq": "/es/preguntas-frecuentes",
      "/about": "/es/sobre-nosotras",
      "/contact": "/es/contacto",
      "/case-review": "/es/revision-de-caso",
    };
    return pathMap[currentPath] || `/es${currentPath}`;
  } else {
    if (currentPath === "/es") return "/";
    // Map ES paths to EN paths
    const pathMap: Record<string, string> = {
      "/es/abogada-agresion-sexual": "/sexual-assault-lawyer",
      "/es/abogada-abuso-sexual": "/sexual-abuse-lawyer",
      "/es/abogada-agresion-sexual-uber-lyft": "/rideshare-sexual-assault-lawyer",
      "/es/abogada-agresion-sexual-hotel": "/hotel-assault-negligent-security-lawyer",
      "/es/abogada-agresion-sexual-trabajo": "/workplace-sexual-assault-lawyer",
      "/es/abogada-abuso-sexual-escuela": "/school-campus-sexual-abuse-lawyer",
      "/es/areas-que-servimos": "/areas-we-serve",
      "/es/abogada-agresion-sexual-houston": "/sexual-assault-lawyer-houston",
      "/es/abogada-agresion-sexual-dallas": "/sexual-assault-lawyer-dallas",
      "/es/abogada-agresion-sexual-austin": "/sexual-assault-lawyer-austin",
      "/es/abogada-agresion-sexual-san-antonio": "/sexual-assault-lawyer-san-antonio",
      "/es/abogada-agresion-sexual-fort-worth": "/sexual-assault-lawyer-fort-worth",
      "/es/abogada-agresion-sexual-el-paso": "/sexual-assault-lawyer-el-paso",
      "/es/abogada-agresion-sexual-arlington": "/sexual-assault-lawyer-arlington",
      "/es/abogada-agresion-sexual-corpus-christi": "/sexual-assault-lawyer-corpus-christi",
      "/es/abogada-agresion-sexual-plano": "/sexual-assault-lawyer-plano",
      "/es/abogada-agresion-sexual-lubbock": "/sexual-assault-lawyer-lubbock",
      "/es/ayuda-agresion-sexual": "/sexual-assault-help",
      "/es/preguntas-frecuentes": "/faq",
      "/es/sobre-nosotras": "/about",
      "/es/contacto": "/contact",
      "/es/revision-de-caso": "/case-review",
    };
    return pathMap[currentPath] || currentPath.replace(/^\/es/, "");
  }
}
