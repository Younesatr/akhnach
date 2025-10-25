class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
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

function AboutApp() {
  try {
    return (
      <div className="min-h-screen" data-name="about-app" data-file="about-app.js">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">
              <h1 className="text-5xl font-bold text-center mb-16">About Me</h1>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-gray-300 flex items-center justify-center">
                    <div className="icon-user text-8xl text-gray-500"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Professional Solar PV Technician</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Experienced professional specializing in solar photovoltaic systems with expertise spanning installation, operations & maintenance, research & development, and system design.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Combining hands-on technical skills with engineering knowledge to deliver efficient, sustainable solar energy solutions.
                  </p>
                  <div className="flex gap-4 mb-6">
                    <a href="#" className="w-12 h-12 rounded-full bg-[var(--secondary-color)] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <div className="icon-linkedin text-xl"></div>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-[var(--dark-gray)] flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                      <div className="icon-github text-xl"></div>
                    </a>
                  </div>
                  <a href="#" className="btn-primary inline-flex items-center gap-2">
                    <div className="icon-download text-lg"></div>
                    Download CV
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Mission Statement</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To advance renewable energy adoption through expert solar PV installation, comprehensive maintenance services, innovative research & development, and efficient system design. Committed to delivering sustainable energy solutions that combine technical excellence with environmental responsibility.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><AboutApp /></ErrorBoundary>);
