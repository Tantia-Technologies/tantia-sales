"use client";

import { m } from "framer-motion";

interface TantiaLogoProps {
  className?: string;
  size?: number;
}

const CX = 60;
const CY = 55;

const ORBITS = [
  { rx: 72, ry: 24, rotate: -30, duration: 6, color: "#00c8ff", delay: 0 },
  { rx: 72, ry: 24, rotate: 30, duration: 8, color: "#00d4aa", delay: 2 },
  { rx: 72, ry: 24, rotate: 90, duration: 7, color: "#00c8ff", delay: 1 },
] as const;

function ellipseToPath(cx: number, cy: number, rx: number, ry: number): string {
  return [
    `M${cx - rx},${cy}`,
    `A${rx},${ry} 0 1,1 ${cx + rx},${cy}`,
    `A${rx},${ry} 0 1,1 ${cx - rx},${cy}`,
    "Z",
  ].join(" ");
}

function OrbitParticle({ orbit, index, clip }: {
  orbit: (typeof ORBITS)[number];
  index: number;
  clip: string;
}) {
  const pathId = `nx-orbit-${index}`;
  return (
    <g clipPath={`url(#${clip})`}>
      <circle r="10" fill={orbit.color} opacity="0.35" filter="url(#nx-particle-glow)">
        <animateMotion
          dur={`${orbit.duration}s`}
          begin={`${orbit.delay}s`}
          repeatCount="indefinite"
          calcMode="linear"
          rotate="auto"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
      <circle r="3" fill={orbit.color} opacity="0.95">
        <animateMotion
          dur={`${orbit.duration}s`}
          begin={`${orbit.delay}s`}
          repeatCount="indefinite"
          calcMode="linear"
          rotate="auto"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </g>
  );
}

export function TantiaLogo({ className, size = 140 }: TantiaLogoProps) {
  return (
    <m.div
      className={className}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" as const, stiffness: 200, damping: 20, delay: 0.1 }}
    >
      <m.svg
        width={size}
        height={size}
        viewBox="-50 -50 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="nx-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c8ff" />
            <stop offset="100%" stopColor="#00d4aa" />
          </linearGradient>
          <linearGradient id="nx-grad-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.05" />
          </linearGradient>
          <filter id="nx-outer-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
          <filter id="nx-particle-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>

          {ORBITS.map((o, i) => (
            <path
              key={`orbit-path-${i}`}
              id={`nx-orbit-${i}`}
              d={ellipseToPath(CX, CY, o.rx, o.ry)}
              transform={`rotate(${o.rotate} ${CX} ${CY})`}
              fill="none"
            />
          ))}

          <clipPath id="nx-clip-behind">
            <rect x="-100" y="-100" width="320" height="320" />
            <polygon points="60,8 106,32 106,78 60,102 14,78 14,32" clipRule="evenodd" />
          </clipPath>

          <clipPath id="nx-clip-front">
            <polygon points="60,8 106,32 106,78 60,102 14,78 14,32" />
          </clipPath>
        </defs>

        {ORBITS.map((o, i) => (
          <ellipse
            key={`ring-${i}`}
            cx={CX}
            cy={CY}
            rx={o.rx}
            ry={o.ry}
            transform={`rotate(${o.rotate} ${CX} ${CY})`}
            fill="none"
            stroke={o.color}
            strokeWidth="0.7"
            opacity="0.25"
          />
        ))}

        {ORBITS.map((o, i) => (
          <OrbitParticle key={`behind-${i}`} orbit={o} index={i} clip="nx-clip-behind" />
        ))}

        <polygon
          points="60,4 110,30 110,78 60,102 10,80 10,30"
          fill="none"
          stroke="url(#nx-grad)"
          strokeWidth="2"
          opacity="0.2"
          filter="url(#nx-outer-glow)"
        />
        <polygon
          points="60,8 106,32 106,78 60,102 14,78 14,32"
          fill="url(#nx-grad-fill)"
          stroke="url(#nx-grad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <polygon
          points="60,20 94,38 94,72 60,90 26,72 26,38"
          fill="none"
          stroke="url(#nx-grad)"
          strokeWidth="0.8"
          opacity="0.3"
          strokeLinejoin="round"
        />
        <path
          d="M38 36h44M60 36v38"
          fill="none"
          stroke="url(#nx-grad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="8" r="3" fill="#00c8ff" />
        <circle cx="106" cy="32" r="2.5" fill="#00c8ff" opacity="0.6" />
        <circle cx="106" cy="78" r="2.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="60" cy="102" r="3" fill="#00d4aa" />
        <circle cx="14" cy="78" r="2.5" fill="#00d4aa" opacity="0.6" />
        <circle cx="14" cy="32" r="2.5" fill="#00c8ff" opacity="0.6" />

        {ORBITS.map((o, i) => (
          <OrbitParticle key={`front-${i}`} orbit={o} index={i} clip="nx-clip-front" />
        ))}
      </m.svg>
    </m.div>
  );
}
