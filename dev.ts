#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import { readAllMD } from "./utils/md.ts";

await readAllMD("./content", "./routes/blog");
await dev(import.meta.url, "./main.ts");
