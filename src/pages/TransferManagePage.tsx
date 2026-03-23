import PageShell from '../components/PageShell.tsx';

export default function TransferManagePage() {
  return (
    <PageShell title="자재이송관리" subtitle="Transfer Management">
      <div className="filter-card animate-in">
        <div className="filter-card-header">
          <div className="filter-card-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
            이송 정보
          </div>
        </div>
        <div className="filter-grid">
          <div className="filter-group">
            <label className="filter-label">이송일자</label>
            <input className="filter-input" type="date" defaultValue="2025-11-07" />
          </div>
          <div className="filter-group">
            <label className="filter-label">BOX번호</label>
            <input className="filter-input" type="text" placeholder="BOX번호 입력" />
          </div>
          <div className="filter-group">
            <label className="filter-label">출고창고</label>
            <select className="filter-select">
              <option>자재 주창고</option>
              <option>자재 부창고</option>
            </select>
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
            <label className="filter-label">출고LOC</label>
            <input className="filter-input" type="text" defaultValue="자재 주창고 주 LOC" readOnly />
          </div>
          <div className="filter-group">
            <label className="filter-label">입고LOC</label>
            <input className="filter-input" type="text" placeholder="입고LOC" />
          </div>
        </div>
      </div>

      <div className="table-card animate-in">
        <div className="table-card-header">
          <div className="table-card-title">이송 자재 목록</div>
          <span className="table-card-count">0건</span>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>자재코드</th>
                <th>자재명 / 규격</th>
                <th style={{ textAlign: 'center' }}>단위</th>
                <th style={{ textAlign: 'right' }}>이송량</th>
                <th>BOX번호 / LOT번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <div className="empty-state" style={{ padding: '40px 20px' }}>
                    <div className="empty-state-title">이송 자재를 추가해주세요</div>
                    <div className="empty-state-desc">BOX번호를 입력하면 자재가 조회됩니다</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-footer-summary">
          <span>합계:</span>
          <strong className="cell-quantity">0</strong>
          <button className="btn btn-primary" style={{ marginLeft: 'auto' }}>이송처리</button>
        </div>
      </div>
    </PageShell>
  );
}
