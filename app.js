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
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header />
        <main className="pt-20">
          <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--secondary-color)] to-[var(--dark-gray)]">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 text-center text-white px-4">
              <div className="w-24 h-24 rounded-full bg-[var(--primary-color)] bg-opacity-20 flex items-center justify-center mx-auto mb-6">
                <div className="icon-sun text-5xl text-[var(--primary-color)]"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Solar Energy Technician</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">Installation · Maintenance · R&D · Design</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="about.html" className="btn-primary">Learn More</a>
                <a href="#contact" className="btn-secondary">Get in Touch</a>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
