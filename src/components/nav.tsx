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
                "absolute inset-0 rounded-full bg-gray-900",
                activeTabClassName
              )}
            />
          )}

          <span
            className={cn(
              "relative text-sm block font-medium duration-200",
              activeIdx === index ? "text-white delay-100" : "text-black"
            )}
          >
            {tab.title}
          </span>
        </Link>
      ))}
      {/* <div className="size-12 rounded-full flex items-center justify-center">
        {resolvedTheme === "dark" ? (
          <Sun className="w-5 h-5 cursor-pointer" onClick={() => setTheme("light")}/>
        ) : (
          <Moon className="w-5 h-5 cursor-pointer" onClick={() => setTheme("light")}/>
        )}
      </div> */}
    </div>
  );
}
