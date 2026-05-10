/**
 * Rola a janela do navegador suavemente até o topo da página.
 *
 * Função utilitária imperativa. Prefira o hook {@link useScrollToTop}
 * quando estiver dentro de um componente React. Use esta função em
 * handlers de eventos fora do ciclo de vida do React (ex.: `onClick` em `<a>`).
 *
 * @example
 * <a onClick={scrollToTop}>Voltar ao topo</a>
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
