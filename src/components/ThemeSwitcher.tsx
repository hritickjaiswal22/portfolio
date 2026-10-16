"use client";

import { useTheme } from "next-themes";

import { useCustomTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useTextSize, type TextSize } from "@/components/text-size-provider";

const OPTIONS: { value: TextSize; label: string; size: string }[] = [
  { value: "sm", label: "A", size: "text-xs" },
  { value: "md", label: "A", size: "text-base" },
  { value: "lg", label: "A", size: "text-lg" },
];

export default function ThemeSwitcher() {
  const { theme: visualTheme, setTheme: setVisualTheme } = useCustomTheme();
  const { theme: appearance, setTheme: setAppearance } = useTheme();
  const { textSize, setTextSize } = useTextSize();

  // 1. Appearance: system | light | dark (driven by setAppearance)
  // 2. Theme: paper | high-contrast (driven by setVisualTheme)

  return (
    <div>
      <Button onClick={() => setAppearance("dark")}>Dark</Button>
      <Button onClick={() => setAppearance("light")}>Light</Button>
      <Button onClick={() => setVisualTheme("high-contrast")}>Contrast</Button>
      <Button onClick={() => setVisualTheme("paper")}>Paper</Button>

      <div className="flex items-center gap-3">
        <span className="text-xs font-medium tracking-wider text-foreground-muted">
          TEXT SIZE
        </span>

        <div
          role="radiogroup"
          aria-label="Text size"
          className="inline-flex overflow-hidden rounded-md border border-border"
        >
          {OPTIONS.map((opt, i) => {
            const selected = textSize === opt.value;
            return (
              <button
                key={opt.value}
                role="radio"
                aria-checked={selected}
                aria-label={`Text size ${opt.value}`}
                onClick={() => setTextSize(opt.value)}
                className={[
                  "flex h-8 w-9 cursor-pointer items-center justify-center font-semibold transition-colors",
                  opt.size,
                  i > 0 ? "border-l border-border" : "",
                  selected
                    ? "bg-accent text-accent-foreground"
                    : "bg-transparent text-foreground-muted hover:bg-accent/50 hover:text-foreground",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
