import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways Digital Health Records Can Save Lives in Emergencies",
      excerpt: "Learn how having instant access to your medical history can make all the difference in critical situations.",
      image: "https://images.unsplash.com/photo-1758653500437-26660f405fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGRvY3RvcnMlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NzA3MjE3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Health Tips",
      date: "February 8, 2026",
      author: "Dr. Sarah Chen",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Healthcare: Why Patient-Owned Data Matters",
      excerpt: "Exploring the importance of data ownership and how it's transforming the healthcare landscape.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlnaXRhbCUyMGZ1dHVyZXxlbnwxfHx8fDE3NzA3MjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Industry Insights",
      date: "February 5, 2026",
      author: "Michael Rodriguez",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Managing Medical Records for Elderly Parents: A Complete Guide",
      excerpt: "Practical tips and strategies for caregivers managing health documentation for aging loved ones.",
      image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMGNhcmVnaXZlciUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcwNzIxNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Caregiving",
      date: "February 1, 2026",
      author: "Emily Johnson",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Understanding OCR Technology in Medical Document Management",
      excerpt: "How optical character recognition is making it easier to digitize and organize health records.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMG9jcnxlbnwxfHx8fDE3NzA3MjE3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Technology",
      date: "January 28, 2026",
      author: "David Kumar",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "HIPAA Compliance Made Simple: What You Need to Know",
      excerpt: "A straightforward explanation of healthcare privacy laws and how MediPocket keeps your data secure.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBwcml2YWN5JTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzA3MjE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Security",
      date: "January 25, 2026",
      author: "James Park",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "How Families Are Using MediPocket: Real Stories",
      excerpt: "Hear from real users about how digital health records have simplified their healthcare journey.",
      image: "https://images.unsplash.com/photo-1663229049306-33b5cd9c2134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjaGlsZHJlbiUyMHBhcmVudHMlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MDcyMTcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "User Stories",
      date: "January 22, 2026",
      author: "Dr. Priya Sharma",
      readTime: "8 min read"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-6">
              📝 MediPocket Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Insights on Digital Health & Medical Records
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest tips, stories, and insights about managing your health records digitally
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Badge className="bg-emerald-100 text-emerald-700 mb-8">Featured Article</Badge>
          
          <Card className="border-0 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                  {featuredPost.category}
                </Badge>
              </div>
              
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{featuredPost.author}</span>
                  </div>
                  
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{post.author}</span>
                    </div>
                    
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Stay Updated with Health Insights
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-8">
            Subscribe to our newsletter for the latest tips on digital health management
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-3">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-emerald-200 mt-4">
            No spam, unsubscribe anytime
          </p>
        </div>
      </section>
    </div>
  );
}
