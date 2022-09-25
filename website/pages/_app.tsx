import type { AppProps } from "next/app";
import { LayoutThemeProvider } from "../context/LayoutThemeContext/LayoutThemeContext";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutThemeProvider>
      <Component {...pageProps} />
    </LayoutThemeProvider>
  )
};
export default App;
