"use client";

import { useEffect, useState } from "react";

interface CopyButtonProps {
  text: string;
}

function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 1500); // Reverts back after 500ms
    }
    return () => clearTimeout(timer); // Cleanup timer if component unmounts or state changes early
  }, [copied]);

  return (
    <button
      onClick={handleCopy}
      className="border flex text-sm justify-center items-center w-16 h-8 border-border rounded-xs bg-[#0000008c] text-white cursor-pointer"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default CopyButton;
