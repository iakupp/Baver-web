"use client";
import footerData from "@/app/messages/sk.json";
import Link from "next/link";

const { ...FooterData } = footerData.Footer;

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-white">
      <div
        className="
          max-w-[1248px] mx-auto
          flex flex-col md:flex-row
          items-center justify-start 

          py-[12px] md:py-[30px]
          px-[16px] lg:px-[34px]
        "
      >
        {/* LEFT */}
        <div
          className="
            flex flex-wrap items-center justify-center gap-[8px]
            text-[15px]
            my-[12px] md:my-0
          "
        >
          {/* <p>IČO: {footerData.Footer.ico}</p> */}

          {/* <span className="mx-[5px]">|</span> */}

          <p>{FooterData.rights}</p>
        </div>

        {/* RIGHT */}
        {/* <div className="">
          Vytvořil{" "}
          <Link
            target="_blank"
            href="https://www.impresse.com/"
            className="hover:underline"
          >
            impresse
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;