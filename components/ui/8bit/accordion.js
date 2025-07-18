"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion as ShadcnAccordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
} from "../accordion.js";
import "./styles/retro.css";

// Simple cn utility function
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AccordionItem({ className, children, ...props }) {
  return (
    <ShadcnAccordionItem
      className={cn(
        "border-dashed border-b-4 border-foreground dark:border-ring relative",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnAccordionItem>
  );
}

function AccordionTrigger({ className, children, font, ...props }) {
  return (
    <ShadcnAccordionTrigger
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    >
      {children}
    </ShadcnAccordionTrigger>
  );
}

function AccordionContent({ className, children, font, ...props }) {
  return (
    <div className="relative">
      <ShadcnAccordionContent
        className={cn(
          "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          font !== "normal" && "retro",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0 relative z-10 p-1">{children}</div>
      </ShadcnAccordionContent>

      <AccordionPrimitive.Content asChild forceMount />
    </div>
  );
}

const Accordion = ShadcnAccordion;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
