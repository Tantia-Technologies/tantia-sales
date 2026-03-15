import { cn } from "@/lib/utils";

interface TantiaFullLogoProps {
  className?: string;
  height?: number;
  iconOnly?: boolean;
}

function ChevronHexIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tfl-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c8ff" />
          <stop offset="100%" stopColor="#00d4aa" />
        </linearGradient>
        <filter id="tfl-gl">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <polygon
        points="60,8 106,32 106,78 60,102 14,78 14,32"
        fill="none"
        stroke="url(#tfl-g)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.45"
        filter="url(#tfl-gl)"
      />
      <g filter="url(#tfl-gl)">
        <polyline
          points="37,28 60,40 83,28"
          stroke="#00c8ff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="60" y1="40" x2="60" y2="82" stroke="#00d4aa" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="60" cy="8" r="2.5" fill="#00c8ff" />
      <circle cx="60" cy="102" r="2.5" fill="#00d4aa" />
    </svg>
  );
}

export function TantiaFullLogo({ className, height = 32, iconOnly = false }: TantiaFullLogoProps) {
  if (iconOnly) {
    return <ChevronHexIcon size={height} className={className} />;
  }

  const fontSize = height * 0.65;

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-2.5", className)}>
      <ChevronHexIcon size={height} />
      <span
        className="font-semibold tracking-wide text-current"
        style={{ fontSize, fontFamily: "'Plus Jakarta Sans', var(--font-jakarta), var(--font-geist-sans), system-ui, sans-serif", letterSpacing: "0.5px" }}
      >
        Tantia
      </span>
    </span>
  );
}
