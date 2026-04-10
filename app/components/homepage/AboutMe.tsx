import Button from "../shared/Button";
import { About } from "@/app/messages/sk.json";
import Link from "next/link";
import {Section} from "../shared/SectionAnimation"

const { title, description, CTA } = {...About};

const AboutMe = () => {
  return (
    <Section>
    <section
      id="o_nas"
      className="
    w-full mx-auto py-[100px] scroll-mt-[80px] md:scroll-mt-[100px] lg:scroll-mt-[120px] xl:scroll-mt-[150px] flex flex-col xl:flex xl:items-center xl:justify-between px-[16px] lg:px-[34px] xl:px-[54px]"
    >
      <div className="lg:text-left p-[34px] bg-[var(--color-primary)] text-white rounded-2xl flex flex-col justify-center max-w-[1180px] mx-auto">
        <h2
          className="
            uppercase font-medium
            text-[20px] md:text-[30px] lg:text-[40px]
            mb-[16px] lg:mb-[32px]
          "
        >
          {title}
        </h2>

        <p
          className="
            text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px]
            leading-[1.55em] xl:leading-[1.5em]
            mb-[16px] lg:mb-[32px]
          "
        >
          {description}
        </p>

        <div className="md:w-fit flex justify-start">
          <Link href="#sluzby">
            <Button label={CTA} />
          </Link>
        </div>
      </div>
      </section>
      </Section>
  );
};

export default AboutMe;