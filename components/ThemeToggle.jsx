// This component needs to be a Client Component because it uses hooks and handles user interaction.
"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  // Used the custom useTheme hook to access the current theme and the toggle function.
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label={`Toggle to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
