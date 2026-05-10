import { useState, useEffect } from "react";

/**
 * Hook que rastreia as dimensões atuais da janela do navegador.
 *
 * Adiciona um listener no evento `resize` da `window` e atualiza o estado
 * sempre que o tamanho muda. O listener é removido automaticamente quando
 * o componente é desmontado.
 *
 * @returns Um objeto com `width` e `height` da janela em pixels.
 *
 * @example
 * const { width, height } = useScreenSize();
 * if (width < 768) { ... }
 */
export function useScreenSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
