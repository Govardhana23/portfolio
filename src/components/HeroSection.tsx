
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s", animationDuration: "8s"}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s", animationDuration: "10s"}}></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-medium mb-4 animate-fade-in">
            Hello, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary animate-fade-in" style={{animationDelay: "0.1s"}}>
            Govardhana Guhanesh
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-primary/70 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            An aspiring software developer ready to make an impact.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in" style={{animationDelay: "0.3s"}}>
            I'm a passionate entry-level software developer enthusiastic about building exceptional digital experiences.
            I'm eager to apply my skills and knowledge to create accessible, human-centered products.
          </p>
          <div className="space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button className="bg-accent hover:bg-accent/90 text-white transition-transform hover:scale-105 duration-300">
              View My Work
            </Button>
            <Button variant="outline" className="transition-transform hover:scale-105 duration-300">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Improved scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-primary/60 hover:text-accent transition-colors duration-300 group">
          <span className="text-sm mb-2 group-hover:translate-y-1 transition-transform duration-300">Scroll Down</span>
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
