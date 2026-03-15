export function MeshGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {/* Core — bright primary, anchored at center */}
      <div
        className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 259 / 60%) 0%, oklch(0.50 0.20 259 / 20%) 50%, transparent 75%)",
        }}
      />

      {/* Top-left — lighter periwinkle */}
      <div
        className="absolute -left-[5%] -top-[5%] h-[65vmin] w-[65vmin] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.18 268 / 50%) 0%, oklch(0.58 0.16 265 / 15%) 50%, transparent 75%)",
        }}
      />

      {/* Bottom-right — deeper indigo */}
      <div
        className="absolute -bottom-[5%] -right-[5%] h-[60vmin] w-[60vmin] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.42 0.22 252 / 55%) 0%, oklch(0.38 0.18 255 / 18%) 50%, transparent 75%)",
        }}
      />

      {/* Top-right — vibrant cobalt */}
      <div
        className="absolute -right-[2%] -top-[2%] h-[50vmin] w-[50vmin] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.50 0.24 248 / 45%) 0%, oklch(0.48 0.20 250 / 12%) 50%, transparent 75%)",
        }}
      />

      {/* Bottom-left — soft violet accent */}
      <div
        className="absolute -bottom-[8%] -left-[3%] h-[55vmin] w-[55vmin] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.58 0.17 272 / 45%) 0%, oklch(0.52 0.14 270 / 12%) 50%, transparent 75%)",
        }}
      />
    </div>
  );
}
