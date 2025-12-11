import React, { type ReactNode } from "react";
import { section } from "./Section.css";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  return (
    <section id={id} className={`${section} ${className || ""}`.trim()}>
      {children}
    </section>
  );
};

export default Section;