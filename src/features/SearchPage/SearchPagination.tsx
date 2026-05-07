import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getPaginationRange } from "@/utils/getPaginationRange";

interface SearchPaginationProps {
  current_page: number;
  last_page: number;
  onPageChange: (page: number) => void;
}

export default function SearchPagination({
  current_page,
  last_page,
  onPageChange,
}: SearchPaginationProps) {
  const pages = getPaginationRange(current_page, last_page);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (current_page > 1) onPageChange(current_page - 1);
            }}
            aria-disabled={current_page === 1}
            className={
              current_page === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
        {pages.map((page, index) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis></PaginationEllipsis>
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === current_page}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (current_page < last_page) onPageChange(current_page + 1);
            }}
            aria-disabled={current_page === last_page}
            className={
              current_page === last_page ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
