import { PaginationProps } from '../../interfaces/intrefaces';
import { useRouter, useSearchParams } from 'next/navigation';
import './Pagination.scss';

export function Pagination({
  count,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(count / itemsPerPage);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePageChange(pageNumber: number) {
    onPageChange(pageNumber);
    const query = searchParams?.get('query') || localStorage.getItem('lastSearchQuery') || '';
    router.push(`?query=${query}&page=${pageNumber}`);
  }

  function renderPageNumbers() {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`pagination__item ${currentPage === i ? 'pagination__item--active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>,
      );
    }
    return pageNumbers;
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">{renderPageNumbers()}</ul>
    </div>
  );
}
