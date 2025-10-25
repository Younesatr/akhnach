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

function SkillsApp() {
  const technicalSkills = [
    "PV System Installation", "System Sizing & Design", "Operations & Maintenance",
    "Safety Protocols", "TRNSYS Simulation", "SketchUp Design",
    "System Diagnostics", "Corrosion Lab Work", "Python Data Analysis"
  ];

  const softSkills = [
    "Technical Report Writing", "Team Collaboration", "Project Leadership",
    "Problem Solving", "Time Management", "Client Communication"
  ];

  try {
    return (
      <div className="min-h-screen" data-name="skills-app" data-file="skills-app.js">
        <Header />
        <main className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-5xl font-bold text-center mb-16">Skills</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <div className="icon-cpu text-xl text-[var(--secondary-color)]"></div>
                  </div>
                  <h2 className="text-2xl font-bold">Technical Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-[var(--secondary-color)] bg-opacity-10 text-[var(--dark-gray)] rounded-lg text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <div className="icon-users text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <h2 className="text-2xl font-bold">Soft Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-[var(--primary-color)] bg-opacity-20 text-[var(--dark-gray)] rounded-lg text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('SkillsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><SkillsApp /></ErrorBoundary>);
