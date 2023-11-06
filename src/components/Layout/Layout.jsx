import React, { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Container from "../Container";

const Layout = () => {
  return (
    <>
      <header className=" bg-bg-container border-b">
        <AppBar />
      </header>
      <main className=" bg-bg-container">
        <Container>
          <Suspense fallback={<p>Loading ... </p>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Layout;
