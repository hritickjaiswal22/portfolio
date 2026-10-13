"use client";

import { useCustomTheme } from "@/components/ThemeProvider";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { theme: visualTheme, setTheme: setVisualTheme } = useCustomTheme();
  const { theme: appearance, setTheme: setAppearance } = useTheme();

  // 1. Appearance: system | light | dark (driven by setAppearance)
  // 2. Theme: paper | high-contrast (driven by setVisualTheme)

  return (
    <div>
      <Button onClick={() => setAppearance("dark")}>Dark</Button>
      <Button onClick={() => setAppearance("light")}>Light</Button>
      <Button onClick={() => setVisualTheme("high-contrast")}>Contrast</Button>
      <Button onClick={() => setVisualTheme("paper")}>Paper</Button>
    </div>
  );
}
