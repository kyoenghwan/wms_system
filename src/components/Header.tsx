interface HeaderProps {
  userName: string;
  department: string;
}

export default function Header({ userName, department }: HeaderProps) {
  return (
    <header className="header animate-in">
      <div className="header-left">
        <div className="header-icon">
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
          <h1 className="header-title">자재재고조회</h1>
          <p className="header-subtitle">Material Inventory System</p>
        </div>
      </div>
      <div className="header-user">
        <div className="header-user-avatar">
          {userName.charAt(0)}
        </div>
        <div className="header-user-info">
          <span className="header-user-name">{userName}</span>
          <span className="header-user-dept">{department}</span>
        </div>
      </div>
    </header>
  );
}
