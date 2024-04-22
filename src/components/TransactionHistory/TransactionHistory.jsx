
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
<table className={css.table}>
  <thead className={css.head}>
    <tr>
      <th className={css.headContent}>Type</th>
      <th className={css.headContent}>Amount</th>
      <th className={css.headContent}>Currency</th>
    </tr>
  </thead>

      <tbody className={css.body}>
        {items.map((item) => (
          <tr className={css.bodyItem} key={item.id}>
            <td className={css.bodyContent}>{item.type}</td>
            <td className={css.bodyContent}>{item.amount}</td>
            <td className={css.bodyContent}>{item.currency}</td>
          </tr>
        ))}
  </tbody>
</table>

  )
}