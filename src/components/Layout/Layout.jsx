import React, { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Container from "../Container";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <header className="bg-bg-container border-b flex justify-between laptop:px-[32px] desktop:px-[16px] ">
        <AppBar />
      </header>
      <main className=" bg-bg-container flex grow ">
        <Container>
          <Suspense fallback={<p>Loading ... </p>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <footer className="bg-bg-footer px-[21px] py-[10px] laptop:py-[19px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
