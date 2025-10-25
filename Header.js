function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navItems = [
    { name: "Home", path: "index.html" },
    { name: "About", path: "about.html" },
    { name: "Experience", path: "experience.html" },
    { name: "Education", path: "education.html" },
    { name: "Skills", path: "skills.html" },
    { name: "Languages", path: "languages.html" },
    { name: "Certifications", path: "certifications.html" }
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  try {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="index.html" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                <div className="icon-sun text-xl text-[var(--dark-gray)]"></div>
              </div>
              <span className="text-xl font-bold text-[var(--dark-gray)]">Solar Portfolio</span>
            </a>
            
            <div className="hidden md:flex gap-6">
              {navItems.map((item, index) => (
                <a key={index} href={item.path} className={`font-medium transition-colors ${currentPage === item.path ? 'text-[var(--secondary-color)]' : 'text-gray-600 hover:text-[var(--secondary-color)]'}`}>
                  {item.name}
                </a>
              ))}
            </div>
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--dark-gray)]`}></div>
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              {navItems.map((item, index) => (
                <a key={index} href={item.path} className={`block py-2 font-medium ${currentPage === item.path ? 'text-[var(--secondary-color)]' : 'text-gray-600'}`}>
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
