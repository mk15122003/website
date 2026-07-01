"use client";

import dynamic from "next/dynamic";

export const GlossyObject = dynamic(
  () =>
    import("@/components/effects/glossy-object").then((m) => m.GlossyObject),
  { ssr: false }
);
