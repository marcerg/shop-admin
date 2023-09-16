import "../app/globals.css";
import MainLayput from "../layout/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayput>
      <Component {...pageProps} />;
    </MainLayput>
  );
}

export default MyApp;
