"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Section} from "../shared/SectionAnimation"

import galleryData from "../../data/gallery";
import {Reviews} from "@/app/messages/sk.json";

import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

const { heading } = { ...Reviews };

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev! + 1 >= galleryData.length ? 0 : prev! + 1
    );
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev! - 1 < 0 ? galleryData.length - 1 : prev! - 1
    );
  };

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <Section>
    <section
      id="referencie"
      className="
       max-w-[1248px] min-h-screen mx-auto px-[16px] lg:px-[34px]
        w-full
        pb-[32px] md:pb-[44px] lg:pb-[84px]
        scroll-mt-[70px] md:scroll-mt-[90px] lg:scroll-mt-[110px]
      "
    >
      {/* HEADING */}
      <h2
        className="
          text-[20px] md:text-[30px] lg:text-[40px]
          text-[var(--text-dark)]
          uppercase font-medium
          my-[32px] md:my-[32px] lg:mt-[64px] lg:mb-[32px]
        "
      >
        {heading}
      </h2>

      {/* GRID */}
      <div
        className="
          grid gap-[12px]
          grid-cols-2 md:grid-cols-3
        "
      >
        {galleryData.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="
              bg-white p-[5px]
              flex justify-center items-center
              cursor-pointer
              hover:bg-[var(--color-primary)] transition-colors rounded-2xl
            "
          >
            <Image
              src={image.src}
              alt="gallery image"
              width={400}
              height={300}
              className="object-cover w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-[var(--gallery-overlay)]
          "
          onClick={closeLightbox}
        >
          {/* CLOSE */}
          <IoClose
            className="
              absolute top-5 right-5
              text-white text-[32px]
              cursor-pointer
            "
            onClick={closeLightbox}
          />

          {/* LEFT */}
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <IoChevronBack />
          </button>

          {/* IMAGE */}
          <Image
            src={galleryData[currentIndex].src}
            alt="gallery image"
            width={800}
            height={800}
            className="
              max-w-[90%] max-h-[90%]
              object-contain
              animate-[zoomIn_0.5s_ease]
            "
            onClick={(e) => e.stopPropagation()}
          />

          {/* RIGHT */}
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <IoChevronForward />
          </button>
        </div>
      )}
      </section>
      </Section>
  );
};

export default Gallery;