import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  overflow: hidden;

  button {
    padding: 0 0.75rem;
    height: 2rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    background: transparent;
    opacity: 0.6;
    border-radius: 0;

    &[data-active='true'] {
      background: rgba(255, 255, 255, 0.2);
      opacity: 1;
    }

    &:hover {
      filter: none;
      opacity: 1;
    }
  }
`
