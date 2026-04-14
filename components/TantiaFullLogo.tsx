import { cn } from "@/lib/utils";

interface TantiaFullLogoProps {
  className?: string;
  height?: number;
  iconOnly?: boolean;
}

function TantiaIconMark({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 79.06 79.06"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tfl-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00c8ff" />
          <stop offset="100%" stopColor="#00d4aa" />
        </linearGradient>
      </defs>
      <path
        d="M19.76,19.76h19.76v19.76h0c-10.91,0-19.76-8.86-19.76-19.76h0Z"
        fill="url(#tfl-g)"
      />
      <path
        d="M39.53,39.53v19.76h-19.76V0C8.85,0,0,8.85,0,19.76v39.53c0,10.92,8.85,19.76,19.76,19.76h39.53v-19.76h0c0-10.92-8.85-19.76-19.76-19.76Z"
        fill="currentColor"
      />
      <polygon
        points="59.29 0 39.53 0 19.76 0 19.76 19.76 39.53 19.76 59.29 19.76 59.29 39.53 59.29 59.29 59.29 79.06 79.06 79.06 79.06 59.29 79.06 39.53 79.06 19.76 79.06 0 59.29 0"
        fill="url(#tfl-g)"
      />
    </svg>
  );
}

export function TantiaFullLogo({
  className,
  height = 32,
  iconOnly = false,
}: TantiaFullLogoProps) {
  if (iconOnly) {
    return <TantiaIconMark size={height} className={className} />;
  }

  const fontSize = height * 0.65;

  return (
    <span
      className={cn("inline-flex shrink-0 items-center gap-2.5", className)}
    >
      <TantiaIconMark size={height} />
      <span
        className="font-semibold tracking-wide text-current"
        style={{
          fontSize,
          fontFamily:
            "Montserrat, var(--font-montserrat), system-ui, sans-serif",
          letterSpacing: "0.5px",
        }}
      >
        Tantia
      </span>
    </span>
  );
}
