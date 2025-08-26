// @NOTE: in case you are using Next.js
"use client";

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type AnimatedTabsProps = {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
};

export function Navbar({
  containerClassName,
  activeTabClassName,
  tabClassName,
}: AnimatedTabsProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  const tabs = [
    { path: "/", title: "home" },
    { path: "/aboutme", title: "sobre mim" },
    { path: "/projects", title: "projectos" },
    { path: "/talktome", title: "talk to me" },
  ];

  useEffect(() => {
    const savedIndex = localStorage.getItem("activeTabIndex");
    if (savedIndex !== null) {
      setActiveIdx(Number(savedIndex));
    }
    setMounted(true);
  }, []);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center justify-center",
        containerClassName
      )}
    >
      {tabs.map((tab, index) => (
        <Link
          key={tab.title}
          href={tab.path}
          onClick={() => {
            setActiveIdx(index);
            localStorage.setItem("activeTabIndex", index.toString());
          }}
          className={cn(
            "group relative z-[1] rounded-full px-4 py-2",
            { "z-0": activeIdx === index },
            tabClassName
          )}
        >
          {activeIdx === index && (
            <motion.div
              layoutId="clicked-button"
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute inset-0 rounded-full bg-neutral-900 dark:bg-neutral-800",
                activeTabClassName
              )}
            />
          )}

          <span
            className={cn(
              "relative text-sm block font-medium duration-200",
              activeIdx === index
                ? "text-white delay-100"
                : "text-neutral-900 dark:text-neutral-200"
            )}
          >
            {tab.title}
          </span>
        </Link>
      ))}
      {mounted && (
        <button
          aria-label="Alternar tema"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="ml-3 relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur transition-colors"
        >
          <Moon className="h-4 w-4 transition-opacity opacity-100 dark:opacity-0" />
          <Sun className="absolute h-4 w-4 transition-opacity opacity-0 dark:opacity-100" />
          <span className="sr-only">Alternar tema</span>
        </button>
      )}
    </div>
  );
}
