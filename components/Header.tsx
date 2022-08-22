/** @jsx h */
import { h } from "preact";
import { tw } from "../utils/twind.ts";

export function Header() {
  return (
    <div class={tw("mx-auto md text-center")}>
      <p
        class={tw(
          "inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-loose dark:text-slate-200"
        )}
      >
        jinwood.github.io
      </p>
    </div>
  );
}
