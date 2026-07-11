/**
 * StockFlow AppBar component
 * Source: stockflow_theme.dart — AppBarTheme with Forest Green background
 * Role: Top navigation bar for StockFlow screens
 */
const AppBar = ({ title, showBack = true, onBack, onSearch }) => (
  <div style={{
    background: '#0F5132',
    color: '#fff',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Cairo', sans-serif",
    direction: 'rtl',
    minHeight: 56,
  }}>
    <span
      onClick={onBack}
      style={{
        opacity: showBack ? 0.7 : 0,
        cursor: showBack ? 'pointer' : 'default',
        fontSize: 18,
        userSelect: 'none',
      }}
    >←</span>
    <span style={{ fontSize: 18, fontWeight: 500 }}>{title}</span>
    <span
      onClick={onSearch}
      style={{ cursor: 'pointer', fontSize: 18, userSelect: 'none' }}
    >🔍</span>
  </div>
);

export default AppBar;
window.AppBar = AppBar;
