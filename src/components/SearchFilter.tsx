import { FilterState } from '../types.ts';

interface SearchFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onSearch: () => void;
  onReset: () => void;
  warehouses: string[];
  manufacturers: string[];
  categories: string[];
}

export default function SearchFilter({
  filters,
  onFilterChange,
  onSearch,
  onReset,
  warehouses,
  manufacturers,
  categories,
}: SearchFilterProps) {
  const handleChange = (field: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className="filter-card animate-in">
      <div className="filter-card-header">
        <div className="filter-card-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          조회 조건
        </div>
      </div>

      <div className="filter-grid">
        <div className="filter-group">
          <label className="filter-label">BOX번호</label>
          <input
            id="filter-box-number"
            className="filter-input"
            type="text"
            placeholder="BOX번호 입력"
            value={filters.boxNumber}
            onChange={(e) => handleChange('boxNumber', e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="filter-group">
          <label className="filter-label">구분</label>
          <select
            id="filter-category"
            className="filter-select"
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            <option value="">전체</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">창고</label>
          <select
            id="filter-warehouse"
            className="filter-select"
            value={filters.warehouse}
            onChange={(e) => handleChange('warehouse', e.target.value)}
          >
            <option value="">전체</option>
            {warehouses.map(wh => (
              <option key={wh} value={wh}>{wh}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">제조처</label>
          <select
            id="filter-manufacturer"
            className="filter-select"
            value={filters.manufacturer}
            onChange={(e) => handleChange('manufacturer', e.target.value)}
          >
            <option value="">전체</option>
            {manufacturers.map(mfr => (
              <option key={mfr} value={mfr}>{mfr}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Location</label>
          <input
            id="filter-location"
            className="filter-input"
            type="text"
            placeholder="Location 입력"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="filter-group">
          <label className="filter-label">자재명</label>
          <input
            id="filter-material-name"
            className="filter-input"
            type="text"
            placeholder="자재명 입력"
            value={filters.materialName}
            onChange={(e) => handleChange('materialName', e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="filter-actions">
        <button id="btn-reset" className="btn btn-ghost" onClick={onReset}>
          초기화
        </button>
        <button id="btn-search" className="btn btn-primary" onClick={onSearch}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          조회
        </button>
      </div>
    </div>
  );
}
