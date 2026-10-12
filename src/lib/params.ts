// Reads initial selections from the URL query string (e.g. links from a career
// page). The URL is only used to pre-fill choices; nothing is stored.

import type { Focus, SemesterNumber } from "./types.ts";
import { isFocus, isSemesterNumber } from "./roadmap.ts";

export interface InitialChoices {
  start: SemesterNumber;
  focus: Focus;
  primary: string;
  secondary: string;
}

interface ParamReader {
  get(name: string): string | null;
}

export function readInitialChoices(params: ParamReader, validSlugs: string[]): InitialChoices {
  const start = Number(params.get("start"));
  const focus = params.get("focus");
  const primary = params.get("primary") ?? "";
  const secondary = params.get("secondary") ?? "";
  const validPrimary = validSlugs.includes(primary) ? primary : validSlugs[0];
  return {
    start: isSemesterNumber(start) ? start : 1,
    focus: isFocus(focus) ? focus : "balanced",
    primary: validPrimary,
    secondary: validSlugs.includes(secondary) && secondary !== validPrimary ? secondary : "",
  };
}

export function choicesToQuery(c: InitialChoices): string {
  const q = new URLSearchParams({ start: String(c.start), focus: c.focus, primary: c.primary });
  if (c.secondary) q.set("secondary", c.secondary);
  return q.toString();
}
