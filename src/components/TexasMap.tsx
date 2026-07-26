import Image from "next/image";
import type { Locale } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export default function TexasMap({ locale }: { locale: Locale }) {
  return (
    <div className="relative mx-auto aspect-[16/9] max-w-2xl overflow-hidden rounded-2xl shadow-lg">
      <Image
        src={IMAGES.texasSkyline}
        alt={
          locale === "en"
            ? "Austin, Texas skyline — we serve survivors across the state"
            : "Panorama de Austin, Texas — servimos a sobrevivientes en todo el estado"
        }
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 700px"
      />
    </div>
  );
}
