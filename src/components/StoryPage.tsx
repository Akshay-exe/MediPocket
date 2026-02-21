import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  AlertTriangle, 
  Lightbulb, 
  Smartphone, 
  Brain, 
  Building, 
  TrendingUp,
  ArrowRight,
  Quote,
  FileText
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function StoryPage() {
  const problemStats = [
    { number: "40%", label: "of patients lose medical records annually" },
    { number: "6.2", label: "hours average time spent managing health records" },
    { number: "73%", label: "of people struggle with medical document organization" }
  ];

  const solutionFeatures = [
    { title: "Secure Cloud Storage", description: "Bank-level encryption for all your documents" },
    { title: "Smart Organization", description: "AI-powered categorization and search" },
    { title: "Easy Sharing", description: "One-click sharing with healthcare providers" },
    { title: "Timeline View", description: "Chronological health history visualization" }
  ];

  const futureVisions = [
    {
      icon: Building,
      title: "Healthcare Integration",
      description: "Direct connections with hospitals, labs, and clinics for automatic record updates"
    },
    {
      icon: Brain,
      title: "AI Health Insights",
      description: "Personalized health recommendations based on your complete medical history"
    },
    {
      icon: TrendingUp,
      title: "Global Expansion",
      description: "Making digital health management accessible to families worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animation: 'blob 10s ease-in-out infinite' }}></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animation: 'blob 10s ease-in-out infinite 2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ animation: 'blob 10s ease-in-out infinite 4s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-8 text-base px-6 py-2">
              📖 Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="text-gray-900">From Chaos to{' '}</span>
              <span className="text-emerald-600 font-bold">Clarity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
              The journey of how a personal healthcare crisis became the inspiration 
              for a revolutionary digital health platform
            </p>
            <div className="flex justify-center gap-3 text-sm text-gray-500 mb-8">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Real problem
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Practical solution
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Thoughtful growth
              </span>
            </div>
          </div>
          
          {/* Additional context section */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-emerald-100">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4 text-center">Why This Problem Matters</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Every year, millions of families face the same challenge: medical records scattered across 
              different providers, lost prescriptions during critical moments, and the constant struggle 
              to maintain complete health histories. This isn't just an inconvenience—it's a systemic 
              problem that affects health outcomes and causes unnecessary stress during already difficult times.
            </p>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -20px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 20px) scale(1.05); }
          }
        `}} />
      </section>

      {/* Section 1: The Problem We Saw */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              The Problem We Saw
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare record management was broken, and families everywhere were suffering the consequences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">The Healthcare Record Crisis</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Medical records scattered across multiple providers and locations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Critical information lost during emergencies when it's needed most</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Families struggling to maintain complete health histories</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Time-consuming processes for sharing records between providers</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {problemStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl text-red-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542387740-67856d836e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2F0dGVyZWQlMjBtZWRpY2FsJTIwcGFwZXJzJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1ODcyNTAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scattered medical reports and documents"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="bg-red-50 p-4 rounded-xl mt-6 border-l-4 border-red-500">
                <p className="text-red-800 italic">
                  "When my father had a heart attack, we spent precious hours in the ER trying to 
                  piece together his medical history from scattered files and faded pharmacy receipts."
                </p>
                <p className="text-red-600 text-sm mt-2">— Dr. Sarah Chen, MediPocket Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution We Built */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              The Solution We Built
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MediPocket transforms chaos into clarity with secure, intelligent health record management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-6 h-6 text-emerald-600" />
                    <span className="text-lg">MediPocket App</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700">Live Demo</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Blood Work - Jan 15, 2024</span>
                    <Badge className="bg-green-100 text-green-700">Uploaded</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">X-Ray Results - Dec 8, 2023</span>
                    <Badge className="bg-blue-100 text-blue-700">Shared</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Prescription History</span>
                    <Badge className="bg-purple-100 text-purple-700">Timeline</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    ✨ AI Insight: Your blood pressure readings show improvement over the last 6 months.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl mb-6 text-gray-900">A Complete Digital Health Companion</h3>
              <p className="text-lg text-gray-600 mb-8">
                We didn't just digitize paper records – we reimagined how health information 
                should be organized, accessed, and shared in the modern world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solutionFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <h4 className="text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Future We Envision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              The Future We Envision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're just getting started. Here's where we're heading to make healthcare 
              even more accessible and intelligent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {futureVisions.map((vision, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <vision.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-4 text-gray-900">{vision.title}</h3>
                  <p className="text-gray-600">{vision.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inspirational Quote */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl md:text-3xl mb-6 text-emerald-700 leading-relaxed">
              Your health history deserves structure.
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Medical records should be available when they matter most. MediPocket brings order to 
              your health information, ensuring you and your family have access when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Be Part of the Healthcare Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of families who have already transformed their healthcare management with MediPocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Free to start • No credit card required • Your data stays secure
          </p>
        </div>
      </section>
    </div>
  );
}