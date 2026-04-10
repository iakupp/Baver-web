import Image from "next/image";
import heroBg from "@/app/assets/hero.jpg";
import {heroSection} from "../../messages/sk.json";
import Button from "../shared/Button";
import Link from "next/link";

const {text, description, CTA} = { ...heroSection };

const IntroSection = () => {
  return (
    <section
      id="domov"
      className="relative w-full h-[600px] sm:h-[650px] lg:h-[700px] overflow-hidden mt-[70px] min-h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="hero section background"
          fill
          priority
          className="object-cover object-left object-bottom scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full ">
        <div className="max-w-[1248px] mx-auto w-full text-[var(--color-white)] px-[16px] lg:px-[34px]">
          
          <div className="max-w-[700px]">
            
            <h1 className="
              uppercase font-medium tracking-[1px]
              text-[26px] sm:text-[32px] lg:text-[48px] 2xl:text-[56px]
              leading-[1.2] mb-4 text-[var(--color-white)]
            ">
              {text}
            </h1>

            <p className="
              text-[16px] sm:text-[18px] lg:text-[20px]
              leading-[1.7] text-[var(--text-white)] mb-8
            ">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#kontakt">
                <Button label={CTA} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;