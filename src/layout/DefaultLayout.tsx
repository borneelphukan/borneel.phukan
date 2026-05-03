import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/NavBar";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/loader";
import CVBar from "@/components/layout/CVBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Rely immediately on Loader completing to hide it
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome | Borneel Bikash Phukan</title>
      </Head>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen relative">
          <CVBar />
          <Navbar />

          <main className="">
            {children}
            <CircularProgressBar />
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
