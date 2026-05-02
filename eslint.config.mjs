// eslint-config-next 16+ ships flat config arrays from each subpath export
// (core-web-vitals, typescript). Spreading them directly avoids the
// circular-structure crash that FlatCompat triggers in eslint 9.x.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      ".tantia/**",
      "dist/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
