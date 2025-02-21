import '../globals.css'; // ✅ Import global styles
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // ✅ Import the i18n configuration

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
