import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle.tsx';

const menuItems = [
  {
    id: 'inventory',
    title: '자재재고조회',
    subtitle: 'Material Inventory',
    description: '자재별 재고 현황을 조회합니다',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    path: '/inventory',
    color: 'blue',
  },
  {
    id: 'transfer-status',
    title: '자재이송현황',
    subtitle: 'Transfer Status',
    description: '자재 이송 이력을 조회합니다',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" />
        <path d="M4 20L21 3" />
        <path d="M21 16v5h-5" />
        <path d="M15 15l6 6" />
        <path d="M4 4l5 5" />
      </svg>
    ),
    path: '/transfer-status',
    color: 'cyan',
  },
  {
    id: 'transfer-manage',
    title: '자재이송관리',
    subtitle: 'Transfer Management',
    description: '창고 간 자재 이송을 처리합니다',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    path: '/transfer-manage',
    color: 'indigo',
  },
  {
    id: 'other-release',
    title: '자재기타출고',
    subtitle: 'Other Release',
    description: '기타 사유 자재 출고를 처리합니다',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    path: '/other-release',
    color: 'amber',
  },
  {
    id: 'release-manage',
    title: '자재출고관리',
    subtitle: 'Release Management',
    description: '요청 기반 자재 출고를 관리합니다',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    path: '/release-manage',
    color: 'green',
  },
];

export default function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="main-menu-container">
      {/* Hero Header */}
      <div className="menu-hero animate-in">
        <div className="menu-hero-content">
          <div className="menu-hero-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7Z" fill="white" fillOpacity="0.9"/>
              <path d="M16 2H8C7.45 2 7 2.45 7 3V7H17V3C17 2.45 16.55 2 16 2Z" fill="white" fillOpacity="0.6"/>
              <rect x="6" y="11" width="5" height="3" rx="0.5" fill="#38bdf8" fillOpacity="0.6"/>
              <rect x="13" y="11" width="5" height="3" rx="0.5" fill="#38bdf8" fillOpacity="0.4"/>
              <rect x="6" y="16" width="5" height="3" rx="0.5" fill="#38bdf8" fillOpacity="0.3"/>
              <rect x="13" y="16" width="5" height="3" rx="0.5" fill="#38bdf8" fillOpacity="0.2"/>
            </svg>
          </div>
          <div>
            <h1 className="menu-hero-title">WMS</h1>
            <p className="menu-hero-subtitle">자재 관리 시스템</p>
          </div>
        </div>
        <div className="header-right-group">
          <ThemeToggle />
          <div className="menu-hero-user">
          <div className="header-user-avatar">안</div>
          <div className="header-user-info">
            <span className="header-user-name">안상현</span>
            <span className="header-user-dept">R-PCB</span>
          </div>
        </div>
      </div>
    </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            id={`menu-${item.id}`}
            className={`menu-card menu-card-${item.color} animate-in`}
            style={{ animationDelay: `${(index + 1) * 80}ms` }}
            onClick={() => navigate(item.path)}
          >
            <div className={`menu-card-icon menu-icon-${item.color}`}>
              {item.icon}
            </div>
            <div className="menu-card-text">
              <h2 className="menu-card-title">{item.title}</h2>
              <p className="menu-card-subtitle">{item.subtitle}</p>
            </div>
            <p className="menu-card-desc">{item.description}</p>
            <div className="menu-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="menu-footer animate-in" style={{ animationDelay: '500ms' }}>
        <p>WMS v1.0 · R-PCB 자재관리</p>
      </div>
    </div>
  );
}
