import { useTranslation } from 'react-i18next';
import { useTransactions } from "../../hooks/useTransactions";
import { useIntlLocale } from "../../hooks/useIntlLocale";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const { t } = useTranslation();
  const { locale, currency } = useIntlLocale();
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
  const formatDate = (date: Date | string) =>
    new Intl.DateTimeFormat(locale).format(new Date(date));

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>{t('table.title')}</th>
            <th>{t('table.amount')}</th>
            <th>{t('table.category')}</th>
            <th>{t('table.date')}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
