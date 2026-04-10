"use client";
import { motion } from "framer-motion";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="mt-10  w-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


