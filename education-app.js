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

function EducationApp() {
  const education = [
    {
      degree: "Bachelor of Engineering in Renewable Energy",
      institution: "University Name",
      date: "2016 - 2020",
      field: "Renewable Energy Systems",
      courses: ["Solar Energy Systems", "Power Electronics", "Energy Storage", "Grid Integration", "Thermal Energy Systems"]
    }
  ];

  try {
    return (
      <div className="min-h-screen" data-name="education-app" data-file="education-app.js">
        <Header />
        <main className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-5xl font-bold text-center mb-16">Education</h1>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <div className="icon-graduation-cap text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-lg text-[var(--secondary-color)] font-semibold mb-2">{edu.institution}</p>
                      <p className="text-gray-600">{edu.date}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Relevant Courses:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {edu.courses.map((course, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="icon-check-circle text-lg text-green-600"></div>
                          <span className="text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center text-gray-500">
                    <div className="icon-file-text text-3xl mb-2"></div>
                    <p>Add diploma scan here</p>
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
    console.error('EducationApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><EducationApp /></ErrorBoundary>);
