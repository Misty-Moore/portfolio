"use client";

import { useState } from "react";

const LOGO_SIZE = 25; // template: 25x25

type Props = { domain: string; company: string; slug?: string; className?: string };

export default function CompanyLogo({ domain, company, slug, className = "" }: Props) {
  const [error, setError] = useState(false);
  const src = `/logo/${slug}.svg`;

  return (
    <img
      src={src}
      alt={`${company} logo`}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className={`shrink-0 rounded-full object-contain image-brightness-hover ${className}`}
      onError={() => setError(true)}
    />
  );
}
