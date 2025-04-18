import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/NavBar";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import CircularProgressBar from "@/components/common/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/common/Loader";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome | Borneel Bikash Phukan</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen">
          <Navbar />

          <main className="pt-16">
            {children}
            <CircularProgressBar />
            <ThemeSwitch />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
