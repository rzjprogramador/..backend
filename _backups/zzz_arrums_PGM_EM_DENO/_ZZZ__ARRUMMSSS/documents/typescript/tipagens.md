# TIPAGENS TS

> unindo interfaces e exportando a unificada ao mesmo tempo:

- export interface UNIFICADA extends INTERFACE_B {}
-

---
# Type Utilits :: Utilitarios TS

> Omit >> Generico para omitir campos de rum tipo reusado
exemplo: ```Omit<ModelProduct, 'ruleFieldProduct' | 'records' | 'id' | 'idb'>```

> Pick voce pega somente os campos que desejar
exemplo: ```Pick<ModelProduct, 'nomeProduto' | 'precoBase'>```