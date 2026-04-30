import { BREAKPOINTS, type Breakpoint } from "@/lib/breakpoints";

const BREAKPOINT_ENTRIES = Object.entries(BREAKPOINTS) as [Breakpoint, number][];

export function getActiveBreakpoint(width: number): Breakpoint | null {
  const entries = BREAKPOINT_ENTRIES;

  for (let i = entries.length - 1; i >= 0; i--) {
    const [breakpoint, minWidth] = entries[i];
    if (width >= minWidth) return breakpoint;
  }

  return null;
}