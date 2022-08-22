import { walk } from "https://deno.land/std@0.152.0/fs/mod.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { encode } from "https://deno.land/std@0.152.0/encoding/hex.ts";
import { Search } from "./search.ts";

export async function readAllMD(source: string, target: string) {
  for await (const file of walk(source)) {
    if (file.isFile) {
      const markdown = await Deno.readTextFile(file.path);
      const markup = Marked.parse(markdown);

      await saveMarkdownFile(markup.content, file.name, target);
    }
  }
}

async function saveMarkdownFile(content: string, name: string, target: string) {
  let fileNameParts = name.split(".");
  fileNameParts.pop();

  const fileUrl = "/blog/" + fileNameParts.join(".");
  const search = Search.getInstance();
  search.indexElement(content, fileUrl);

  fileNameParts.push();

  const destination = target + "/" + fileNameParts.join(".");

  const encoder = new TextEncoder();
  let targetHash = "";

  content = pageTemplate(content);
  const sourceHash = encode(
    new Uint8Array(await crypto.subtle.digest("sha-1", encoder.encode(content)))
  ).toString();

  try {
    const targetFile = await Deno.readTextFile(destination);
    targetHash = encode(
      new Uint8Array(
        await crypto.subtle.digest("sha-1", encoder.encode(targetFile))
      )
    ).toString();
  } catch (e) {
    console.log("target file doesnt exist yet");
  }

  if (targetHash != sourceHash) {
    await Deno.writeTextFile(destination, content);
  }
}

function pageTemplate(html: string) {
  return `/** @jsx h */
	import { h } from "preact";
	import SearchBar from "../../islands/SearchBar.tsx"
	
	export default function Page() {
		return (
			<div style="padding: 10px; width: 90%; margin: 0 auto;">
					<SearchBar ></SearchBar>
					${html}
			</div>
		);
	}
`;
}
