import React, { useState } from 'react';
import { Clock, ArrowRight, ChevronLeft } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
  readTime: string;
  author: string;
}

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Complete Guide to Meta Tags: Boost Your SEO Rankings',
      excerpt: 'Learn how meta tags impact your website\'s SEO performance and discover best practices for optimization. From title tags to meta descriptions, master the art of meta tag optimization.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200&h=600',
      date: 'March 15, 2024',
      readTime: '8 min read',
      author: 'Sarah Johnson',
      content: `In today's digital landscape, meta tags remain one of the most crucial elements for SEO optimization and website visibility. As an SEO expert with years of experience in meta tag analysis, I can confidently say that properly optimized meta tags can significantly impact your search engine rankings and user engagement rates.

Meta tags serve as the foundation of your website's communication with search engines. They provide essential information about your web pages, helping search engines understand your content better and present it appropriately in search results. Let's dive deep into the world of meta tags and explore how you can leverage them for maximum SEO impact.

Title Tags: The Gateway to Higher Rankings
Your title tag is often the first thing both users and search engines see. It should be unique, descriptive, and contain your primary keyword, preferably near the beginning. The optimal length is between 50-60 characters to ensure it displays properly in search results. A well-crafted title tag not only improves click-through rates but also helps search engines understand your page's main topic.

Meta Descriptions: Your Search Result Sales Pitch
Think of meta descriptions as your elevator pitch in search results. While they don't directly influence rankings, they significantly impact click-through rates. A compelling meta description should:
- Be between 120-155 characters
- Include your target keywords naturally
- Contain a clear call-to-action
- Accurately summarize your page's content
- Be unique for each page

Using a Meta Tag Analyzer for Optimization
A quality meta tag analyzer tool can help you identify areas for improvement in your meta tags. These tools can:
- Check for optimal length and keyword usage
- Identify duplicate meta tags across your site
- Preview how your pages will appear in search results
- Suggest improvements based on best practices

Technical Considerations for Meta Tags
Beyond the basics, consider implementing:
- Robots meta tags to control search engine behavior
- Open Graph meta tags for social media sharing
- Schema markup for enhanced search results
- Viewport meta tags for mobile optimization

Regular analysis and updates to your meta tags are essential for maintaining and improving your search engine rankings. Remember, meta tags are not a "set it and forget it" element of SEO – they require ongoing optimization and adjustment based on performance data and changing search engine requirements.`
    },
    {
      id: '2',
      title: 'Meta Tag Generator: Your Secret Weapon for SEO Success',
      excerpt: 'Discover how using a meta tag generator can streamline your SEO workflow and improve your website\'s search engine visibility with optimized meta content.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=600',
      date: 'March 12, 2024',
      readTime: '6 min read',
      author: 'Michael Chen',
      content: `In the competitive world of SEO marketing, having the right tools can make all the difference. A meta tag generator stands out as an essential tool for modern SEO practitioners, helping create optimized meta tags that align with Google SEO best practices and current search engine requirements.

Understanding Meta Tag Generators
A meta tag generator is more than just a simple tool – it's a comprehensive solution for creating and optimizing your website's meta information. These tools have evolved from simple text generators to sophisticated platforms that can analyze your content and suggest optimized meta tags based on current SEO best practices.

Key Benefits of Using a Meta Tag Generator:

1. Time Efficiency and Consistency
- Automates the meta tag creation process
- Ensures consistent formatting across your website
- Reduces human error in meta tag implementation
- Streamlines the SEO workflow for large websites

2. Optimization Features
- Character count monitoring for optimal length
- Keyword placement suggestions
- Preview functionality for search results
- Social media meta tag generation

3. Technical Advantages
- Proper HTML formatting
- Mobile-friendly meta tag generation
- Schema markup integration options
- Cross-platform compatibility

Best Practices for Using Meta Tag Generators
To get the most out of your meta tag generator:
- Always review and customize generated tags
- Ensure keywords are naturally incorporated
- Test tags across different devices and platforms
- Regularly update tags based on performance data

Integration with SEO Strategy
Meta tag generators should be part of a broader SEO strategy that includes:
- Keyword research and analysis
- Content optimization
- User experience improvement
- Performance tracking

The Future of Meta Tag Generation
As search engines evolve, meta tag generators are becoming more sophisticated, incorporating:
- AI-powered suggestions
- Real-time SEO analysis
- Competitive meta tag comparison
- Advanced performance tracking

By leveraging a professional meta tag generator tool, you can ensure your website's meta information is properly formatted and optimized for search engines, leading to improved visibility and higher rankings in search results.`
    },
    {
      id: '3',
      title: 'SEO Optimization: Beyond Meta Tags and Backlinks',
      excerpt: 'Explore comprehensive SEO strategies that combine meta tag optimization, quality backlinks, and content optimization for maximum search engine visibility.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=600',
      date: 'March 10, 2024',
      readTime: '10 min read',
      author: 'David Wilson',
      content: `While meta tags and backlinks form the foundation of SEO, achieving top rankings in today's competitive digital landscape requires a more comprehensive approach. As an SEO expert, I've seen how successful SEO optimization strategies encompass multiple elements working in harmony to improve search visibility and user engagement.

The Evolution of SEO
Search engine optimization has evolved far beyond simple keyword placement and link building. Modern SEO requires a sophisticated approach that combines technical expertise, content strategy, and user experience optimization. Let's explore the key components of a comprehensive SEO strategy.

1. Technical SEO Foundation
- Server optimization and speed improvements
- Mobile responsiveness
- XML sitemap implementation
- Robots.txt configuration
- SSL certification
- URL structure optimization

2. Content Strategy and Optimization
- Keyword research and implementation
- Content clustering and pillar pages
- User intent alignment
- Regular content updates
- Multimedia optimization
- Internal linking strategy

3. User Experience Optimization
- Site navigation improvement
- Page load speed optimization
- Mobile-first design
- Accessibility considerations
- Clear call-to-actions
- Bounce rate reduction

4. Advanced SEO Techniques
- Schema markup implementation
- Featured snippet optimization
- Voice search optimization
- Local SEO optimization
- E-A-T improvement strategies

The Role of Tools in Modern SEO
Modern SEO relies heavily on sophisticated tools:
- Surfer SEO for content optimization
- SEO analyzers for performance tracking
- Technical SEO audit tools
- Backlink analysis platforms
- Analytics and reporting tools

Measuring SEO Success
Effective SEO measurement includes:
- Ranking improvements
- Organic traffic growth
- Conversion rate optimization
- User engagement metrics
- Core Web Vitals performance

Future-Proofing Your SEO Strategy
Stay ahead with:
- AI and machine learning integration
- Voice search optimization
- Mobile-first indexing
- Core Web Vitals optimization
- User experience signals

Remember, SEO is an ongoing process that requires regular monitoring, testing, and adjustment. Success comes from maintaining a balanced approach that considers all aspects of search engine optimization while staying focused on providing value to users.`
    },
    {
      id: '4',
      title: 'The Role of Meta Platforms in Modern SEO Services',
      excerpt: 'Understanding how meta platforms and social media integration affect your SEO strategy and overall digital marketing success.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200&h=600',
      date: 'March 8, 2024',
      readTime: '7 min read',
      author: 'Emma Thompson',
      content: `In today's interconnected digital landscape, meta platforms have become increasingly crucial for comprehensive SEO services and marketing strategies. As social media and search engines continue to evolve, understanding the relationship between meta platforms and SEO is essential for digital success.

The Impact of Meta Platforms on SEO
Meta platforms have revolutionized how we approach SEO and digital marketing:
- Integration of social signals in search rankings
- Enhanced visibility through social sharing
- Improved brand presence across platforms
- Increased engagement opportunities

Key Components of Meta Platform Optimization

1. Social Media Meta Tags
- Open Graph protocol implementation
- Twitter Card optimization
- Pinterest Rich Pins setup
- LinkedIn post optimization
- Instagram and Facebook preview optimization

2. Cross-Platform Content Strategy
- Content adaptation for different platforms
- Consistent branding across channels
- Platform-specific engagement tactics
- Cross-posting optimization
- Audience targeting refinement

3. Technical Implementation
- Meta tag customization per platform
- Schema markup integration
- Social media widgets and buttons
- Share count tracking
- Analytics integration

4. Platform-Specific SEO Requirements
- Facebook page optimization
- Instagram profile SEO
- Twitter profile optimization
- LinkedIn company page optimization
- YouTube channel optimization

Best Practices for Meta Platform Integration

1. Content Optimization
- Platform-appropriate content formats
- Optimal posting times
- Engagement-focused content
- Visual content optimization
- Hashtag strategy

2. Technical Considerations
- Mobile responsiveness
- Loading speed optimization
- Cross-platform compatibility
- Social sharing button placement
- Analytics tracking setup

3. Engagement Strategy
- Community management
- Response time optimization
- User-generated content integration
- Influencer collaboration
- Brand voice consistency

Working with SEO Service Providers
Professional SEO services can help:
- Develop platform-specific strategies
- Implement technical optimizations
- Monitor performance metrics
- Adjust strategies based on data
- Stay current with platform changes

Future Trends in Meta Platform SEO
Stay ahead with:
- AI-powered social optimization
- Video content optimization
- AR/VR integration
- Social commerce optimization
- Voice search integration

Remember, success in meta platform SEO requires a balanced approach that considers both traditional SEO practices and platform-specific requirements while maintaining focus on user engagement and value delivery.`
    }
  ];

  if (selectedPost) {
    return (
      <div className="prose prose-lg max-w-none">
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center text-[#072ac8] hover:text-[#072ac8]/80 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Blog List
        </button>
        
        <article>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {selectedPost.readTime}
            </span>
            <span>{selectedPost.date}</span>
            <span>By {selectedPost.author}</span>
          </div>

          <h1 className="text-4xl font-bold text-[#072ac8] mb-6">
            {selectedPost.title}
          </h1>

          <div className="text-gray-700 whitespace-pre-wrap">
            {selectedPost.content}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#072ac8] mb-4">
          SEO & Meta Tag Insights
        </h1>
        <p className="text-xl text-gray-600">
          Expert articles on SEO optimization and meta tag strategies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
              
              <h2 className="text-xl font-bold text-[#072ac8] mb-3">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <button
                onClick={() => setSelectedPost(post)}
                className="inline-flex items-center text-[#072ac8] hover:text-[#072ac8]/80"
              >
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}