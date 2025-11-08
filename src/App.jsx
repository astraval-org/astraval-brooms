import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  // unified navigation handler
  const handleNavigation = (section, category = "All") => {
    setActiveSection(section);
    setSelectedCategory(category);
  };

  const renderPage = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={handleNavigation} />;
      case "about":
        return <About />;
      case "products":
        return (
          <Products
            setActiveSection={handleNavigation}
            initialCategory={selectedCategory}
          />
        );
      case "services":
        return <Services setActiveSection={handleNavigation} />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveSection={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={handleNavigation} />
      {renderPage()}
      <Footer setActiveSection={handleNavigation} />
    </div>
  );
}

export default App;
