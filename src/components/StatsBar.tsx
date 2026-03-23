interface StatsBarProps {
  totalItems: number;
  totalQuantity: number;
  warehouseCount: number;
  materialCount: number;
}

export default function StatsBar({
  totalItems,
  totalQuantity,
  warehouseCount,
  materialCount,
}: StatsBarProps) {
  return (
    <div className="stats-bar animate-in">
      <div className="stat-card">
        <div className="stat-icon blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          </svg>
        </div>
        <div className="stat-info">
          <span className="stat-value">{totalItems.toLocaleString()}</span>
          <span className="stat-label">조회 건수</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon cyan" style={{ background: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
        <div className="stat-info">
          <span className="stat-value">{totalQuantity.toLocaleString()}</span>
          <span className="stat-label">총 재고량</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <div className="stat-info">
          <span className="stat-value">{warehouseCount}</span>
          <span className="stat-label">창고 수</span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon indigo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </div>
        <div className="stat-info">
          <span className="stat-value">{materialCount}</span>
          <span className="stat-label">자재 종류</span>
        </div>
      </div>
    </div>
  );
}
