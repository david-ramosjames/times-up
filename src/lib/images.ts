/**
 * Central image URL registry.
 * Swap the host here and every reference across the site updates.
 *
 * Brand illustrations are local SVGs in /public. Team photos and award
 * badges are served from Cloudinary; replace the public IDs when new
 * assets are uploaded (enable "Invalidate" so the CDN purges).
 */

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.svg",
  chooseUs: "/choose-us.svg",
  texasSkyline: "/cities/austin.jpg",

  team: {
    lauraRamosJames: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/Laura-Ramos-James-2026-1095_mssgv0.jpg",
    lylianaZamora: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/lyliana-zamora_y4zdud.webp",
  },

  cities: {
    arlington: "/cities/arlington.jpg",
    austin: "/cities/austin.jpg",
    corpusChristi: "/cities/corpus-christi.jpg",
    dallas: "/cities/dallas.jpg",
    elPaso: "/cities/el-paso.jpg",
    fortWorth: "/cities/fort-worth.jpg",
    houston: "/cities/houston.jpg",
    lubbock: "/cities/lubbock.jpg",
    plano: "/cities/plano.jpg",
    sanAntonio: "/cities/san-antonio.jpg",
  },

  maps: {
    arlington: "/maps/arlington-map.png",
    austin: "/maps/austin-map.png",
    corpusChristi: "/maps/corpus-christi-map.png",
    dallas: "/maps/dallas-map.png",
    elPaso: "/maps/el-paso-map.png",
    fortWorth: "/maps/fort-worth-map.png",
    houston: "/maps/houston-map.png",
    lubbock: "/maps/lubbock-map.png",
    plano: "/maps/plano-map.png",
    sanAntonio: "/maps/san-antonio-map.png",
  },

  badges: {
    nationalTop100: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/NTL-Top-100-Brass-Badge_rig3ly.png",
    multiMillionDollar: "https://res.cloudinary.com/dmmxuoa3p/image/upload/q_auto/f_auto/multi-million-dollar-badge_nqzxn5.png",
    ramosJames: "/Ramos-James-Badge2_11zon.webp",
  },

  practice: {
    allCases: "/practice/all-cases.svg",
    sexualAbuse: "/practice/sexual-abuse.svg",
    rideshare: "/practice/rideshare.svg",
    hotel: "/practice/hotel.svg",
    workplace: "/practice/workplace.svg",
    school: "/practice/school.svg",
  },
} as const;
