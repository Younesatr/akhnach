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

function LanguagesApp() {
  const languages = [
    { name: "Arabic", level: 100, proficiency: "Native" },
    { name: "French", level: 90, proficiency: "Fluent" },
    { name: "English", level: 90, proficiency: "Fluent" },
    { name: "German", level: 40, proficiency: "A2" },
    { name: "Lithuanian", level: 20, proficiency: "Beginner" }
  ];

  try {
    return (
      <div className="min-h-screen" data-name="languages-app" data-file="languages-app.js">
        <Header />
        <main className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl font-bold text-center mb-16">Languages</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-lg">{lang.name}</span>
                      <span className="text-gray-600">{lang.proficiency}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-[var(--secondary-color)] h-4 rounded-full transition-all duration-500" style={{width: `${lang.level}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('LanguagesApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><LanguagesApp /></ErrorBoundary>);
