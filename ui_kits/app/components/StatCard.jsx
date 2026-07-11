/**
 * StockFlow StatCard component
 * Source: stockflow_theme.dart — CardTheme with 24px radius, white bg, green shadow
 * Role: Dashboard summary stat card (analytics data display)
 *
 * Props:
 *   value: string — primary metric value (e.g. "١٢,٤٥٠")
 *   currency: string (optional) — currency suffix (e.g. "ج.م")
 *   label: string — metric label in Arabic (e.g. "تحصيلات اليوم")
 *   change: string (optional) — change indicator (e.g. "+١٢٪")
 *   changeType: "up" | "down" (optional) — color direction
 */
const StatCard = ({ value, label, change, changeType, currency }) => {
  const isUp = changeType === 'up';
  return (
    <div style={{
      background: '#fff',
      borderRadius: 24,
      padding: 16,
      boxShadow: '0 2px 8px rgba(15,81,50,0.06)',
      fontFamily: "'Cairo', sans-serif",
      direction: 'rtl',
    }}>
      <div style={{
        fontSize: 24,
        fontWeight: 700,
        color: '#0A0A0A',
        lineHeight: 1.2,
      }}>
        {value}
        {currency && (
          <span style={{fontSize: 14, color: '#737373', marginRight: 2}}>
            {currency}
          </span>
        )}
      </div>
      <div style={{
        fontSize: 12,
        color: '#737373',
        marginTop: 4,
        lineHeight: 1.4,
      }}>
        {label}
      </div>
      {change && (
        <span style={{
          fontSize: 11,
          marginTop: 8,
          padding: '2px 8px',
          borderRadius: 999,
          display: 'inline-block',
          background: isUp ? '#E8F1EC' : '#FEE2E2',
          color: isUp ? '#16A34A' : '#DC2626',
          lineHeight: 1.3,
        }}>
          {change}
        </span>
      )}
    </div>
  );
};

export default StatCard;
window.StatCard = StatCard;
