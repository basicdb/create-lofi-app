import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/main.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  shims: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
}) 