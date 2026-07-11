/**
 * StockFlow StatusBadge component
 * Source: stockflow_theme.dart — StockFlowStatusColors extension
 * Role: Financial state badge used across all modules (customers, invoices)
 *
 * Status values:
 *   paid    → green text (#0F5132) on soft green bg (#E8F1EC)
 *   partial → orange text (#F97316) on light orange bg (#FFF1E6)
 *   debt    → red text (#B91C1C) on soft red bg (#FEE2E2)
 *
 * Props:
 *   status: "paid" | "partial" | "debt" — badge variant
 *   label: string — display text in Arabic (e.g. "مدفوع", "جزئي", "آجل")
 */
const STATUS_STYLES = {
  paid: {
    bg: '#E8F1EC',
    text: '#0F5132',
    border: '1px solid #E8F1EC',
  },
  partial: {
    bg: '#FFF1E6',
    text: '#F97316',
    border: '1px solid #FFF1E6',
  },
  debt: {
    bg: '#FEE2E2',
    text: '#B91C1C',
    border: '1px solid #FEE2E2',
  },
};

const StatusBadge = ({ status = 'paid', label = 'مدفوع' }) => {
  const s = STATUS_STYLES[status] || STATUS_STYLES.paid;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: "'Cairo', sans-serif",
      fontSize: 11,
      fontWeight: 400,
      lineHeight: 1.3,
      background: s.bg,
      color: s.text,
      border: s.border,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
};

export default StatusBadge;
window.StatusBadge = StatusBadge;
