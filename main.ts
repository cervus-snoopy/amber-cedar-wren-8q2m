// news-image-20261121 round 3: the entry is the PNG beside this file; the program copies it to the output dir.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(join(here, 'entry.png'), join(out, 'entry.png'));
