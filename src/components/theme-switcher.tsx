"use client";

import { SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { useCustomTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useTextSize, type TextSize } from "@/components/text-size-provider";

const OPTIONS: { value: TextSize; label: string; size: string }[] = [
  { value: "sm", label: "A", size: "text-xs" },
  { value: "md", label: "A", size: "text-base" },
  { value: "lg", label: "A", size: "text-lg" },
];

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitcher() {
  const { theme: visualTheme, setTheme: setVisualTheme } = useCustomTheme();
  const { theme: appearance, setTheme: setAppearance } = useTheme();
  const { textSize, setTextSize } = useTextSize();

  // 1. Appearance: system | light | dark (driven by setAppearance)
  // 2. Theme: paper | high-contrast (driven by setVisualTheme)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" className={"w-9 h-9 cursor-pointer"}>
            <SunMedium
              style={{
                width: "18px",
                height: "18px",
              }}
            />
          </Button>
        }
      />
      <DropdownMenuContent className="w-50 p-3 rounded-sm">
        <DropdownMenuGroup>
          <DropdownMenuLabel
            className={"text-xs mb-1.5 p-0 font-semibold uppercase"}
          >
            Appearance
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={appearance}
            onValueChange={setAppearance}
          >
            <DropdownMenuRadioItem value="system">Auto</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuGroup className={"mt-3"}>
          <DropdownMenuLabel className={"text-xs mb-1.5 p-0 font-semibold"}>
            Theme
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={visualTheme}
            onValueChange={setVisualTheme}
          >
            <DropdownMenuRadioItem value="paper">Paper</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="high-contrast">
              High Contrast
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuGroup className={"mt-3"}>
          <DropdownMenuLabel className={"text-xs mb-1.5 p-0 font-semibold"}>
            TEXT SIZE
          </DropdownMenuLabel>

          <div className="flex items-center gap-3">
            <div
              role="radiogroup"
              aria-label="Text size"
              className="inline-flex overflow-hidden rounded-sm border border-border w-full"
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
                      "flex flex-1 h-8 w-9 cursor-pointer items-center justify-center font-semibold transition-colors",
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
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
