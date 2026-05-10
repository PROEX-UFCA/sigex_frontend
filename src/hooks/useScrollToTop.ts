import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Hook que rola a página suavemente ao topo sempre que o `pathname` da rota muda.
 *
 * Útil como efeito global no componente raiz (`App`) para garantir que
 * cada nova navegação comece no início da página.
 *
 * @example
 * // Em App.tsx:
 * function App() {
 *   useScrollToTop();
 *   return <Outlet />;
 * }
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
}