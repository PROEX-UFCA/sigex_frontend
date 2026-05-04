export function usePaginationRange(current: number, total: number, window: number = 10) {
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
