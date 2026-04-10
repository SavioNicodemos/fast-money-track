import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTranslation } from 'react-i18next';
import { useTransactions } from "../../hooks/useTransactions";

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const { t } = useTranslation();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, amount, category, type });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt={t('modal.closeAlt')} />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>{t('modal.heading')}</h2>

        <input
          type="text"
          placeholder={t('modal.titlePlaceholder')}
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder={t('modal.amountPlaceholder')}
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            $isActive={type === 'deposit'}
            $activeColor="green"
          >
            <img src={incomeImg} alt={t('modal.income')} />
            <span>{t('modal.income')}</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            $isActive={type === 'withdraw'}
            $activeColor="red"
          >
            <img src={outcomeImg} alt={t('modal.expense')} />
            <span>{t('modal.expense')}</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder={t('modal.categoryPlaceholder')}
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          {t('modal.submit')}
        </button>
      </Container>
    </Modal>
  );
}
