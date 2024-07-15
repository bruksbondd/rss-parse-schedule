import styles from "./Header.module.css";
import Container from "./Container";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className={styles.header + " w-full flex justify-content-center"}>
      <Container className="justify-content-center align-items-center">
        <h1>Admin UI</h1>
      </Container>
    </header>
  );
};

export default Header;
