import { PaginationProps } from '../../interfaces/intrefaces';
import './Pagination.scss';

export function Pagination({
  count,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(count / itemsPerPage);

  function handlePageChange(pageNumber: number) {
    onPageChange(pageNumber);
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
