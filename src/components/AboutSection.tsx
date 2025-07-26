
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Responsive Design",
    "Git/GitHub",
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Quick Learner",
    "Adaptability",
    "Attention to Detail",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm Govardhana Guhanesh, a technical enthusiast with a passion for software development and creating 
              elegant solutions to modern technical challenges. As a fresher, I'm excited to begin my 
              professional journey in the tech industry.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              During my education, I focused on building a strong foundation in programming fundamentals,
              web technologies, and user experience design. I believe in clean, maintainable code and 
              creating applications that are both functional and intuitive.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I'm eager to learn, grow, and contribute to meaningful projects. My adaptability, 
              problem-solving skills, and enthusiasm for technology make me ready to take on new challenges 
              and make a positive impact.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={18} className="text-accent" />
                    <span className="text-primary/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-ratio-1/1 w-full max-w-md mx-auto bg-gradient-to-tr from-primary/10 to-accent/20 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-accent rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
