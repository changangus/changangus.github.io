import React from "react";
import {
  header,
  title,
  subtitle,
  downloadButton,
  sectionTitle,
  contentGroup,
  entry,
  entryHeader,
  entryTitle,
  entryDate,
  bulletList,
  bulletItem,
  skillsList,
  skillTag,
} from "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div>
      <div className={header}>
        <div>
          <h2 className={title}>Resume</h2>
          <span className={subtitle}>Full Stack Developer</span>
        </div>
        <a href="/Angus-Chang-Resume.pdf" download className={downloadButton}>
          Download Resume
        </a>
      </div>

      <div className={contentGroup}>
        <h3 className={sectionTitle}>Experience</h3>

        <div className={entry}>
          <div className={entryHeader}>
            <span className={entryTitle}>Software Engineer @ ButcherBox</span>
            <span className={entryDate}>Dec 2022 - Present</span>
          </div>
          <ul className={bulletList}>
            <li className={bulletItem}>
              Eliminated $28k in monthly fraud losses by architecting segment-based coupon eligibility system within our
              Laravel backend and Shopify integration
            </li>
            <li className={bulletItem}>
              Led migration of 20+ high-traffic authenticated pages (500K+ monthly users) from Gatsby monolith to
              Nx/Remix monorepo
            </li>
            <li className={bulletItem}>
              Built custom API interceptor tooling that accelerated development cycles and reduced QA bottlenecks
            </li>
            <li className={bulletItem}>
              Optimized data fetching architecture, reducing payload size by 70% through GraphQL query improvements
            </li>
            <li className={bulletItem}>
              Built and maintained parts of our site wide design system—a React/TypeScript component library using
              Vanilla Extract and Storybook
            </li>
          </ul>
        </div>

        <div className={entry}>
          <div className={entryHeader}>
            <span className={entryTitle}>Software Developer @ Sparkbox</span>
            <span className={entryDate}>June 2021 - Dec 2022</span>
          </div>
          <ul className={bulletList}>
            <li className={bulletItem}>
              Developed and maintained React/TypeScript e-commerce product pages for Gap Inc., serving millions of users
              across 4 international brands
            </li>
            <li className={bulletItem}>
              Created developer tooling including custom ESLint rules for CSS-in-JS validation and URL generators,
              reducing PR review cycles
            </li>
            <li className={bulletItem}>
              Built WCAG 2.1 AA compliant marketing pages that increased Sparkbox Apprenticeship applications by 50%
              year-over-year
            </li>
            <li className={bulletItem}>
              Mentored 3 apprentice developers through code reviews and facilitated bi-weekly engineering
              knowledge-sharing sessions
            </li>
          </ul>
        </div>
      </div>

      <div className={contentGroup}>
        <h3 className={sectionTitle}>Skills</h3>
        <div className={skillsList}>
          <span className={skillTag}>React</span>
          <span className={skillTag}>TypeScript</span>
          <span className={skillTag}>Node.js</span>
          <span className={skillTag}>Next.js</span>
          <span className={skillTag}>Remix</span>
          <span className={skillTag}>GraphQL</span>
          <span className={skillTag}>PostgreSQL</span>
          <span className={skillTag}>Laravel</span>
          <span className={skillTag}>AWS</span>
          <span className={skillTag}>WCAG 2.1 AA</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
