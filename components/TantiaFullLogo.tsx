import { cn } from "@/lib/utils";

interface TantiaFullLogoProps {
  className?: string;
  height?: number;
  iconOnly?: boolean;
}

/**
 * Tantia full logo — hex icon + "Tantia" wordmark as inline SVG paths.
 * Font is baked as paths (Geist SemiBold) so it renders identically everywhere.
 */
export function TantiaFullLogo({ className, height = 32, iconOnly = false }: TantiaFullLogoProps) {
  if (iconOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tfl-fg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c8ff" />
            <stop offset="100%" stopColor="#00d4aa" />
          </linearGradient>
          <linearGradient id="tfl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <polygon points="60,8 106,32 106,78 60,102 14,78 14,32" fill="url(#tfl-bg)" stroke="url(#tfl-fg)" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="60,20 94,38 94,72 60,90 26,72 26,38" fill="none" stroke="url(#tfl-fg)" strokeWidth="0.8" opacity="0.3" strokeLinejoin="round" />
        <path d="M38 36h44M60 36v38" stroke="url(#tfl-fg)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="60" cy="8" r="3" fill="#00c8ff" />
        <circle cx="106" cy="32" r="2.5" fill="#00c8ff" opacity="0.6" />
        <circle cx="106" cy="78" r="2.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="60" cy="102" r="3" fill="#00d4aa" />
        <circle cx="14" cy="78" r="2.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="14" cy="32" r="2.5" fill="#00c8ff" opacity="0.6" />
      </svg>
    );
  }

  const aspectRatio = 320 / 80;
  const width = height * aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tfl-fg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c8ff" />
          <stop offset="100%" stopColor="#00d4aa" />
        </linearGradient>
        <linearGradient id="tfl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g transform="translate(8, 4) scale(0.6)">
        <polygon points="60,8 106,32 106,78 60,102 14,78 14,32" fill="url(#tfl-bg)" stroke="url(#tfl-fg)" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="60,20 94,38 94,72 60,90 26,72 26,38" fill="none" stroke="url(#tfl-fg)" strokeWidth="0.8" opacity="0.3" strokeLinejoin="round" />
        <path d="M38 36h44M60 36v38" stroke="url(#tfl-fg)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="60" cy="8" r="3" fill="#00c8ff" />
        <circle cx="106" cy="32" r="2.5" fill="#00c8ff" opacity="0.6" />
        <circle cx="106" cy="78" r="2.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="60" cy="102" r="3" fill="#00d4aa" />
        <circle cx="14" cy="78" r="2.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="14" cy="32" r="2.5" fill="#00c8ff" opacity="0.6" />
      </g>
      <g fill="currentColor" transform="translate(88, 0)">
        <path d="M0 20h28.5v7.5h-10v30h-8.5v-30h-10z" />
        <path d="M46.5 33.5c0-2.5-2-4-5-4-2.5 0-4.5 1-5.5 3l-6.5-3c2-4 6.5-6.5 12.5-6.5 7.5 0 13 4 13 10.5v24h-8v-3.5c-2 2.5-5 4.5-9.5 4.5-5.5 0-10-3.5-10-8.5 0-5.5 4.5-8.5 11-8.5h8.5v-8zm0 13.5v-1h-7c-3 0-5 1.5-5 4s2 4 5 4c4.5 0 7-2.5 7-7z" />
        <path d="M60 23.5h8.5v4.5c2-3 5.5-5.5 10.5-5.5 7 0 11.5 5 11.5 12.5v22.5h-8.5V36.5c0-4.5-2.5-7-6.5-7-4.5 0-7 3-7 8v20h-8.5z" />
        <path d="M101 13h8.5v10.5h7v7h-7V49c0 2.5 1 3.5 3.5 3.5h3.5v7h-5c-6 0-10-3-10-10V30.5h-5v-7h4.5z" />
        <path d="M122 23.5h8.5v34h-8.5zm0-13.5h8.5v8.5h-8.5z" />
        <path d="M152 33.5c0-2.5-2-4-5-4-2.5 0-4.5 1-5.5 3l-6.5-3c2-4 6.5-6.5 12.5-6.5 7.5 0 13 4 13 10.5v24h-8v-3.5c-2 2.5-5 4.5-9.5 4.5-5.5 0-10-3.5-10-8.5 0-5.5 4.5-8.5 11-8.5h8.5v-8zm0 13.5v-1h-7c-3 0-5 1.5-5 4s2 4 5 4c4.5 0 7-2.5 7-7z" />
      </g>
    </svg>
  );
}
