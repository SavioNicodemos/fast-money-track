import { useTranslation } from 'react-i18next';
import logoImg from '../../assets/logo.svg';
import { Container, Content, LanguageToggle } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { t, i18n } = useTranslation();

  function handleLanguageChange(lang: 'pt' | 'en') {
    i18n.changeLanguage(lang);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt={t('header.logoAlt')} />
        <div>
          <LanguageToggle>
            <button
              type="button"
              onClick={() => handleLanguageChange('pt')}
              data-active={i18n.language === 'pt'}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange('en')}
              data-active={i18n.language === 'en'}
            >
              EN
            </button>
          </LanguageToggle>
          <button type="button" onClick={onOpenNewTransactionModal}>
            {t('header.newTransaction')}
          </button>
        </div>
      </Content>
    </Container>
  );
}
