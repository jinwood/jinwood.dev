/** @jsx h */
import { h } from "preact";
import { useRef, useState } from "preact/hooks";
import { SearchElement } from "../utils/search.ts";

export default function SearchBar() {
  const inputField = useRef(null);
  const [results, setResults] = useState<SearchElement[]>([]);

  async function search() {
    if (inputField.current) {
      const res = await fetch(
        "/api/search?" +
          new URLSearchParams({
            q: inputField.current.value,
          })
      );
      const json = await res.json();
      console.log("json", json);
      setResults(json);
    }
  }

  return (
    <div style="width:90%; border: 1px solid black;">
      <input
        style="width:100%"
        value=""
        ref={inputField}
        placeholder="Enter your search query..."
        onChange={search}
      />
      <ul className="results">
        {results.map((r) => {
          return (
            <li style="padding: 10px;">
              <a href={r.path} style="font-style: underline;">
                {r.path}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
