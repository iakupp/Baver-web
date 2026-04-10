import Image from "next/image";
import Link from "next/link";
import { ContactData } from "@/app/messages/sk.json";
import Form from "./ContactForm";
import logo from "@/app/assets/logo.svg";
import {Section} from "../shared/SectionAnimation"


import { IoMailOpenOutline } from "react-icons/io5";
import { BiMobileAlt } from "react-icons/bi";

const { heading, subheading, ownerEmail, ownerPhone } = {
...ContactData,
};

const Contact = () => {
  return (
    <Section>
    <section
    id="kontakt"
          className="
        w-full mx-auto scroll-mt-[80px] md:scroll-mt-[100px] lg:scroll-mt-[120px] xl:scroll-mt-[150px] flex flex-col xl:flex xl:items-center xl:justify-between bg-[var(--color-white)]
        py-[34px] xl:py-[64px]">
          
        <div className="flex flex-col items-center xl:grid cols-[auto_auto] gap-[16px] w-full max-w-[1248px] px-[16px] lg:px-[34px]">
        
        {/* TEXT */}
        <div className="md:col-span-2 xl:col-span-1 text-left mt-[16px] flex flex-col items-start gap-[16px] w-full">
          <h2
            className="
              text-[var(--text-dark)] uppercase font-medium
              text-[20px] md:text-[40px]
              mb-[16px]
            "
          >
            {heading}
          </h2>

          <p
            className="
              text-[var(--text-dark)]
              text-[15px] md:text-[16px] xl:text-[18px]
              xl:leading-[32px]
              mb-[16px] md:mb-[32px]
            "
          >
            {subheading}
        </p>
        </div>
    
        {/* Wrapper */}               
        <div className="md:flex items-start justify-between gap-[32px] w-full">
            {/* CONTACT INFO */}
            <div className="flex flex-col items-start gap-[24px] mt-[42px] md:mt-[10px] lg:w-[240px] mb-[16px]">
          {/* LOGO */}
            <div className="gap-[12px]">
                <Image
                src={logo}
                alt="Baver logo"
                className="w-[150px] lg:w-[80px] xl:w-[110px]"/>
            </div>

          {/* INFO */}
        <div className="space-y-[16px] mb-[54px]">
            <p className="flex items-center gap-[8px] hover:text-[var(--color-primary)] transition-colors group">
                
            <span className="text-primary">
                <BiMobileAlt className="w-[20px] h-[24px]" />
            </span>

            <Link
                href={`tel:${ownerPhone}`}
                className="text-[var(--color-gray)] text-[14px] xl:text-[16px] hover:underline"
            >
                {ownerPhone}
            </Link>
            </p>

            <p className="flex items-center gap-[8px] hover:text-[var(--color-primary)] transition-colors group">
              <span className="text-primary">
                <IoMailOpenOutline className="w-[20px] h-[20px]" />
              </span>

              <Link
                href={`mailto:${ownerEmail}`}
                className="text-[var(--color-gray)] text-[14px] xl:text-[16px] hover:underline"
              >
                {ownerEmail}
              </Link>
            </p>
          </div>

          {/* SOCIALS (later) */}

                      
            </div>
            {/* FORM */}
            <div className="md:col-span-2 xl:col-span-1 w-full md:w-[70%] lg:w-[70%] mb-[54px]">
          <Form />
            </div>
        </div>
    </div>
      </section>
      </Section>
);
};

export default Contact;