import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/NavBar";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      <Head>
        <title>Blogs | Borneel Bikash Phukan</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          {/* Main content */}
          <main>
            {children}
            <CircularProgressBar />
            <ThemeSwitch />
          </main>
          <footer>
            {/* Footer will go here */}
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default BlogLayout;
