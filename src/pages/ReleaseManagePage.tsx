import PageShell from '../components/PageShell.tsx';

export default function ReleaseManagePage() {
  return (
    <PageShell title="자재출고관리" subtitle="Release Management">
      <div className="filter-card animate-in">
        <div className="filter-card-header">
          <div className="filter-card-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
            출고 요청 정보
          </div>
        </div>
        <div className="filter-grid">
          <div className="filter-group">
            <label className="filter-label">요청번호</label>
            <input className="filter-input" type="text" placeholder="요청번호 입력" />
          </div>
          <div className="filter-group">
            <label className="filter-label">입고창고</label>
            <select className="filter-select">
              <option value="">선택</option>
              <option>자재 주창고</option>
              <option>자재 부창고</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">BOX번호</label>
            <input className="filter-input" type="text" placeholder="BOX번호 입력" />
          </div>
          <div className="filter-group">
            <label className="filter-label">출고일자</label>
            <input className="filter-input" type="date" defaultValue="2025-11-07" />
          </div>
        </div>
      </div>

      {/* 청구 Line */}
      <div className="table-card animate-in">
        <div className="table-card-header">
          <div className="table-card-title">청구 Line</div>
          <span className="table-card-count">0건</span>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>자재코드</th>
                <th>자재명 / 규격</th>
                <th style={{ textAlign: 'center' }}>단위</th>
                <th style={{ textAlign: 'right' }}>청구량</th>
                <th style={{ textAlign: 'right' }}>기출고량</th>
                <th style={{ textAlign: 'right' }}>잔량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6}>
                  <div className="empty-state" style={{ padding: '30px 20px' }}>
                    <div className="empty-state-desc">요청번호를 입력하면 청구 내역이 조회됩니다</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 출고 Line */}
      <div className="table-card animate-in">
        <div className="table-card-header">
          <div className="table-card-title">출고 Line</div>
          <span className="table-card-count">0건</span>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>자재코드</th>
                <th>자재명 / 규격</th>
                <th style={{ textAlign: 'center' }}>단위</th>
                <th style={{ textAlign: 'right' }}>출고량</th>
                <th>자재LOT번호 / BOX번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <div className="empty-state" style={{ padding: '30px 20px' }}>
                    <div className="empty-state-desc">출고 자재를 추가해주세요</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-footer-summary">
          <span>합계:</span>
          <strong className="cell-quantity">0</strong>
          <button className="btn btn-primary" style={{ marginLeft: 'auto' }}>출고처리</button>
        </div>
      </div>
    </PageShell>
  );
}
