import { usePathname } from "next/navigation";
import { en } from "../_locales/en";
import { fa } from "../_locales/fa";

function Hero() {
  const pathname = usePathname();

  const t = pathname.includes("/en") ? en : fa;

  return (
    <div className="z-10 flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-xl text-shadow-lg">
          {t.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-white/80 drop-shadow-xl text-shadow-lg">
          {t.heroSubTitle}
        </p>
      </div>
    </div>
  );
}

export default Hero;
