import React from 'react';
import { Pin as Jin, Award, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#072ac8] mb-4">
          About MetaTagAnalyser
        </h1>
        <p className="text-xl text-gray-600">
          Your trusted companion for SEO meta tag analysis and optimization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-[#072ac8]" />
            <h2 className="text-xl font-semibold text-[#1E1E2F]">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            MetaTagAnalyser aims to simplify SEO optimization by providing instant, accurate analysis and generation of your website's meta tags. We believe in making SEO accessible to everyone, from beginners to experts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-[#072ac8]" />
            <h2 className="text-xl font-semibold text-[#1E1E2F]">Who We Serve</h2>
          </div>
          <p className="text-gray-600">
            Our tools are designed for web developers, SEO specialists, content creators, and business owners who want to ensure their websites are optimized for search engines.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-[#1E1E2F] mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <Zap className="h-6 w-6 text-[#072ac8] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#1E1E2F] mb-2">Real-time Analysis</h3>
              <p className="text-gray-600">Get instant feedback on your meta tags with our powerful analysis engine.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Jin className="h-6 w-6 text-[#072ac8] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#1E1E2F] mb-2">Meta Tag Generator</h3>
              <p className="text-gray-600">Create optimized meta tags with our easy-to-use generator tool.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8">
        <h2 className="text-2xl font-bold text-[#1E1E2F] mb-4">Why Choose MetaTagAnalyser?</h2>
        <ul className="space-y-4 text-gray-600">
          <li>✓ Free to use with no registration required</li>
          <li>✓ Instant analysis of all important meta tags</li>
          <li>✓ Easy-to-use meta tag generator</li>
          <li>✓ Clear recommendations based on SEO best practices</li>
          <li>✓ User-friendly interface with detailed explanations</li>
          <li>✓ Regular updates to match search engine guidelines</li>
        </ul>
      </div>
    </div>
  );
}