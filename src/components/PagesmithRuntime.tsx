// src/components/PagesmithRuntime.tsx
"use client";

import { useEffect } from "react";

export function PagesmithRuntime() {
  useEffect(() => {
    import("@pagesmith/site/runtime/content");
  }, []);

  return null;
}
