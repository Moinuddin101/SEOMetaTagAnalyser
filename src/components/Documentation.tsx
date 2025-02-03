import React from 'react';
import { Book, FileText, HelpCircle, PenTool as Tool, Wand2 } from 'lucide-react';

export function Documentation() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#072ac8] mb-4">
          Documentation
        </h1>
        <p className="text-xl text-gray-600">
          Learn how to use MetaTagAnalyser effectively
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-[#072ac8]" />
            <h2 className="text-2xl font-bold text-[#072ac8]">Getting Started</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ol className="space-y-4 text-gray-600">
              <li>
                <strong>Analyze Meta Tags:</strong> Input your website's full URL (including https://) in the analyzer box.
              </li>
              <li>
                <strong>Generate Meta Tags:</strong> Use our generator to create optimized meta tags for your website.
              </li>
              <li>
                <strong>Review Results:</strong> Examine the detailed analysis or generated tags.
              </li>
              <li>
                <strong>Make Improvements:</strong> Follow our recommendations to optimize your meta tags.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Tool className="h-6 w-6 text-[#072ac8]" />
            <h2 className="text-2xl font-bold text-[#072ac8]">Features</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1E1E2F] mb-2">Meta Tag Analyzer</h3>
                <p className="text-gray-600">
                  Analyze existing meta tags from any website to identify areas for improvement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1E1E2F] mb-2">Meta Tag Generator</h3>
                <p className="text-gray-600">
                  Create optimized meta tags with our user-friendly generator tool.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1E1E2F] mb-2">SEO Recommendations</h3>
                <p className="text-gray-600">
                  Get actionable insights and best practices for improving your meta tags.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-[#072ac8]" />
            <h2 className="text-2xl font-bold text-[#072ac8]">Best Practices</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ul className="space-y-4 text-gray-600">
              <li>✓ Keep titles between 50-60 characters</li>
              <li>✓ Write descriptions between 120-160 characters</li>
              <li>✓ Use relevant, targeted keywords</li>
              <li>✓ Include high-quality Open Graph images</li>
              <li>✓ Optimize meta tags for both users and search engines</li>
              <li>✓ Regularly update meta tags to reflect current content</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}