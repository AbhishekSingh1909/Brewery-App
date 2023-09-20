import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { brewerySiteTheme } from "../Styles/theam";

import { Header } from "./Header";
import Footer from "./footer";

const Root = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={brewerySiteTheme}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Root;
