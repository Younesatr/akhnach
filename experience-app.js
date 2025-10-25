class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center"><p>Something went wrong</p></div>;
    }
    return this.props.children;
  }
}

function ExperienceApp() {
  const experiences = [
    {
      company: "Solar Energy Company",
      role: "Senior PV Technician",
      dates: "2020 - Present",
      responsibilities: ["Installation of residential and commercial PV systems", "Preventive and corrective maintenance", "System performance analysis and optimization"],
      tools: ["TRNSYS", "SketchUp", "Python"],
      achievements: ["Completed 50+ installations", "Reduced system downtime by 30%"],
      images: []
    }
  ];

  try {
    return (
      <div className="min-h-screen" data-name="experience-app" data-file="experience-app.js">
        <Header />
        <main className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-5xl font-bold text-center mb-16">Professional Experience</h1>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <div className="icon-briefcase text-xl text-[var(--secondary-color)]"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-lg text-[var(--secondary-color)] font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-600">{exp.dates}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Tools & Technologies:</h4>
                    <div className="flex gap-2 flex-wrap">
                      {exp.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-20 text-[var(--dark-gray)] rounded-full text-sm font-medium">{tool}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                    </ul>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center text-gray-500">
                    <div className="icon-image text-3xl mb-2"></div>
                    <p>Add installation photos and case study PDFs here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ExperienceApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ExperienceApp /></ErrorBoundary>);
