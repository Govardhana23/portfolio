
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold">
              Portfolio
            </a>
            <p className="mt-2 text-white/70 max-w-md">
              Bringing fresh ideas and enthusiasm to software development with a focus on clean code and user experience.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full mb-4 hover:scale-110 duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <a href="https://github.com/Govardhana23" className="bg-white/10 hover:bg-accent transition-all duration-300 p-3 rounded-full hover:scale-110">
            <Github size={20} className="text-white" />
          </a>
          <a href="https://www.linkedin.com/in/govardhana-guhanesh-2130672b7/" className="bg-white/10 hover:bg-accent transition-all duration-300 p-3 rounded-full hover:scale-110">
            <Linkedin size={20} className="text-white" />
          </a>
          <a href="mailto:chessmaster2307@gmail.com" className="bg-white/10 hover:bg-accent transition-all duration-300 p-3 rounded-full hover:scale-110">
            <Mail size={20} className="text-white" />
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Govardhana Guhanesh. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
