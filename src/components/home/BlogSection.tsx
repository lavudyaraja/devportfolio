import React from 'react';
import { Calendar, PenTool, Code, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  preview: string;
  publishDate: string;
  tags: string[];
  icon: 'pen' | 'code' | 'book';
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    preview: 'Explore advanced patterns and best practices for creating maintainable React applications using TypeScript. Learn about proper component architecture, state management, and performance optimization techniques.',
    publishDate: '2024-07-15',
    tags: ['React', 'TypeScript', 'Architecture'],
    icon: 'code',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'The Art of Clean Code: Principles Every Developer Should Know',
    preview: 'Dive deep into the fundamental principles of writing clean, readable code. Discover how proper naming conventions, function design, and code organization can transform your development workflow.',
    publishDate: '2024-07-08',
    tags: ['Best Practices', 'Clean Code', 'Software Engineering'],
    icon: 'pen',
    readTime: '12 min read'
  },
  {
    id: '3',
    title: 'Modern CSS Techniques: From Grid to Container Queries',
    preview: 'Master the latest CSS features that are revolutionizing web design. Learn about CSS Grid, Flexbox, Container Queries, and how to create responsive layouts without media queries.',
    publishDate: '2024-06-28',
    tags: ['CSS', 'Web Design', 'Responsive'],
    icon: 'book',
    readTime: '10 min read'
  },
  {
    id: '4',
    title: 'Mastering Git Workflows for Team Collaboration',
    preview: 'Learn advanced Git techniques and workflows that streamline team collaboration. Explore branching strategies, conflict resolution, and automation tools that boost productivity.',
    publishDate: '2024-06-20',
    tags: ['Git', 'DevOps', 'Collaboration'],
    icon: 'code',
    readTime: '15 min read'
  },
  {
    id: '5',
    title: 'Performance Optimization in Modern Web Applications',
    preview: 'Uncover the secrets of building lightning-fast web applications. From bundle optimization to lazy loading, discover techniques that significantly improve user experience.',
    publishDate: '2024-06-12',
    tags: ['Performance', 'Optimization', 'Web Vitals'],
    icon: 'book',
    readTime: '14 min read'
  },
  {
    id: '6',
    title: 'The Future of Frontend Development: Trends to Watch',
    preview: 'Stay ahead of the curve with insights into emerging frontend technologies and methodologies. Explore what the next generation of web development looks like.',
    publishDate: '2024-06-05',
    tags: ['Frontend', 'Trends', 'Future Tech'],
    icon: 'pen',
    readTime: '11 min read'
  }
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'pen':
      return <PenTool className="w-5 h-5" />;
    case 'code':
      return <Code className="w-5 h-5" />;
    case 'book':
      return <BookOpen className="w-5 h-5" />;
    default:
      return <PenTool className="w-5 h-5" />;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogSection() {
  return (
    <section className=" bg-gray-900 relative overflow-hidden font-sans">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" /> */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
            `,
          }}
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-30 animate-pulse`}
            style={{
              background: ['#06b6d4', '#ec4899', '#8b5cf6', '#22c55e'][i % 4],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <PenTool className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300 text-sm font-medium">Latest Articles</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Developer
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Blog</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on modern web development, clean code practices, and emerging technologies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Glow Effect */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" /> */}
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {getIcon(post.icon)}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishDate)}</span>
                      <span className="text-gray-600">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-3">
                  {post.preview}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Read More Button */}
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group/btn backdrop-blur-sm">
                <span className="font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
        <Link to="/blog" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group/all">
        <span className="text-lg font-medium">View All Articles</span>
        <ArrowRight className="w-5 h-5 group-hover/all:translate-x-1 transition-transform duration-300" />
        </Link>
        </div>
      </div>
    </section>
  );
}