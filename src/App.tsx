import { GlobalStyles, darkTheme, lightTheme } from "@styles/globalStyles";
import { AppRouter } from "@utils/routerUtils";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme] = useState<string>("light");

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
