import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.tsx';

interface PageShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <header className="header animate-in">
        <div className="header-left">
          <button className="btn-back" onClick={() => navigate('/')} id="btn-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div>
            <h1 className="header-title">{title}</h1>
            <p className="header-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="header-right-group">
          <ThemeToggle />
          <div className="header-user">
          <div className="header-user-avatar">안</div>
          <div className="header-user-info">
            <span className="header-user-name">안상현</span>
            <span className="header-user-dept">R-PCB</span>
          </div>
        </div>
      </div>
    </header>
      {children}
    </div>
  );
}
