---
to: packages/<%= h.capitalize(name) %>/src/components/index.ts
---
export { default as <%= h.capitalize(name) %> } from './<%= h.capitalize(name) %>';
