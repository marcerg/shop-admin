import { ProviderAuth } from '../hooks/useAuth';
import '../app/globals.css';
import MainLayput from '../layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <MainLayput>
        <Component {...pageProps} />
      </MainLayput>
    </ProviderAuth>
  );
}

export default MyApp;
