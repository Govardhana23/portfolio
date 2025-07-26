
import { useState } from "react";
import { ExternalLink, Github, Code, ShoppingCart, ListTodo, CloudSun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string[];
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  icon: React.ReactNode;
  demoContent: React.ReactNode;
}

const EcommerceDemoContent = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
        <CardContent>
          <h4 className="font-bold">Premium Watch</h4>
          <p className="text-sm text-muted-foreground">Elegant timepiece with leather strap</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-accent">$199.99</span>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
        <CardContent>
          <h4 className="font-bold">Smart Speaker</h4>
          <p className="text-sm text-muted-foreground">Voice-controlled home assistant</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-accent">$89.99</span>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=300&q=80" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
        <CardContent>
          <h4 className="font-bold">Wireless Earbuds</h4>
          <p className="text-sm text-muted-foreground">Noise-cancelling with charging case</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-accent">$129.99</span>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
      <div>
        <p className="font-bold">Cart Total: $0.00</p>
        <p className="text-xs text-muted-foreground">0 items in cart</p>
      </div>
      <Button disabled className="bg-accent hover:bg-accent/90">Checkout</Button>
    </div>
  </div>
);

const TaskManagementDemoContent = () => {
  const [activeTab, setActiveTab] = useState("todo");
  
  return (
    <div className="space-y-4">
      <div className="flex border-b">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === "todo" ? "border-b-2 border-accent text-accent" : "text-muted-foreground"}`}
          onClick={() => setActiveTab("todo")}
        >
          To Do
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === "progress" ? "border-b-2 border-accent text-accent" : "text-muted-foreground"}`}
          onClick={() => setActiveTab("progress")}
        >
          In Progress
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === "done" ? "border-b-2 border-accent text-accent" : "text-muted-foreground"}`}
          onClick={() => setActiveTab("done")}
        >
          Done
        </button>
      </div>
      
      <div className="space-y-2">
        {activeTab === "todo" && (
          <>
            <div className="p-3 bg-background rounded border hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">Design new homepage</h4>
                  <p className="text-sm text-muted-foreground">Create wireframes and mockups for client approval</p>
                </div>
                <Badge>High</Badge>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-muted-foreground">Due: Aug 15, 2023</div>
                <Button size="sm" variant="outline">Start Task</Button>
              </div>
            </div>
            
            <div className="p-3 bg-background rounded border hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">Database migration plan</h4>
                  <p className="text-sm text-muted-foreground">Document steps for upcoming server migration</p>
                </div>
                <Badge>Medium</Badge>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-muted-foreground">Due: Aug 20, 2023</div>
                <Button size="sm" variant="outline">Start Task</Button>
              </div>
            </div>
          </>
        )}
        
        {activeTab === "progress" && (
          <>
            <div className="p-3 bg-background rounded border hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">API integration</h4>
                  <p className="text-sm text-muted-foreground">Connect payment gateway to checkout system</p>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-700">In Progress</Badge>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-muted-foreground">Due: Aug 12, 2023</div>
                <Button size="sm" variant="outline">Complete</Button>
              </div>
            </div>
          </>
        )}
        
        {activeTab === "done" && (
          <>
            <div className="p-3 bg-background rounded border opacity-80 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium line-through">Project setup</h4>
                  <p className="text-sm text-muted-foreground">Initialize repository and setup development environment</p>
                </div>
                <Badge className="bg-green-500/20 text-green-700">Completed</Badge>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-muted-foreground">Completed: Aug 5, 2023</div>
                <Button size="sm" variant="outline">Reopen</Button>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline" size="sm">
          <ListTodo className="h-4 w-4 mr-1" />
          Add Task
        </Button>
      </div>
    </div>
  );
};

const WeatherDashboardDemoContent = () => {
  const [activeCity, setActiveCity] = useState("new-york");
  
  const cityData = {
    "new-york": {
      name: "New York",
      temp: "72°F",
      condition: "Partly Cloudy",
      high: "78°F",
      low: "65°F",
      humidity: "45%",
      wind: "8 mph",
      forecast: [
        { day: "Wed", temp: "75°F", icon: "☁️" },
        { day: "Thu", temp: "79°F", icon: "☀️" },
        { day: "Fri", temp: "82°F", icon: "☀️" },
        { day: "Sat", temp: "80°F", icon: "🌤️" },
        { day: "Sun", temp: "77°F", icon: "🌧️" },
      ]
    },
    "london": {
      name: "London",
      temp: "18°C",
      condition: "Light Rain",
      high: "20°C",
      low: "16°C",
      humidity: "68%",
      wind: "12 km/h",
      forecast: [
        { day: "Wed", temp: "19°C", icon: "🌧️" },
        { day: "Thu", temp: "21°C", icon: "🌤️" },
        { day: "Fri", temp: "22°C", icon: "☁️" },
        { day: "Sat", temp: "20°C", icon: "🌧️" },
        { day: "Sun", temp: "18°C", icon: "🌧️" },
      ]
    },
    "tokyo": {
      name: "Tokyo",
      temp: "28°C",
      condition: "Clear",
      high: "30°C",
      low: "25°C",
      humidity: "62%",
      wind: "10 km/h",
      forecast: [
        { day: "Wed", temp: "29°C", icon: "☀️" },
        { day: "Thu", temp: "31°C", icon: "☀️" },
        { day: "Fri", temp: "30°C", icon: "🌤️" },
        { day: "Sat", temp: "29°C", icon: "☁️" },
        { day: "Sun", temp: "28°C", icon: "🌧️" },
      ]
    }
  };
  
  const current = cityData[activeCity as keyof typeof cityData];
  
  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button 
          variant={activeCity === "new-york" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setActiveCity("new-york")}
          className={activeCity === "new-york" ? "bg-accent hover:bg-accent/90" : ""}
        >
          New York
        </Button>
        <Button 
          variant={activeCity === "london" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setActiveCity("london")}
          className={activeCity === "london" ? "bg-accent hover:bg-accent/90" : ""}
        >
          London
        </Button>
        <Button 
          variant={activeCity === "tokyo" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setActiveCity("tokyo")}
          className={activeCity === "tokyo" ? "bg-accent hover:bg-accent/90" : ""}
        >
          Tokyo
        </Button>
      </div>
      
      <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{current.name}</h3>
            <p className="text-muted-foreground">Today, Aug 10</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{current.temp}</div>
            <div className="text-muted-foreground">{current.condition}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-background/80 p-3 rounded">
            <div className="text-muted-foreground text-sm">High/Low</div>
            <div>{current.high} / {current.low}</div>
          </div>
          <div className="bg-background/80 p-3 rounded">
            <div className="text-muted-foreground text-sm">Humidity</div>
            <div>{current.humidity}</div>
          </div>
          <div className="bg-background/80 p-3 rounded">
            <div className="text-muted-foreground text-sm">Wind</div>
            <div>{current.wind}</div>
          </div>
          <div className="bg-background/80 p-3 rounded">
            <div className="text-muted-foreground text-sm">Feels Like</div>
            <div>{current.temp}</div>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">5-Day Forecast</h4>
          <div className="grid grid-cols-5 gap-2">
            {current.forecast.map((day, idx) => (
              <div key={idx} className="bg-background/80 p-2 rounded text-center">
                <div className="text-sm">{day.day}</div>
                <div className="text-xl my-1">{day.icon}</div>
                <div className="text-sm font-medium">{day.temp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    detailedDescription: [
      "Developed a responsive e-commerce platform with product catalog and search functionality",
      "Implemented user authentication with secure JWT tokens and role-based access control",
      "Integrated Stripe payment gateway for secure checkout process",
      "Built a personalized recommendation system based on user browsing history",
      "Created an admin dashboard for inventory and order management"
    ],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
    demoLink: "#",
    codeLink: "#",
    icon: <ShoppingCart className="h-10 w-10 text-accent" />,
    demoContent: <EcommerceDemoContent />
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool that helps teams organize projects, assign tasks, and track progress in real-time.",
    detailedDescription: [
      "Built a Kanban-style board for intuitive task organization and workflow visualization",
      "Implemented real-time updates using WebSockets for collaborative team work",
      "Created a notification system for task assignments and deadline reminders",
      "Designed a reporting dashboard with performance metrics and productivity analytics",
      "Integrated with calendar APIs for seamless schedule synchronization"
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Firebase", "Redux", "Material UI", "WebSockets", "Chart.js"],
    demoLink: "#",
    codeLink: "#",
    icon: <ListTodo className="h-10 w-10 text-accent" />,
    demoContent: <TaskManagementDemoContent />
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current weather conditions and forecasts for locations worldwide.",
    detailedDescription: [
      "Developed a responsive weather application with location-based forecasting",
      "Integrated with OpenWeatherMap API for accurate weather data retrieval",
      "Implemented interactive maps with dynamic weather overlays",
      "Created data visualizations for temperature trends and precipitation forecasts",
      "Built a favorites system allowing users to save and track multiple locations"
    ],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80",
    tags: ["JavaScript", "Weather API", "Chart.js", "CSS3", "Geolocation", "LocalStorage"],
    demoLink: "#",
    codeLink: "#",
    icon: <CloudSun className="h-10 w-10 text-accent" />,
    demoContent: <WeatherDashboardDemoContent />
  },
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeDemoId, setActiveDemoId] = useState<number | null>(null);

  const toggleProjectDetails = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const openDemo = (projectId: number) => {
    setActiveDemoId(projectId);
  };

  const closeDemo = () => {
    setActiveDemoId(null);
  };

  const activeProject = projects.find(project => project.id === activeDemoId);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-muted/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and provide exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-accent/70 animate-on-scroll"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-60 bg-muted/30">
                <div className="absolute top-4 left-4 bg-background/90 p-2 rounded-full shadow-md z-10">
                  {project.icon}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleProjectDetails(project.id)}
                    className="px-0 text-accent hover:text-accent/80 hover:bg-transparent"
                  >
                    {expandedProject === project.id ? "Hide details" : "View details"}
                  </Button>
                  
                  {expandedProject === project.id && (
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground animate-fade-in">
                      {project.detailedDescription.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-accent">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-accent hover:bg-accent/90"
                    onClick={() => openDemo(project.id)}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent/90 animate-on-scroll" asChild>
            <a href="#" className="flex items-center space-x-2">
              <Code size={18} />
              <span>View All Projects</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Demo Modal */}
      {activeDemoId && activeProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent/10 rounded-full">
                  {activeProject.icon}
                </div>
                <h3 className="text-xl font-bold">{activeProject.title} Demo</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={closeDemo}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {activeProject.demoContent}
            </div>
            <div className="border-t p-4 flex justify-end">
              <Button onClick={closeDemo} variant="outline">Close Demo</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
