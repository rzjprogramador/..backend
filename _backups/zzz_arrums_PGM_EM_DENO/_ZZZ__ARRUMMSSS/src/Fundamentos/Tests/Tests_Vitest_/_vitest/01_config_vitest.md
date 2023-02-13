# FILTRAGEM DE TEST
doc: https://vitest.dev/guide/filtering.html
usabilidade: no arquivo de test criar sufixo.test este sufixo criado será usado no script para rodar somente estes tests deste sufixo ex: arquivo body_parser.integration + script: test:integration + rodar no console: npm run test:integration

---

# FAZER VITEST RECONHECER CAMINHOS MAPEADOS
```yarn add -D vite-tsconfig-paths```

> inserir no vite.config.ts no objeto plugins a funcao tsconfigPaths() ex:

```
import tsconfigPaths from "vite-tsconfig-paths"

plugins: [tsconfigPaths()],
```

---
