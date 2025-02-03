import React, { useState, useMemo } from 'react';
import { AlertCircle, CheckCircle, Copy, Loader2 } from 'lucide-react';

interface MetaTagInput {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  robots: string;
}

export function Generator() {
  const [input, setInput] = useState<MetaTagInput>({
    title: '',
    description: '',
    keywords: '',
    author: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterCard: 'summary_large_image',
    robots: 'index, follow'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof MetaTagInput, string>>>({});
  const [copied, setCopied] = useState(false);

  const validateInput = () => {
    const newErrors: Partial<Record<keyof MetaTagInput, string>> = {};

    if (input.title && (input.title.length < 50 || input.title.length > 60)) {
      newErrors.title = 'Title should be between 50-60 characters';
    }

    if (input.description && (input.description.length < 120 || input.description.length > 160)) {
      newErrors.description = 'Description should be between 120-160 characters';
    }

    if (!input.keywords.trim()) {
      newErrors.keywords = 'Keywords are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const metaTags = useMemo(() => {
    if (!input.title || !input.description || !input.keywords) return '';

    return `<!-- Primary Meta Tags -->
<title>${input.title}</title>
<meta name="title" content="${input.title}">
<meta name="description" content="${input.description}">
<meta name="keywords" content="${input.keywords}">
<meta name="author" content="${input.author}">
<meta name="robots" content="${input.robots}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${input.ogTitle || input.title}">
<meta property="og:description" content="${input.ogDescription || input.description}">
${input.ogImage ? `<meta property="og:image" content="${input.ogImage}">` : ''}

<!-- Twitter -->
<meta property="twitter:card" content="${input.twitterCard}">
<meta property="twitter:title" content="${input.ogTitle || input.title}">
<meta property="twitter:description" content="${input.ogDescription || input.description}">
${input.ogImage ? `<meta property="twitter:image" content="${input.ogImage}">` : ''}`;
  }, [input]);

  const copyToClipboard = async () => {
    if (!validateInput()) return;
    
    if (metaTags) {
      await navigator.clipboard.writeText(metaTags);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#072ac8] mb-4">
          Meta Tag Generator
        </h1>
        <p className="text-xl text-gray-600">
          Create optimized meta tags for your website
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[#1E1E2F] mb-6">Enter Website Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title ({input.title.length}/60 characters)
              </label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent"
                placeholder="Enter page title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description ({input.description.length}/160 characters)
              </label>
              <textarea
                name="description"
                value={input.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent"
                placeholder="Enter meta description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Keywords (comma-separated)
              </label>
              <input
                type="text"
                name="keywords"
                value={input.keywords}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent"
                placeholder="keyword1, keyword2, keyword3"
              />
              {errors.keywords && (
                <p className="text-red-500 text-sm mt-1">{errors.keywords}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={input.author}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent"
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Open Graph Image URL (optional)
              </label>
              <input
                type="url"
                name="ogImage"
                value={input.ogImage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>

        {/* Generated Meta Tags */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#1E1E2F]">Generated Meta Tags</h2>
            {metaTags && (
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center px-4 py-2 bg-[#2E86AB] text-white rounded-lg hover:bg-[#1E1E2F] transition-colors"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copied ? 'Copied!' : 'Copy Tags'}
              </button>
            )}
          </div>

          {metaTags ? (
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap break-all">
                {metaTags}
              </pre>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              Fill in the form to generate meta tags
            </div>
          )}

          {/* SEO Tips */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#1E1E2F] mb-2">SEO Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Keep titles between 50-60 characters for optimal display in search results</li>
              <li>• Write compelling descriptions between 120-160 characters</li>
              <li>• Use relevant, targeted keywords separated by commas</li>
              <li>• Include high-quality Open Graph images (1200x630px recommended)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}