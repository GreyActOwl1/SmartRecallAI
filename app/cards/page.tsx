"use client";
import { title } from "@/components/primitives";
import React from "react";
import { Textarea } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Cards</h1>
      <Textarea
        label="Enter your topic"
        labelPlacement="outside"
        placeholder="Flashcards about learning and memorizations"
        defaultValue="Learning and memorizations"
        className="max-w-xs"
      />
    </div>
  );
}
