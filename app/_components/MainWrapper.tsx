"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SectionType } from "../_utils/types";
import Hero from "./Hero";
import NavigationBar from "./NavigationBar";
import VantaClouds from "./VantaClouds";
import SectionWrapper from "./SectionWrapper";

function MainWrapper() {
  const [showHero, setShowHero] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionType>("home");

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <VantaClouds />
      <AnimatePresence mode="wait">
        {showHero && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.div>
        )}

        {!showHero && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            exit={{ opacity: 0, y: 0 }}
          >
            <SectionWrapper>
              <p className="text-5xl">{activeSection}</p>
              <NavigationBar
                active={activeSection}
                setActive={setActiveSection}
              />
            </SectionWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainWrapper;
