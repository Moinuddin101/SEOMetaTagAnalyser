import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Search, AlertCircle, CheckCircle, ExternalLink, Loader2, Pin as Jin, Info, Book, Home, Wand2, Menu, X } from 'lucide-react';
import Analyzer from './components/Analyzer';
import { Generator } from './components/Generator';
import { About } from './components/About';
import { Documentation } from './components/Documentation';
import { Blog } from './components/Blog';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#a2d6f9] relative">
        {/* Navigation */}
        <nav className="bg-[#072ac8] shadow-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center gap-2">
                  <Jin className="h-8 w-8 text-white" />
                  <span className="font-bold text-xl text-white">MetaTagAnalyser</span>
                </Link>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white"
                  >
                    <Home className="h-4 w-4 mr-1 text-white" />
                    Analyzer
                  </Link>
                  <Link
                    to="/generator"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white"
                  >
                    <Wand2 className="h-4 w-4 mr-1 text-white" />
                    Meta Tag Generator
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white"
                  >
                    <Info className="h-4 w-4 mr-1 text-white" />
                    About
                  </Link>
                  <Link
                    to="/docs"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white"
                  >
                    <Book className="h-4 w-4 mr-1 text-white" />
                    Documentation
                  </Link>
                  <Link
                    to="/blog"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white"
                  >
                    <Book className="h-4 w-4 mr-1 text-white" />
                    Blog
                  </Link>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md bg-[#072ac8] text-white hover:bg-[#072ac8] focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#072ac8] border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="h-5 w-5 mr-2 text-white" />
                  Analyzer
                </Link>
                <Link
                  to="/generator"
                  className="flex items-center px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Wand2 className="h-5 w-5 mr-2 text-white" />
                  Meta Tag Generator
                </Link>
                <Link
                  to="/about"
                  className="flex items-center px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info className="h-5 w-5 mr-2 text-white" />
                  About
                </Link>
                <Link
                  to="/docs"
                  className="flex items-center px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Book className="h-5 w-5 mr-2 text-white" />
                  Documentation
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Book className="h-5 w-5 mr-2 text-white" />
                  Blog
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* AdSense Placeholder - Top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
          <div className="bg-white/90 border border-gray-200 rounded-lg p-4 text-center text-gray-500">
            Advertisement Space
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Analyzer />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* AdSense Placeholder - Bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
          <div className="bg-white/90 border border-gray-200 rounded-lg p-4 text-center text-gray-500">
            Advertisement Space
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#072ac8] border-t border-white/20 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Jin className="h-6 w-6 text-white" />
                <span className="font-bold text-lg text-white">MetaTagAnalyser</span>
              </div>
              <p className="mb-2 text-gray-200">
                Your trusted companion for SEO meta tag analysis and generation
              </p>
              <p className="text-gray-300">
                © {new Date().getFullYear()} MetaTagAnalyser. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;