import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './i18n';

async function bootstrap() {
  const { worker } = await import('./mocks/browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });

  const container = document.getElementById('root');
  const root = createRoot(container!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

bootstrap();
