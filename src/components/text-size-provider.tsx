"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type TextSize = "sm" | "md" | "lg";

const STORAGE_KEY = "text-size";
const DEFAULT_SIZE: TextSize = "md";

interface TextSizeContextValue {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextValue | undefined>(
  undefined,
);

export function TextSizeProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSizeState] = useState<TextSize>(DEFAULT_SIZE);

  // Sync state with whatever the pre-hydration script already applied
  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-text-size");
    if (attr === "sm" || attr === "md" || attr === "lg") {
      setTextSizeState(attr);
    }
  }, []);

  // Apply + persist
  useEffect(() => {
    document.documentElement.setAttribute("data-text-size", textSize);
    try {
      window.localStorage.setItem(STORAGE_KEY, textSize);
    } catch {
      /* ignore private-mode failures */
    }
  }, [textSize]);

  const setTextSize = useCallback((size: TextSize) => {
    setTextSizeState(size);
  }, []);

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const ctx = useContext(TextSizeContext);
  if (!ctx) throw new Error("useTextSize must be used inside TextSizeProvider");
  return ctx;
}
