import type { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import type { LayoutInterface } from "lib/interfaces/Layout";

// Layout template
const Layout: FC<LayoutInterface> = ({ children }) => {
  return (
    <>
      <Header />
      <Main
        className={
          "flex h-screen w-full justify-content-center align-items-center main-bg"
        }
      >
        {children}
      </Main>
    </>
  );
};

export default Layout;
