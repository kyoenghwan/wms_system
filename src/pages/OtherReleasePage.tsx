import PageShell from '../components/PageShell.tsx';

export default function OtherReleasePage() {
  return (
    <PageShell title="자재기타출고" subtitle="Other Release">
      <div className="filter-card animate-in">
        <div className="filter-card-header">
          <div className="filter-card-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            출고 정보
          </div>
        </div>
        <div className="filter-grid">
          <div className="filter-group">
            <label className="filter-label">출고일자</label>
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
            <label className="filter-label">출고구분</label>
            <select className="filter-select">
              <option value="">선택</option>
              <option>폐기</option>
              <option>반품</option>
              <option>기타</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">출고LOC</label>
            <input className="filter-input" type="text" defaultValue="자재 주창고 주 LOC" readOnly />
          </div>
          <div className="filter-group">
            <label className="filter-label">원가코드</label>
            <input className="filter-input" type="text" placeholder="원가코드 입력" />
          </div>
        </div>
      </div>

      <div className="table-card animate-in">
        <div className="table-card-header">
          <div className="table-card-title">출고 자재 목록</div>
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
                <th>BOX번호 / LOT번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>
                  <div className="empty-state" style={{ padding: '40px 20px' }}>
                    <div className="empty-state-title">출고 자재를 추가해주세요</div>
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
          <button className="btn btn-primary" style={{ marginLeft: 'auto' }}>출고처리</button>
        </div>
      </div>
    </PageShell>
  );
}
