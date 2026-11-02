"use client";

import { SunMedium } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

import { Button } from "@/components/ui/button";
const ThemeMenu = dynamic(
  () => import("@/components/theme-menu").then((m) => m.ThemeMenu),
  {
    ssr: false,
    loading: () => (
      <Button variant="ghost" className={"w-9 h-9 cursor-pointer"}>
        <SunMedium
          style={{
            width: "18px",
            height: "18px",
          }}
        />
      </Button>
    ),
  },
);

export default function ThemeSwitcher() {
  const [load, setLoad] = useState(false);

  const prefetch = () => setLoad(true);

  return (
    <div onPointerEnter={prefetch}>
      {load ? (
        <ThemeMenu />
      ) : (
        <Button variant="ghost" className={"w-9 h-9 cursor-pointer"}>
          <SunMedium
            style={{
              width: "18px",
              height: "18px",
            }}
          />
        </Button>
      )}
    </div>
  );
}
