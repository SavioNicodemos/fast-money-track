import { useTranslation } from 'react-i18next';
import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions'
import { useIntlLocale } from '../../hooks/useIntlLocale'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useTransactions();
  const { t } = useTranslation();
  const { locale, currency } = useIntlLocale();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

  return (
    <Container>
      <div>
        <header>
          <p>{t('summary.income')}</p>
          <img src={incomeImg} alt={t('summary.income')} />
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>{t('summary.expenses')}</p>
          <img src={outcomeImg} alt={t('summary.expenses')} />
        </header>
        <strong>- {formatCurrency(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>{t('summary.total')}</p>
          <img src={totalImg} alt={t('summary.total')} />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  );
}
