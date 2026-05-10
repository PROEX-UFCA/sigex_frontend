/**
 * Calcula o intervalo de páginas a ser exibido no componente de paginação.
 *
 * Sempre inclui a primeira e a última página. Páginas fora da janela visível
 * são substituídas por `"..."` (reticências). Quando o total de páginas
 * cabe dentro da janela + 2 extremos, retorna todas as páginas sem reticências.
 *
 * @param current - Página atual (1-indexada).
 * @param total   - Total de páginas disponíveis.
 * @param window  - Tamanho da janela de páginas exibidas ao redor da atual.
 *                  Padrão: `10`.
 * @returns Array com números de página e `"..."` nos intervalos ocultados.
 *
 * @example
 * getPaginationRange(5, 20)
 * // → [1, "...", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "...", 20]
 *
 * getPaginationRange(1, 5)
 * // → [1, 2, 3, 4, 5]
 */
export function getPaginationRange(current: number, total: number, window: number = 10) {
  const pages: (number | "...")[] = [];

  if (total <= window + 2) {
    return Array.from({length: total}, (_, index) => index + 1);
  }

  const half = Math.floor(window / 2);
  let start = Math.max(2, current - half);
  let end = Math.min(total - 1, current + half);

  if (current - half < 2) {
    end = Math.min(total - 1, window);
  }
  if (current + half > total - 1) {
    start = Math.max(2, total - window);
  }

  pages.push(1);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < total - 1) pages.push("...");

  pages.push(total);

  return pages;
}
