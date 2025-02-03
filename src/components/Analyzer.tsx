import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle, Loader2, ExternalLink, Info, Award, Zap } from 'lucide-react';

interface MetaTagResult {
  tag: string;
  content: string;
  status: 'good' | 'warning' | 'error';
  message: string;
  recommendation?: string;
  example?: string;
}

export default function Analyzer() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState<MetaTagResult[]>([]);
  const [overallScore, setOverallScore] = useState<number | null>(null);

  const analyzeTags = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    setOverallScore(null);

    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      
      if (!data.contents) {
        throw new Error('Failed to fetch website content');
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, 'text/html');
      
      const metaTags: MetaTagResult[] = [];
      let scoreTotal = 0;
      let scoreCount = 0;

      // Title analysis
      const title = doc.querySelector('title')?.textContent || '';
      const titleScore = title.length >= 50 && title.length <= 60 ? 100 : 
                        title.length > 0 ? 50 : 0;
      scoreTotal += titleScore;
      scoreCount++;
      
      metaTags.push({
        tag: 'Title',
        content: title,
        status: titleScore === 100 ? 'good' : titleScore === 50 ? 'warning' : 'error',
        message: `Title length: ${title.length} characters`,
        recommendation: 'Create a unique, descriptive title between 50-60 characters that includes your main keyword near the beginning.',
        example: 'SEO Meta Tag Analyzer | Free Tool for Website Optimization'
      });

      // Description analysis
      const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const descScore = description.length >= 120 && description.length <= 155 ? 100 :
                       description.length > 0 ? 50 : 0;
      scoreTotal += descScore;
      scoreCount++;
      
      metaTags.push({
        tag: 'Description',
        content: description,
        status: descScore === 100 ? 'good' : descScore === 50 ? 'warning' : 'error',
        message: `Description length: ${description.length} characters`,
        recommendation: 'Write a compelling meta description between 120-155 characters that accurately summarizes your page and includes a call-to-action.',
        example: 'Analyze your website\'s meta tags instantly with our free SEO tool. Get detailed recommendations to improve your search engine visibility. Try it now!'
      });

      // Keywords analysis
      const keywords = doc.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
      const keywordsList = keywords.split(',').map(k => k.trim());
      const keywordScore = keywordsList.length > 0 ? 70 : 0;
      scoreTotal += keywordScore;
      scoreCount++;
      
      metaTags.push({
        tag: 'Keywords',
        content: keywords,
        status: keywordScore > 0 ? 'warning' : 'error',
        message: `${keywordsList.length} keywords found`,
        recommendation: 'While less important for modern SEO, include 5-10 relevant keywords that accurately describe your page content.',
        example: 'seo analyzer, meta tags, seo tools, website optimization, meta description'
      });

      // Viewport analysis
      const viewport = doc.querySelector('meta[name="viewport"]')?.getAttribute('content') || '';
      const viewportScore = viewport.includes('width=device-width') ? 100 : 0;
      scoreTotal += viewportScore;
      scoreCount++;
      
      metaTags.push({
        tag: 'Viewport',
        content: viewport,
        status: viewportScore === 100 ? 'good' : 'error',
        message: viewport ? 'Viewport meta tag is present' : 'Viewport meta tag is missing',
        recommendation: 'Ensure your page is mobile-friendly by including a proper viewport meta tag.',
        example: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      });

      // Robots analysis
      const robots = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
      const robotsScore = robots ? 100 : 50;
      scoreTotal += robotsScore;
      scoreCount++;
      
      metaTags.push({
        tag: 'Robots',
        content: robots,
        status: robotsScore === 100 ? 'good' : 'warning',
        message: robots ? 'Robots meta tag is configured' : 'Using default robots behavior',
        recommendation: 'Configure the robots meta tag to control how search engines interact with your page.',
        example: '<meta name="robots" content="index, follow">'
      });

      // Open Graph analysis
      const og = {
        title: doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
        description: doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
        image: doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || ''
      };
      
      const ogScore = (og.title && og.description && og.image) ? 100 :
                     (og.title || og.description || og.image) ? 50 : 0;
      scoreTotal += ogScore;
      scoreCount++;
      
      metaTags.push({
        tag: 'Open Graph',
        content: `Title: ${og.title}\nDescription: ${og.description}\nImage: ${og.image}`,
        status: ogScore === 100 ? 'good' : ogScore === 50 ? 'warning' : 'error',
        message: ogScore === 100 ? 'All Open Graph tags present' : 'Missing some Open Graph tags',
        recommendation: 'Include Open Graph meta tags to control how your content appears when shared on social media.',
        example: '<meta property="og:title" content="Your Title">\n<meta property="og:description" content="Your Description">\n<meta property="og:image" content="https://example.com/image.jpg">'
      });

      setResults(metaTags);
      setOverallScore(Math.round(scoreTotal / scoreCount));
    } catch (err) {
      setError('Failed to analyze the website. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#072ac8] mb-4">
          Analyze Your Website's Meta Tags
        </h1>
        <p className="text-xl text-gray-600">
          Get instant insights into your website's SEO meta tags
        </p>
      </div>

      <form onSubmit={analyzeTags} className="mb-12">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#072ac8] focus:border-transparent outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-[#072ac8] text-white rounded-lg font-medium hover:bg-[#072ac8]/90 focus:ring-4 focus:ring-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Analyze Tags
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-8">
          {/* Overall Score Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overall SEO Score</h2>
            <div className="flex items-center justify-center gap-4">
              <div className={`text-5xl font-bold ${
                overallScore && overallScore >= 80 ? 'text-green-500' :
                overallScore && overallScore >= 60 ? 'text-yellow-500' :
                'text-red-500'
              }`}>
                {overallScore}%
              </div>
              {overallScore && overallScore >= 80 ? (
                <Award className="h-8 w-8 text-green-500" />
              ) : overallScore && overallScore >= 60 ? (
                <Info className="h-8 w-8 text-yellow-500" />
              ) : (
                <AlertCircle className="h-8 w-8 text-red-500" />
              )}
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {result.status === 'good' && (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  )}
                  {result.status === 'warning' && (
                    <AlertCircle className="h-6 w-6 text-yellow-500" />
                  )}
                  {result.status === 'error' && (
                    <AlertCircle className="h-6 w-6 text-red-500" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">{result.tag}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Current Value</p>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                      <code className="text-sm text-gray-700 break-all">
                        {result.content || '(empty)'}
                      </code>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Status</p>
                    <p className={`text-sm ${
                      result.status === 'good' ? 'text-green-600' :
                      result.status === 'warning' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {result.message}
                    </p>
                  </div>

                  {result.recommendation && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Recommendation</p>
                      <p className="text-sm text-gray-600">{result.recommendation}</p>
                    </div>
                  )}

                  {result.example && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Example</p>
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <code className="text-sm text-blue-600 break-all">
                          {result.example}
                        </code>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* SEO Tips */}
          <div className="bg-blue-50 rounded-xl p-6 mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-[#072ac8]" />
              <h3 className="text-xl font-semibold text-gray-900">Additional SEO Tips</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#072ac8]">•</span>
                Use your main keyword in the title, preferably near the beginning
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#072ac8]">•</span>
                Include a clear call-to-action in your meta description
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#072ac8]">•</span>
                Ensure your title and description are unique for each page
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#072ac8]">•</span>
                Use schema markup to provide additional context to search engines
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#072ac8]">•</span>
                Keep your URLs clean, descriptive, and keyword-rich
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#072ac8]">•</span>
                Optimize your images with descriptive alt text and file names
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}