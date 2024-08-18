"use client";

import useLocalStorage from "@/lib/hooks/useLocalStorage";
import CommonBox from "./CommonBox";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const currentTheme = theme || "dark"; // Default to "dark" if theme is not set
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!mounted) {
    return <div></div>; // Or render a placeholder
  }

  return (
    <CommonBox fit hover button onClick={toggleTheme}>
      <div className="p-2 group">
        {theme === "light" ? (
          <MoonIcon
            key={"light"}
            width={20}
            height={20}
            className="dark:text-accent-light dark:group-hover:text-accent text-accent-secondary group-hover:text-accent-secondary-light"
          />
        ) : (
          <SunIcon
            key={"dark"}
            width={20}
            height={20}
            className="dark:text-accent-light dark:group-hover:text-accent text-accent-secondary group-hover:text-accent-secondary-light"
          />
        )}
      </div>
    </CommonBox>
  );
}

export default ThemeSelector;
