import PageShell from '../components/PageShell.tsx';

export default function TransferStatusPage() {
  return (
    <PageShell title="자재이송현황" subtitle="Transfer Status">
      <div className="filter-card animate-in">
        <div className="filter-card-header">
          <div className="filter-card-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            조회 조건
          </div>
        </div>
        <div className="filter-grid">
          <div className="filter-group">
            <label className="filter-label">일자 From</label>
            <input className="filter-input" type="date" defaultValue="2025-11-06" />
          </div>
          <div className="filter-group">
            <label className="filter-label">일자 To</label>
            <input className="filter-input" type="date" defaultValue="2025-11-07" />
          </div>
          <div className="filter-group">
            <label className="filter-label">창고 From</label>
            <select className="filter-select">
              <option>전체</option>
              <option>자재 주창고</option>
              <option>자재 부창고</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">창고 To</label>
            <select className="filter-select">
              <option>전체</option>
              <option>자재 주창고</option>
              <option>자재 부창고</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">BOX번호</label>
            <input className="filter-input" type="text" placeholder="BOX번호 입력" />
          </div>
          <div className="filter-group">
            <label className="filter-label">자재명</label>
            <input className="filter-input" type="text" placeholder="자재명 입력" />
          </div>
        </div>
        <div className="filter-actions">
          <button className="btn btn-ghost">초기화</button>
          <button className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            조회
          </button>
        </div>
      </div>

      <div className="table-card animate-in">
        <div className="table-card-header">
          <div className="table-card-title">이송 이력</div>
          <span className="table-card-count">10건</span>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>이송일자</th>
                <th>출고창고 / 출고LOC</th>
                <th>입고창고 / 입고LOC</th>
                <th style={{ textAlign: 'center' }}>단위</th>
                <th style={{ textAlign: 'right' }}>이송량</th>
                <th>이송구분 / BOX번호</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '2025-11-06 08:00', from: '자재 주창고', fromLoc: '자재 주창고 주 LOC', to: '자재 주창고', toLoc: '자재 주창고 주 LOC', unit: 'ST', qty: 100, type: '자재 박스번호 변경', box: 'NOT_PACKING' },
                { date: '2025-11-06 08:05', from: '자재 주창고', fromLoc: '자재 주창고 주 LOC', to: '자재 주창고', toLoc: '자재 주창고 주 LOC', unit: 'ST', qty: 250, type: '자재 박스번호 변경', box: 'NOT_PACKING' },
                { date: '2025-11-06 08:05', from: '자재 주창고', fromLoc: '자재 주창고 주 LOC', to: '자재 주창고', toLoc: '자재 주창고 주 LOC', unit: 'ST', qty: 250, type: '자재 박스번호 변경', box: 'NOT_PACKING' },
                { date: '2025-11-06 08:05', from: '자재 주창고', fromLoc: '자재 주창고 주 LOC', to: '자재 주창고', toLoc: '자재 주창고 주 LOC', unit: 'ST', qty: 48, type: '자재 박스번호 변경', box: 'NOT_PACKING' },
                { date: '2025-11-06 08:05', from: '자재 주창고', fromLoc: '자재 주창고 주 LOC', to: '자재 주창고', toLoc: '자재 주창고 주 LOC', unit: 'ST', qty: 50, type: '자재 박스번호 변경', box: 'NOT_PACKING' },
                { date: '2025-11-06 08:07', from: '자재 주창고', fromLoc: '자재 주창고 주 LOC', to: '자재 주창고', toLoc: '자재 주창고 주 LOC', unit: 'ST', qty: 300, type: '자재 박스번호 변경', box: 'NOT_PACKING' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="muted">{row.date}</td>
                  <td>
                    <div className="cell-warehouse">
                      <span className="cell-warehouse-name">{row.from}</span>
                      <span className="cell-warehouse-loc">{row.fromLoc}</span>
                    </div>
                  </td>
                  <td>
                    <div className="cell-warehouse">
                      <span className="cell-warehouse-name">{row.to}</span>
                      <span className="cell-warehouse-loc">{row.toLoc}</span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="unit-badge ea">{row.unit}</span>
                  </td>
                  <td style={{ textAlign: 'right' }} className="cell-quantity">{row.qty.toLocaleString()}</td>
                  <td>
                    <div className="cell-box">
                      <span className="cell-box-number">{row.type}</span>
                      <span className="cell-box-lot">{row.box}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-footer-summary">
          <span>합계:</span>
          <strong className="cell-quantity">998</strong>
        </div>
      </div>
    </PageShell>
  );
}
