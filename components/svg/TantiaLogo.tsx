"use client";

import { m } from "framer-motion";

interface TantiaLogoProps {
  className?: string;
  size?: number;
}

const CX = 60;
const CY = 55;
const ICON_TX = 20.47;
const ICON_TY = 15.47;

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

function OrbitParticle({ orbit, index }: {
  orbit: (typeof ORBITS)[number];
  index: number;
}) {
  const pathId = `nx-orbit-${index}`;
  return (
    <g>
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

function IconMark({ glow }: { glow?: boolean }) {
  return (
    <g
      transform={`translate(${ICON_TX}, ${ICON_TY})`}
      filter={glow ? "url(#nx-outer-glow)" : undefined}
      opacity={glow ? 0.25 : 1}
    >
      <path
        d="M19.76,19.76h19.76v19.76h0c-10.91,0-19.76-8.86-19.76-19.76h0Z"
        fill="url(#nx-grad)"
      />
      <path
        d="M39.53,39.53v19.76h-19.76V0C8.85,0,0,8.85,0,19.76v39.53c0,10.92,8.85,19.76,19.76,19.76h39.53v-19.76h0c0-10.92-8.85-19.76-19.76-19.76Z"
        fill="url(#nx-grad-fill)"
        stroke="url(#nx-grad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon
        points="59.29 0 39.53 0 19.76 0 19.76 19.76 39.53 19.76 59.29 19.76 59.29 39.53 59.29 59.29 59.29 79.06 79.06 79.06 79.06 59.29 79.06 39.53 79.06 19.76 79.06 0 59.29 0"
        fill="url(#nx-grad)"
      />
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
          <OrbitParticle key={`particle-${i}`} orbit={o} index={i} />
        ))}

        <IconMark glow />
        <IconMark />
      </m.svg>
    </m.div>
  );
}
