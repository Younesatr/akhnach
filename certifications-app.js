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

function CertificationsApp() {
  const certifications = [
    { name: "Solar PV Installation Professional", issuer: "Certification Body", date: "2021" },
    { name: "Electrical Safety Certification", issuer: "Safety Institute", date: "2020" },
    { name: "PV System Design Certification", issuer: "Renewable Energy Board", date: "2019" }
  ];

  try {
    return (
      <div className="min-h-screen" data-name="certifications-app" data-file="certifications-app.js">
        <Header />
        <main className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-5xl font-bold text-center mb-16">Certifications</h1>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                      <div className="icon-award text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                      <p className="text-gray-600 mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center text-gray-500">
                    <div className="icon-file-text text-2xl mb-1"></div>
                    <p className="text-sm">Add certificate PDF/scan</p>
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
    console.error('CertificationsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><CertificationsApp /></ErrorBoundary>);
