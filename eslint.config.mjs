import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".claude/**", ".taste-skill/**", ".impeccable/**", "assets-src/**",
    // Figma's shader runtime and shader modules, vendored verbatim (see components/homepage/CrtBackground.tsx)
    "lib/shader-runtime/**", "lib/custom-effects/**"]),
]);
