/**
 * Breakpoints de largura de tela em pixels, equivalentes aos do Tailwind CSS.
 *
 * Use em conjunto com {@link useScreenSize} para lógica responsiva em JS/TSX
 * quando classes utilitárias não forem suficientes.
 *
 * @example
 * const { width } = useScreenSize();
 * if (width < BREAKPOINTS.md) { ... }
 */
export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/** Tipo literal das chaves de {@link BREAKPOINTS}. */
export type Breakpoint = keyof typeof BREAKPOINTS;