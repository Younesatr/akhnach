function Footer() {
  try {
    return (
      <footer className="bg-[var(--dark-gray)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                  <div className="icon-sun text-xl text-[var(--dark-gray)]"></div>
                </div>
                <span className="text-xl font-bold">Solar Portfolio</span>
              </div>
              <p className="text-gray-400">
                Professional Solar PV Technician specializing in installation, maintenance, R&D, and design.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="about.html" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="experience.html" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
                <a href="skills.html" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                  <div className="icon-linkedin text-xl"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                  <div className="icon-github text-xl"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                  <div className="icon-mail text-xl"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Solar Energy Technician Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
