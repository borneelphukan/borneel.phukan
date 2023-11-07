import Navbar from "@/components/layout/NavBar";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import {React, useState, useEffect} from "react"

const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 min-h-screen">
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

export default DefaultLayout;
