import "@/styles/globals.css";
import { AppProvider } from "@/contexts/AppContext";
import Layout from "../../components/layout";
// import { BrowserRouter as Router } from "react-router-dom";

export default function App({ Component, pageProps }) {
  return (
    // <Router>
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>

    // </Router>
  );
}
