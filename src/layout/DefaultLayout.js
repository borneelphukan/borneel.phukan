import Navbar from "@/components/layout/NavBar";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
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
  );
};

export default DefaultLayout;
