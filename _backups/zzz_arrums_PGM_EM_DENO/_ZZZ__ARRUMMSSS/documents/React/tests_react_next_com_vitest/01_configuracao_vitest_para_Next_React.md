# TEST REACT NEXT COM VITEST

Adicionar vite ao proejto ja existente react next:

[site vite - escolher : ](https://vitest.dev/guide/)

[doc: escolhendo: react-testing-lib no site vite ](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts)

> instalacoes:
> `yarn add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom`

Crie um arquivo de configuração de convite: vite.config.ts

```
// vite.config.ts
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"]
  },
})
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
})
```
