import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "cn";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

import { SERIES } from "@/lib/series";

interface SeriesAccordionProps {
  selectedSeriesId: string;
  activeSlug: string;
}

function SeriesAccordion({
  selectedSeriesId,
  activeSlug,
}: SeriesAccordionProps) {
  return (
    <Accordion value={selectedSeriesId as any}>
      {SERIES.map((series) => (
        <AccordionItem
          className={"border-b-0!"}
          key={series.id}
          value={series.id}
        >
          <Link href={`${series.artciles[0].slug}`}>
            <AccordionTrigger
              className={cn(
                "text-secondary-foreground font-medium px-2 py-1 text-sm rounded-xs transition-colors cursor-pointer hover:no-underline flex justify-start gap-1 items-center leading-tight",
                "[&_[data-slot=accordion-trigger-icon]]:hidden",
                series.id === selectedSeriesId
                  ? "text-foreground"
                  : "hover:bg-accent",
              )}
            >
              {series.id === selectedSeriesId ? (
                <ChevronDown size={12} />
              ) : (
                <ChevronRight size={12} />
              )}

              {series.series}
            </AccordionTrigger>
          </Link>
          <AccordionContent className={"pb-0 ml-4"}>
            {series.artciles.map((article) => (
              <Link
                href={`${article.slug}`}
                key={article.id}
                className={cn(
                  "text-muted-foreground font-medium px-2 py-2 text-xs rounded-xs leading-3.5 transition-colors hover:bg-accent cursor-pointer flex justify-start gap-1.5 items-center no-underline! mb-px",
                  activeSlug === article.slug
                    ? "bg-accent text-foreground"
                    : "",
                )}
              >
                {article.shortName}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SeriesAccordion;
