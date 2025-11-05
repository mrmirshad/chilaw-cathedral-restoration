import { motion } from "framer-motion";
import { Church, Menu, X } from "lucide-react";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="flex items-center gap-2 text-cathedral-blue hover:text-cathedral-gold transition-colors"
          >
            <Church className="w-8 h-8" />
            <span className="font-heading font-bold text-xl">
              Mount Carmel Cathedral
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-gray-700 hover:text-cathedral-gold transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-gray-700 hover:text-cathedral-gold transition-colors font-medium"
            >
              About
            </a>
            <button
              onClick={scrollToContact}
              className="text-gray-700 hover:text-cathedral-gold transition-colors font-medium bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <a
              href="/donate"
              className="bg-cathedral-gold hover:bg-yellow-500 text-cathedral-blue font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Donate Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cathedral-blue"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col gap-4">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-cathedral-gold transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-cathedral-gold transition-colors font-medium"
              >
                About
              </a>
              <button
                onClick={() => {
                  scrollToContact();
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-cathedral-gold transition-colors font-medium bg-transparent border-none cursor-pointer text-left"
              >
                Contact
              </button>
              <a
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="bg-cathedral-gold hover:bg-yellow-500 text-cathedral-blue font-semibold px-6 py-2 rounded-lg transition-all duration-300 text-center"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
