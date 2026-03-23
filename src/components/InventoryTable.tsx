import { InventoryItem, SortField, SortDirection } from '../types.ts';

interface InventoryTableProps {
  data: InventoryItem[];
  sortField: SortField | null;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalCount: number;
  pageSize: number;
}

export default function InventoryTable({
  data,
  sortField,
  sortDirection,
  onSort,
  currentPage,
  totalPages,
  onPageChange,
  totalCount,
  pageSize,
}: InventoryTableProps) {
  const renderSortIndicator = (field: SortField) => {
    if (sortField !== field) return <span className="sort-indicator">↕</span>;
    return (
      <span className="sort-indicator">
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalCount);

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="table-card animate-in">
      <div className="table-card-header">
        <div className="table-card-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
          재고 목록
        </div>
        <span className="table-card-count">{totalCount}건</span>
      </div>

      {data.length === 0 ? (
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <div className="empty-state-title">조회 결과가 없습니다</div>
          <div className="empty-state-desc">필터 조건을 변경하여 다시 검색해주세요.</div>
        </div>
      ) : (
        <>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th
                    className={sortField === 'warehouseName' ? 'sorted' : ''}
                    onClick={() => onSort('warehouseName')}
                  >
                    창고명 / Location {renderSortIndicator('warehouseName')}
                  </th>
                  <th
                    className={sortField === 'materialName' ? 'sorted' : ''}
                    onClick={() => onSort('materialName')}
                  >
                    자재명 / 규격 {renderSortIndicator('materialName')}
                  </th>
                  <th
                    className={sortField === 'unit' ? 'sorted' : ''}
                    onClick={() => onSort('unit')}
                    style={{ textAlign: 'center' }}
                  >
                    단위 {renderSortIndicator('unit')}
                  </th>
                  <th
                    className={sortField === 'quantity' ? 'sorted' : ''}
                    onClick={() => onSort('quantity')}
                    style={{ textAlign: 'right' }}
                  >
                    재고량 {renderSortIndicator('quantity')}
                  </th>
                  <th
                    className={sortField === 'boxNumber' ? 'sorted' : ''}
                    onClick={() => onSort('boxNumber')}
                  >
                    BOX번호 / LOT번호 {renderSortIndicator('boxNumber')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cell-warehouse">
                        <span className="cell-warehouse-name">{item.warehouseName}</span>
                        <span className="cell-warehouse-loc">{item.location}</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell-material">
                        <span className="cell-material-name">{item.materialName}</span>
                        <span className="cell-material-spec">{item.specification}</span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`unit-badge ${item.unit.toLowerCase()}`}>
                        {item.unit}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }} className="cell-quantity">
                      {item.quantity.toLocaleString()}
                    </td>
                    <td>
                      <div className="cell-box">
                        <span className="cell-box-number">{item.boxNumber}</span>
                        <span className="cell-box-lot">{item.lotNumber}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                ‹
              </button>

              {getPageNumbers().map(page => (
                <button
                  key={page}
                  className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                ›
              </button>

              <span className="pagination-info">
                {startIndex}-{endIndex} / {totalCount}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
